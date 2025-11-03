// Storage utility for applications using Supabase
import { supabase } from '../lib/supabase';

const ADMIN_STORAGE_KEY = 'admin_session';

export const storage = {
  // Application storage
  async saveApplication(application) {
    try {
      console.log('Attempting to save application to Supabase:', application);
      
      const insertData = {
        name: application.name,
        surname: application.surname,
        rank_applied_for: application.rank_applied_for,
        experience_contracts: application.experience_contracts,
        experience_sea_time_months: application.experience_sea_time_months,
        phone_number: application.phone_number,
        email_address: application.email_address,
        gdpr_agreed: application.gdpr_agreed || false,
        application_id: application.application_id,
        status: 'pending'
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
  }
};

