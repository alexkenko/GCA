// Storage utility for applications using Supabase
import { supabase } from '../lib/supabase';

const ADMIN_STORAGE_KEY = 'admin_session';

export const storage = {
  // Application storage
  async saveApplication(application) {
    try {
      console.log('Attempting to save application to Supabase:', application);
      
      // Prepare all application data - include all fields from the comprehensive form
      const insertData = {
        // Position Information
        position_applied_for: application.position_applied_for || application.rank_applied_for,
        date_of_availability: application.date_of_availability || null,
        last_salary: application.last_salary || null,
        
        // General Information
        surname: application.surname,
        date_of_birth: application.date_of_birth || null,
        first_name: application.first_name || application.name,
        place_of_birth: application.place_of_birth || null,
        nationality: application.nationality || null,
        home_telephone: application.home_telephone || null,
        mobile_phone: application.mobile_phone || application.phone_number,
        email_address: application.email_address || application.email,
        home_address: application.home_address || null,
        
        // Documents/Certificates (stored as JSON for flexibility)
        documents: {
          passport: {
            document_no: application.passport_document_no || null,
            place_issued: application.passport_place_issued || null,
            date_issued: application.passport_date_issued || null,
            expiry_date: application.passport_expiry_date || null
          },
          us_visa: {
            document_no: application.us_visa_document_no || null,
            place_issued: application.us_visa_place_issued || null,
            date_issued: application.us_visa_date_issued || null,
            expiry_date: application.us_visa_expiry_date || null
          },
          seaman_id: {
            document_no: application.seaman_id_document_no || null,
            place_issued: application.seaman_id_place_issued || null,
            date_issued: application.seaman_id_date_issued || null,
            expiry_date: application.seaman_id_expiry_date || null
          },
          national_license: {
            document_no: application.national_license_document_no || null,
            place_issued: application.national_license_place_issued || null,
            date_issued: application.national_license_date_issued || null,
            expiry_date: application.national_license_expiry_date || null,
            class: application.national_license_class || null
          },
          endorsement: {
            document_no: application.endorsement_document_no || null,
            place_issued: application.endorsement_place_issued || null,
            date_issued: application.endorsement_date_issued || null,
            expiry_date: application.endorsement_expiry_date || null
          }
        },
        
        // Sea Service Data (stored as JSON array)
        sea_service: application.sea_service || null,
        
        // Legacy fields (for backward compatibility)
        name: application.first_name || application.name || null,
        rank_applied_for: application.position_applied_for || application.rank_applied_for || null,
        experience_contracts: application.experience_contracts || null,
        experience_sea_time_months: application.experience_sea_time_months || null,
        phone_number: application.mobile_phone || application.phone_number || null,
        email: application.email_address || application.email || null,
        
        // Metadata
        gdpr_agreed: application.gdpr_agreed || false,
        application_id: application.application_id,
        status: application.status || 'pending',
        submitted_at: application.submitted_at || new Date().toISOString()
      };
      
      console.log('Insert data:', insertData);
      
      const { data, error } = await supabase
        .from('gca_crew_applications')
        .insert([insertData])
        .select()
        .single();

      if (error) {
        console.error('Supabase insert error:', error);
        console.error('Error details:', JSON.stringify(error, null, 2));
        throw new Error(`Database error: ${error.message || 'Unknown error'}`);
      }
      
      console.log('Application saved successfully:', data);
      return data;
    } catch (error) {
      console.error('Error saving application:', error);
      console.error('Error stack:', error.stack);
      throw error;
    }
  },

  async getApplications() {
    try {
      console.log('Fetching applications from Supabase...');
      const { data, error } = await supabase
        .from('gca_crew_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase error:', error);
        throw new Error(error.message || 'Failed to fetch applications');
      }
      
      console.log('Fetched applications:', data);
      return data || [];
    } catch (error) {
      console.error('Error fetching applications:', error);
      throw error; // Re-throw so dashboard can handle it
    }
  },

  async updateApplication(id, updates) {
    try {
      const { data, error } = await supabase
        .from('gca_crew_applications')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating application:', error);
      throw error;
    }
  },

  async deleteApplication(id) {
    try {
      const { error } = await supabase
        .from('gca_crew_applications')
        .delete()
        .eq('id', id);

      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Error deleting application:', error);
      throw error;
    }
  },

  // Admin session (still using localStorage for client-side session)
  setAdminSession(username) {
    const session = {
      username,
      loginTime: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // 24 hours
    };
    localStorage.setItem(ADMIN_STORAGE_KEY, JSON.stringify(session));
  },

  getAdminSession() {
    const data = localStorage.getItem(ADMIN_STORAGE_KEY);
    if (!data) return null;
    
    const session = JSON.parse(data);
    if (new Date(session.expiresAt) < new Date()) {
      localStorage.removeItem(ADMIN_STORAGE_KEY);
      return null;
    }
    return session;
  },

  clearAdminSession() {
    localStorage.removeItem(ADMIN_STORAGE_KEY);
  },

  // File upload for CV photos
  async uploadPhoto(file, applicationId) {
    try {
      if (!file) {
        return null;
      }

      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png'];
      if (!validTypes.includes(file.type)) {
        throw new Error('Invalid file type. Please upload a JPEG or PNG image.');
      }

      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        throw new Error('File size too large. Maximum size is 5MB.');
      }

      // Generate unique filename
      const fileExt = file.name.split('.').pop();
      const fileName = `${applicationId}_${Date.now()}.${fileExt}`;
      const filePath = `cv-photos/${fileName}`;

      console.log('Uploading photo to Supabase Storage...', { fileName, filePath });

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from('cv-photos')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error('Upload error:', error);
        throw new Error(`Failed to upload photo: ${error.message}`);
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('cv-photos')
        .getPublicUrl(filePath);

      console.log('Photo uploaded successfully:', urlData.publicUrl);
      return urlData.publicUrl;
    } catch (error) {
      console.error('Error uploading photo:', error);
      throw error;
    }
  }
};

