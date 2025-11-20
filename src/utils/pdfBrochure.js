import jsPDF from 'jspdf';
import QRCode from 'qrcode';

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
  const columnGap = 8;
  const columnWidth = (contentWidth - columnGap * 2) / 3;

  const colors = {
    primary: [0, 70, 127],
    accent: [0, 153, 204],
    textDark: [40, 40, 40],
    lightGray: [245, 247, 250],
    darkGray: [60, 60, 60]
  };

  const addHeading = (text, x, y, size = 16) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(size);
    doc.setTextColor(...colors.primary);
    doc.text(text, x, y);
    return size * 0.5 + 4;
  };

  const addParagraph = (text, x, y, width, size = 11, color = colors.textDark, lineHeight = 0.55) => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, width);
    doc.text(lines, x, y);
    const height = lines.length * (size * lineHeight);
    return height + 8;
  };

  const addHighlightParagraph = (text, x, y, width) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...colors.primary);
    const lines = doc.splitTextToSize(text, width);
    doc.text(lines, x, y);
    return lines.length * 7 + 8;
  };

  const addIconBullet = (text, x, y) => {
    doc.setFillColor(...colors.accent);
    doc.circle(x, y - 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.setTextColor(...colors.textDark);
    const lines = doc.splitTextToSize(text, columnWidth - 10);
    doc.text(lines, x + 7, y);
    return lines.length * 5.5 + 6;
  };

  const scaledHeight = (img, width) => {
    const naturalWidth = img.naturalWidth || img.width;
    const naturalHeight = img.naturalHeight || img.height;
    if (!naturalWidth || !naturalHeight) return width * 0.6;
    return (naturalHeight / naturalWidth) * width;
  };

  const heroImage = await loadImage('/images/cadet-parade-2.jpg');
  const deckImage = await loadImage('/images/cadet-parade-1.jpg');
  const trainingImage = await loadImage('/images/cadet-training-pool.jpg');
  const logoImage = await loadImage('/images/gca-logo.png');
  const qrDataUrl = await QRCode.toDataURL('https://gcagency.ge', {
    width: 256,
    margin: 1,
    color: { dark: '#00467f', light: '#ffffff' }
  });

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
  const dividerTop = 60;
  const dividerBottom = pageHeight - 45;

  doc.setDrawColor(220, 226, 232);
  doc.setLineWidth(0.6);
  doc.line(leftX + columnWidth + columnGap / 2, dividerTop, leftX + columnWidth + columnGap / 2, dividerBottom);
  doc.line(middleX + columnWidth + columnGap / 2, dividerTop, middleX + columnWidth + columnGap / 2, dividerBottom);

  let leftY = 70;
  let middleY = 70;
  let rightY = 70;

  // Left column - Crew Expertise
  leftY += addHeading('Our Crew Expertise', leftX, leftY);
  leftY += 6;
  leftY += addParagraph(
    'Discover our pool of highly trained seafarers ready for deployment. From deck officers to engineers, we match the right talent to every vessel requirement.',
    leftX,
    leftY,
    columnWidth
  );
  leftY += 6;

  const deckHeight = Math.min(scaledHeight(deckImage, columnWidth), 45);
  doc.addImage(deckImage, 'JPEG', leftX, leftY, columnWidth, deckHeight, undefined, 'FAST');
  leftY += deckHeight + 8;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.setTextColor(...colors.textDark);
  doc.text('Deck Crew', leftX, leftY);
  leftY += 7;
  leftY += addParagraph(
    'Our deck crew professionals handle navigation, maintenance, and safety operations, ensuring smooth voyages with expertise and precision.',
    leftX,
    leftY,
    columnWidth,
    10
  );
  leftY += 8;

  const trainingHeight = Math.min(scaledHeight(trainingImage, columnWidth), 45);
  doc.addImage(trainingImage, 'JPEG', leftX, leftY, columnWidth, trainingHeight, undefined, 'FAST');
  leftY += trainingHeight + 8;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('Engine Crew', leftX, leftY);
  leftY += 7;
  leftY += addParagraph(
    'Experienced engine room staff manage propulsion, electrical systems, and repairs, keeping vessels operational at peak performance.',
    leftX,
    leftY,
    columnWidth,
    10
  );

  // Middle column - About & Certifications
  middleY += addHeading('Professional Maritime Crewing Services', middleX, middleY);
  middleY += 6;
  middleY += addParagraph(
    'Georgian Crewing Agency (GCA) is your partner in maritime staffing. We deliver compliant crewing solutions tailored to the needs of shipowners and operators worldwide.',
    middleX,
    middleY,
    columnWidth
  );
  middleY += 8;
  middleY += addHighlightParagraph(
    'Every crew member undergoes rigorous training and certification to meet international maritime standards for safety and efficiency.',
    middleX,
    middleY,
    columnWidth
  );
  doc.setDrawColor(225, 225, 225);
  doc.setLineWidth(0.4);
  doc.line(middleX, middleY + 2, middleX + columnWidth, middleY + 2);
  middleY += 12;

  middleY += addHeading('Our Certifications', middleX, middleY, 13);
  middleY += 6;
  middleY += addParagraph('• ISO 9001:2015 – Quality Management System', middleX, middleY, columnWidth, 11);
  middleY += 5;
  middleY += addParagraph('• MLC 2006 – Maritime Labour Convention', middleX, middleY, columnWidth, 11);
  middleY += 5;
  middleY += addParagraph('• National Maritime Agency Authorization', middleX, middleY, columnWidth, 11);
  middleY += 12;

  middleY += addHeading('Why Choose Us?', middleX, middleY, 18);
  middleY += 8;
  middleY += addIconBullet('Safety Focus – prioritizing crew wellbeing and compliance.', middleX, middleY);
  middleY += addIconBullet('Expert Matching – tailored crew placements for optimal vessel performance.', middleX, middleY);
  middleY += addIconBullet('Global Network – access to international talent and vessel opportunities.', middleX, middleY);

  // Right column - branding & CTA
  const logoHeight = Math.min(scaledHeight(logoImage, columnWidth * 0.9), 50);
  doc.addImage(
    logoImage,
    'PNG',
    rightX + (columnWidth - columnWidth * 0.9) / 2,
    rightY,
    columnWidth * 0.9,
    logoHeight,
    undefined,
    'FAST'
  );
  rightY += logoHeight + 14;
  rightY += addHeading('Services Snapshot', rightX, rightY);
  rightY += 6;
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

  secondY += addHeading('Expert Marine Crewing Solutions', margin, secondY, 20);
  secondY += 8;
  secondY += addParagraph(
    'At GCA we specialize in providing skilled and certified maritime crew to vessels worldwide. Our commitment to excellence, safety, and reliability ensures every seafarer meets the highest standards.',
    margin,
    secondY,
    contentWidth
  );
  secondY += 8;

  const bannerHeight = Math.min(scaledHeight(heroImage, contentWidth), 60);
  doc.addImage(heroImage, 'JPEG', margin, secondY, contentWidth, bannerHeight, undefined, 'FAST');
  secondY += bannerHeight + 12;

  secondY += addHeading('Our Values', margin, secondY, 16);
  secondY += 6;
  secondY += addParagraph(
    'Skilled · Reliable · Certified\nWe prioritize professional development, rigorous training, and a culture of safety and teamwork among seafarers.',
    margin,
    secondY,
    contentWidth
  );
  secondY += 10;

  secondY += addHeading('Crewing Services', margin, secondY, 14);
  secondY += 6;
  secondY += addParagraph(
    '• Recruitment & placement of deck, engine, and catering personnel.\n• Compliance with international standards and owner-specific vetting.\n• Travel, documentation, and rotation planning support.',
    margin,
    secondY,
    contentWidth
  );
  secondY += 12;

  secondY += addHeading('Contact Us Now', margin, secondY, 18);
  secondY += 8;
  secondY += addParagraph('Email: crewing@gcagency.ge', margin, secondY, contentWidth, 12);
  secondY += addParagraph('Phone: +995 555 300 088 | +995 592 444 436 (24/7)', margin, secondY, contentWidth, 12);
  secondY += addParagraph('Address: Maiakovski Ave N41, Batumi, Georgia', margin, secondY, contentWidth, 12);

  const qrSize = 32;
  doc.addImage(qrDataUrl, 'PNG', pageWidth - margin - qrSize, secondY - 4, qrSize, qrSize, undefined, 'FAST');
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(11);
  doc.setTextColor(...colors.primary);
  doc.text('Scan QR for more details', margin, secondY + 12);

  doc.save('GCA_Brochure.pdf');
};
