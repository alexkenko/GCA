import jsPDF from 'jspdf';

const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

export const generateBrochure = async () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 15;
  const contentWidth = pageWidth - margin * 2;
  const columnGap = 5;
  const columnWidth = (contentWidth - columnGap * 2) / 3;

  const colors = {
    primary: [0, 70, 127],
    accent: [0, 153, 204],
    textDark: [40, 40, 40],
    lightGray: [245, 247, 250]
  };

  const addHeading = (text, x, y, size = 16) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(size);
    doc.setTextColor(...colors.primary);
    doc.text(text, x, y);
  };

  const addParagraph = (text, x, y, width, size = 11, color = colors.textDark) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, width);
    doc.text(lines, x, y);
    const height = lines.length * (size * 0.42);
    return height + 4;
  };

  const addIconBullet = (text, x, y) => {
    doc.setFillColor(...colors.accent);
    doc.circle(x, y - 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...colors.textDark);
    const lines = doc.splitTextToSize(text, columnWidth - 8);
    doc.text(lines, x + 6, y);
    return lines.length * 4.5 + 4;
  };

  const heroImage = await loadImage('/images/cadet-parade-2.jpg');
  const deckImage = await loadImage('/images/cadet-parade-1.jpg');
  const trainingImage = await loadImage('/images/cadet-training-pool.jpg');

  // Header band
  doc.setFillColor(...colors.primary);
  doc.rect(0, 0, pageWidth, 55, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(26);
  doc.setTextColor(255, 255, 255);
  doc.text('Georgian Crewing Agency', margin, 28);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(13);
  doc.text('Professional Maritime Crewing Services', margin, 38);

  // Columns layout
  const leftX = margin;
  const middleX = leftX + columnWidth + columnGap;
  const rightX = middleX + columnWidth + columnGap;
  let leftY = 70;
  let middleY = 70;
  let rightY = 65;

  // Left column - Crew Expertise
  addHeading('Our Crew Expertise', leftX, leftY);
  leftY += 8;
  leftY += addParagraph(
    'Discover our pool of highly trained seafarers ready for deployment. From deck officers to engineers, we match the right talent to every vessel requirement.',
    leftX,
    leftY,
    columnWidth
  );
  leftY += 4;

  doc.addImage(deckImage, 'JPEG', leftX, leftY, columnWidth, 40, undefined, 'FAST');
  leftY += 47;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...colors.textDark);
  doc.text('Deck Crew', leftX, leftY);
  leftY += 6;
  leftY += addParagraph(
    'Our deck crew professionals handle navigation, maintenance, and safety operations, ensuring smooth voyages with expertise and precision.',
    leftX,
    leftY,
    columnWidth,
    10
  );
  leftY += 4;

  doc.addImage(trainingImage, 'JPEG', leftX, leftY, columnWidth, 40, undefined, 'FAST');
  leftY += 47;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('Engine Crew', leftX, leftY);
  leftY += 6;
  leftY += addParagraph(
    'Experienced engine room staff manage propulsion, electrical systems, and repairs, keeping vessels operational at peak performance.',
    leftX,
    leftY,
    columnWidth,
    10
  );

  // Middle column - About & Certifications
  addHeading('Professional Maritime Crewing Services', middleX, middleY);
  middleY += 10;
  middleY += addParagraph(
    'Georgian Crewing Agency (GCA) is your partner in maritime staffing. We deliver compliant crewing solutions tailored to the needs of shipowners and operators worldwide.',
    middleX,
    middleY,
    columnWidth
  );
  middleY += 6;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...colors.primary);
  doc.text(
    'Every crew member undergoes rigorous training and certification to meet international maritime standards for safety and efficiency.',
    middleX,
    middleY,
    { maxWidth: columnWidth }
  );
  middleY += 16;

  addHeading('Our Certifications', middleX, middleY, 13);
  middleY += 8;
  middleY += addParagraph('• ISO 9001:2015 – Quality Management System', middleX, middleY, columnWidth, 11);
  middleY += addParagraph('• MLC 2006 – Maritime Labour Convention', middleX, middleY, columnWidth, 11);
  middleY += addParagraph('• National Maritime Agency Authorization', middleX, middleY, columnWidth, 11);
  middleY += 12;

  addHeading('Why Choose Us?', middleX, middleY, 18);
  middleY += 10;
  middleY += addIconBullet('Safety Focus – prioritizing crew wellbeing and compliance.', middleX, middleY);
  middleY += addIconBullet('Expert Matching – tailored crew placements for optimal vessel performance.', middleX, middleY);
  middleY += addIconBullet('Global Network – access to international talent and vessel opportunities.', middleX, middleY);

  // Right column - hero image & CTA
  doc.addImage(heroImage, 'JPEG', rightX, rightY, columnWidth, 90, undefined, 'FAST');
  rightY += 100;
  addHeading('Services Snapshot', rightX, rightY);
  rightY += 8;
  const services = [
    'Marine Professionals Supply',
    'Crew Verification & Compliance',
    'Vessel Type Coverage',
    '24/7 Operational Support'
  ];
  services.forEach((service) => {
    rightY += addIconBullet(service, rightX, rightY);
  });

  // Footer contact panel first page
  doc.setFillColor(...colors.lightGray);
  doc.rect(0, pageHeight - 40, pageWidth, 40, 'F');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(...colors.primary);
  doc.text('www.gcagency.ge  |  crewing@gcagency.ge  |  +995 555 300 088', margin, pageHeight - 20);

  // Second page
  doc.addPage();
  let secondY = margin;

  addHeading('Expert Marine Crewing Solutions', margin, secondY, 20);
  secondY += 10;
  secondY += addParagraph(
    'At GCA we specialize in providing skilled and certified maritime crew to vessels worldwide. Our commitment to excellence, safety, and reliability ensures every seafarer meets the highest standards.',
    margin,
    secondY,
    contentWidth
  );
  secondY += 6;

  doc.addImage(heroImage, 'JPEG', margin, secondY, contentWidth, 60, undefined, 'FAST');
  secondY += 70;

  addHeading('Our Values', margin, secondY, 16);
  secondY += 8;
  secondY += addParagraph(
    'Skilled · Reliable · Certified\nWe prioritize professional development, rigorous training, and a culture of safety and teamwork among seafarers.',
    margin,
    secondY,
    contentWidth
  );
  secondY += 10;

  addHeading('Crewing Services', margin, secondY, 14);
  secondY += 8;
  secondY += addParagraph(
    '• Recruitment & placement of deck, engine, and catering personnel.\n• Compliance with international standards and owner-specific vetting.\n• Travel, documentation, and rotation planning support.',
    margin,
    secondY,
    contentWidth
  );
  secondY += 12;

  addHeading('Contact Us Now', margin, secondY, 18);
  secondY += 10;
  secondY += addParagraph('Email: crewing@gcagency.ge', margin, secondY, contentWidth, 12);
  secondY += addParagraph('Phone: +995 555 300 088 | +995 592 444 436 (24/7)', margin, secondY, contentWidth, 12);
  secondY += addParagraph('Address: Maiakovski Ave N41, Batumi, Georgia', margin, secondY, contentWidth, 12);

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(11);
  doc.setTextColor(...colors.primary);
  doc.text('Scan QR for more details', margin, secondY + 12);
  doc.rect(pageWidth - margin - 30, secondY - 4, 30, 30);
  doc.setFont('helvetica', 'bold');
  doc.text('GCA', pageWidth - margin - 22, secondY + 12);

  doc.save('GCA_Brochure.pdf');
};

