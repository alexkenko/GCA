import jsPDF from 'jspdf';

export const generateBrochure = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - (margin * 2);
  let yPosition = margin;

  // Helper function to add text with word wrap
  const addText = (text, x, y, maxWidth, fontSize = 12, fontStyle = 'normal', color = [0, 0, 0]) => {
    doc.setFontSize(fontSize);
    doc.setFont('helvetica', fontStyle);
    doc.setTextColor(color[0], color[1], color[2]);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return lines.length * (fontSize * 0.4) + 5;
  };

  // Helper function to add a line
  const addLine = (x1, y1, x2, y2, color = [0, 51, 102]) => {
    doc.setDrawColor(color[0], color[1], color[2]);
    doc.setLineWidth(0.5);
    doc.line(x1, y1, x2, y2);
  };

  // Cover Page
  // Header with background color
  doc.setFillColor(0, 51, 102); // Marine blue
  doc.rect(0, 0, pageWidth, 60, 'F');
  
  // Logo area (placeholder)
  doc.setFillColor(255, 255, 255);
  doc.rect(margin, 15, 40, 30, 'F');
  
  // Company Name
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('Georgian Crewing Agency', margin + 45, 30);
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'normal');
  doc.text('Professional Maritime Crewing Services', margin + 45, 40);
  
  yPosition = 80;

  // Main Title
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('Providing Qualified Marine Professionals', margin, yPosition);
  yPosition += 15;
  
  doc.setFontSize(18);
  doc.text('to Shipowners Worldwide', margin, yPosition);
  yPosition += 20;

  // About Section
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('About Us', margin, yPosition);
  yPosition += 10;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  const aboutText = 'Georgian Crewing Agency (GCA) is a professional crewing agency specializing in providing qualified marine professionals to shipowners worldwide. We serve shipowners of various vessel types, ensuring they receive skilled and certified crew members for their operations.';
  yPosition += addText(aboutText, margin, yPosition, contentWidth, 11);
  yPosition += 10;

  // Certifications
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('Our Certifications', margin, yPosition);
  yPosition += 10;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const certifications = [
    '• სსიპ "საზღვაო ტრანსპორტის სააგენტო"',
    '• ISO 9001:2015 - Quality Management System',
    '• MLC 2006 - Maritime Labour Convention'
  ];
  
  certifications.forEach(cert => {
    yPosition += addText(cert, margin + 5, yPosition, contentWidth - 5, 11);
  });
  yPosition += 15;

  // Check if we need a new page
  if (yPosition > pageHeight - 60) {
    doc.addPage();
    yPosition = margin;
  }

  // Services Section
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('Our Services', margin, yPosition);
  yPosition += 10;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);

  const services = [
    {
      title: 'Marine Professionals Supply',
      description: 'We provide qualified marine professionals including Deck Officers, Engine Officers, Ratings, Catering Staff, and Specialized Personnel.'
    },
    {
      title: 'Crew Verification',
      description: 'All marine professionals undergo thorough verification including credential verification, certification validation, background checks, and medical clearance.'
    },
    {
      title: 'Vessel Type Coverage',
      description: 'We provide crew for Container vessels, Bulk carriers, Tankers, General cargo vessels, Ro-Ro vessels, and Offshore vessels.'
    },
    {
      title: 'Reliable Service',
      description: 'We ensure timely and efficient placement of marine professionals to meet shipowners\' crewing schedules and operational needs.'
    }
  ];

  services.forEach((service, index) => {
    if (yPosition > pageHeight - 50) {
      doc.addPage();
      yPosition = margin;
    }
    
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 85, 136);
    yPosition += addText(service.title, margin, yPosition, contentWidth, 12, 'bold', [0, 85, 136]);
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
    yPosition += addText(service.description, margin + 5, yPosition, contentWidth - 5, 10);
    yPosition += 8;
  });

  // Check if we need a new page
  if (yPosition > pageHeight - 80) {
    doc.addPage();
    yPosition = margin;
  }

  // Vessel Types
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 51, 102);
  doc.text('Vessel Types We Serve', margin, yPosition);
  yPosition += 10;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const vesselTypes = [
    'Container Ships', 'Bulk Carriers', 'Tankers',
    'General Cargo Vessels', 'Ro-Ro Vessels', 'Offshore Vessels'
  ];
  
  const vesselText = vesselTypes.join(' • ');
  yPosition += addText(vesselText, margin, yPosition, contentWidth, 11);
  yPosition += 15;

  // Contact Information
  if (yPosition > pageHeight - 100) {
    doc.addPage();
    yPosition = margin;
  }

  // Footer background
  doc.setFillColor(0, 51, 102);
  doc.rect(0, pageHeight - 50, pageWidth, 50, 'F');

  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.text('Contact Us', margin, yPosition);
  yPosition += 12;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  
  const contactInfo = [
    'Email: crewing@gcagency.ge',
    'Phone: +995 555 300 088 (Office)',
    'Address: Maiakovski Ave, N41, Batumi, Georgia',
    'Office Hours: Monday - Friday: 9:00 AM - 6:00 PM'
  ];

  contactInfo.forEach(info => {
    doc.text(info, margin, yPosition);
    yPosition += 8;
  });

  yPosition += 5;
  doc.setFontSize(10);
  doc.text('24/7 Emergency: +995 592 444436 (Mr. Tornike Turmanidze)', margin, yPosition);

  // Save the PDF
  doc.save('GCA_Brochure.pdf');
};

