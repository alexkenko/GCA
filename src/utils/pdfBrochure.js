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

const scaledHeight = (img, targetWidth) => {
  const naturalWidth = img.naturalWidth || img.width;
  const naturalHeight = img.naturalHeight || img.height;
  if (!naturalWidth || !naturalHeight) return targetWidth * 0.6;
  return (naturalHeight / naturalWidth) * targetWidth;
};

export const generateBrochure = async () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 12;
  const contentWidth = pageWidth - margin * 2;
  const columnGap = 6;

  const colors = {
    navy: [18, 52, 86],
    slate: [94, 112, 132],
    teal: [0, 144, 188],
    sand: [248, 248, 245],
    textDark: [35, 35, 35]
  };

  const heroImage = await loadImage('/images/cadet-parade-2.jpg');
  const deckImage = await loadImage('/images/cadet-parade-1.jpg');
  const engineImage = await loadImage('/images/cadet-training-pool.jpg');
  const logoImage = await loadImage('/images/gca-logo.png');
  const qrDataUrl = await QRCode.toDataURL('https://gcagency.ge', {
    width: 256,
    margin: 1,
    color: { dark: '#123456', light: '#ffffff' }
  });

  const addHeading = (text, x, y, size = 16, color = colors.navy) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(size);
    doc.setTextColor(...color);
    doc.text(text, x, y);
  };

  const addParagraph = (text, x, y, width, size = 11, color = colors.textDark, weight = 'normal') => {
    doc.setFont('helvetica', weight);
    doc.setFontSize(size);
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, width);
    doc.text(lines, x, y);
    return lines.length * (size * 0.55) + 5;
  };

  const addBadge = (text, x, y, color = colors.teal) => {
    const paddingX = 2;
    const paddingY = 1.5;
    const textWidth = doc.getTextWidth(text);
    doc.setFillColor(...color);
    doc.roundedRect(x, y - 5, textWidth + paddingX * 2, 6 + paddingY, 2, 2, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(255, 255, 255);
    doc.text(text, x + paddingX, y);
  };

  /* ---------- PAGE 1 ---------- */

  // Background gradient strip on right
  doc.setFillColor(255, 255, 255);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');
  doc.setFillColor(...colors.navy);
  doc.rect(pageWidth * 0.66, 0, pageWidth * 0.34, pageHeight, 'F');

  // Header logo area
  doc.setFillColor(...colors.sand);
  doc.rect(margin, margin, contentWidth * 0.32, 20, 'F');
  const logoHeight = 14;
  const logoWidth = (logoImage.width / logoImage.height) * logoHeight;
  doc.addImage(logoImage, 'PNG', margin + 4, margin + 3, logoWidth, logoHeight, undefined, 'FAST');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(18);
  doc.setTextColor(...colors.navy);
  doc.text('Georgian Crewing Agency', margin + logoWidth + 6, margin + 12);

  const col1Width = contentWidth * 0.31;
  const col2Width = contentWidth * 0.31;
  const col3Width = contentWidth - col1Width - col2Width - columnGap * 2;

  const col1X = margin;
  const col2X = col1X + col1Width + columnGap;
  const col3X = col2X + col2Width + columnGap;

  let col1Y = margin + 28;
  let col2Y = margin + 32;
  let col3Y = margin + 20;

  // Column 1 - Crew expertise
  addHeading('Our Crew Expertise', col1X, col1Y, 16);
  col1Y += 8;
  col1Y += addParagraph(
    'Discover our pool of highly trained seafarers ready for deployment. From deck officers to engineers, we match the right talent to every vessel requirement.',
    col1X,
    col1Y,
    col1Width,
    10.5
  );
  col1Y += 4;
  const deckHeight = scaledHeight(deckImage, col1Width);
  doc.addImage(deckImage, 'JPEG', col1X, col1Y, col1Width, deckHeight, undefined, 'FAST');
  col1Y += deckHeight + 5;
  addHeading('Deck Crew', col1X, col1Y, 13);
  col1Y += 6;
  col1Y += addParagraph(
    'Navigation, maintenance, and safety operations executed with precision to ensure smooth voyages.',
    col1X,
    col1Y,
    col1Width,
    10
  );
  col1Y += 4;
  const engineHeight = scaledHeight(engineImage, col1Width);
  doc.addImage(engineImage, 'JPEG', col1X, col1Y, col1Width, engineHeight, undefined, 'FAST');
  col1Y += engineHeight + 5;
  addHeading('Engine Crew', col1X, col1Y, 13);
  col1Y += 6;
  col1Y += addParagraph(
    'Experienced engine officers manage propulsion, electrical systems, and repairs, keeping vessels at peak performance.',
    col1X,
    col1Y,
    col1Width,
    10
  );

  // Column 2 - Gray card
  doc.setFillColor(242, 244, 247);
  doc.rect(col2X, margin + 18, col2Width, pageHeight - margin * 2 - 18, 'F');
  addHeading('Professional Maritime Crewing Services', col2X + 5, col2Y, 15, colors.slate);
  col2Y += 9;
  col2Y += addParagraph(
    'Georgian Crewing Agency delivers top-tier crewing solutions tailored to global shipowners. We ensure compliant operations and efficient deployments across all vessel types.',
    col2X + 5,
    col2Y,
    col2Width - 10,
    10.5,
    colors.slate
  );
  col2Y += 6;
  addBadge('International Standards', col2X + 5, col2Y + 6);
  col2Y += 12;
  col2Y += addParagraph(
    'Every crew member undergoes rigorous training and certification to meet maritime safety requirements worldwide.',
    col2X + 5,
    col2Y,
    col2Width - 10,
    11,
    colors.navy,
    'bold'
  );
  col2Y += 8;
  addHeading('Our Certifications', col2X + 5, col2Y, 12, colors.navy);
  col2Y += 7;
  ['ISO 9001:2015 – Quality Management System', 'MLC 2006 – Maritime Labour Convention', 'National Maritime Agency Authorization'].forEach(
    (item) => {
      col2Y += addParagraph(`• ${item}`, col2X + 7, col2Y, col2Width - 14, 10.5, colors.textDark);
    }
  );
  col2Y += 6;
  addHeading('Why Choose Us?', col2X + 5, col2Y, 15, colors.navy);
  col2Y += 8;
  ['Safety Focus – crew wellbeing & compliance', 'Expert Matching – tailored placements', 'Global Network – international talent'].forEach(
    (item) => {
      col2Y += addParagraph(`• ${item}`, col2X + 7, col2Y, col2Width - 14, 10.2);
    }
  );

  // Column 3 - Hero image & service blurbs
  const heroWidth = col3Width;
  const heroHeight = scaledHeight(heroImage, heroWidth);
  doc.addImage(heroImage, 'JPEG', col3X, col3Y, heroWidth, heroHeight, undefined, 'FAST');
  col3Y += heroHeight + 10;
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(col3X, col3Y, heroWidth, 70, 3, 3, 'F');
  addHeading('Services Snapshot', col3X + 6, col3Y + 10, 13);
  const serviceStartY = col3Y + 20;
  const serviceItems = [
    { title: 'Marine Professionals Supply', desc: 'Complete deck, engine, and catering coverage.' },
    { title: 'Crew Verification & Compliance', desc: 'Document validation, background checks, medicals.' },
    { title: '24/7 Operational Support', desc: 'Rapid response and rotation planning anytime.' }
  ];
  let serviceY = serviceStartY;
  serviceItems.forEach((item) => {
    addBadge(item.title, col3X + 6, serviceY);
    serviceY += 7;
    serviceY += addParagraph(item.desc, col3X + 6, serviceY, heroWidth - 12, 9.5);
    serviceY += 3;
  });

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...colors.navy);
  doc.setFontSize(11.5);
  doc.text('www.gcagency.ge  |  crewing@gcagency.ge  |  +995 555 300 088', margin, pageHeight - margin);

  /* ---------- PAGE 2 ---------- */

  doc.addPage();
  doc.setFillColor(248, 248, 249);
  doc.rect(0, 0, pageWidth, pageHeight, 'F');

  const secondColWidth = (contentWidth - columnGap) / 2;
  const secCol1X = margin;
  const secCol2X = secCol1X + secondColWidth + columnGap;

  let secY = margin + 4;

  addHeading('Expert Marine Crewing Solutions', secCol1X, secY, 18);
  secY += 9;
  secY += addParagraph(
    'We specialize in providing skilled and certified maritime crew to vessels worldwide. Our recruitment, compliance, and training programs guarantee each placement exceeds owner expectations.',
    secCol1X,
    secY,
    secondColWidth
  );
  secY += 8;
  const marinaHeight = scaledHeight(heroImage, secondColWidth);
  doc.addImage(heroImage, 'JPEG', secCol1X, secY, secondColWidth, marinaHeight, undefined, 'FAST');
  secY += marinaHeight + 10;
  addHeading('Our Values', secCol1X, secY, 14);
  secY += 7;
  secY += addParagraph(
    'Skilled • Reliable • Certified.\nWe foster professional development, continuous safety training, and a teamwork culture so every seafarer performs confidently on board.',
    secCol1X,
    secY,
    secondColWidth
  );
  secY += 8;
  addHeading('Crewing Services', secCol1X, secY, 14);
  secY += 7;
  secY += addParagraph(
    '• Recruitment & placement for deck, engine, and catering teams.\n• Compliance management and owner-specific vetting.\n• Travel coordination, documentation, and rotation planning support.',
    secCol1X,
    secY,
    secondColWidth
  );

  let secRightY = margin + 10;
  const teamHeight = scaledHeight(deckImage, secondColWidth);
  doc.addImage(deckImage, 'JPEG', secCol2X, secRightY, secondColWidth, teamHeight, undefined, 'FAST');
  secRightY += teamHeight + 10;
  addHeading('Contact Us Now!', secCol2X, secRightY, 17);
  secRightY += 8;
  secRightY += addParagraph('Email: crewing@gcagency.ge', secCol2X, secRightY, secondColWidth, 11);
  secRightY += addParagraph('Phone: +995 555 300 088 | +995 592 444 436 (24/7)', secCol2X, secRightY, secondColWidth, 11);
  secRightY += addParagraph('Address: Maiakovski Ave N41, Batumi, Georgia', secCol2X, secRightY, secondColWidth, 11);
  secRightY += 6;
  doc.addImage(qrDataUrl, 'PNG', secCol2X, secRightY, 35, 35, undefined, 'FAST');
  addParagraph('Scan for more details and online inquiries.', secCol2X + 40, secRightY + 10, secondColWidth - 40, 10, colors.textDark, 'bold');

  doc.save('GCA_Brochure.pdf');
};

