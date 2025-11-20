// Paste your improved or beautified brochure JS here. Please specify what kind of adjustments you want visually, and I will update this file accordingly.

// Currently loaded code from your file:

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
    const height = lines.length * (size * 0.5);
    return height + 6;
  };

  const addHighlightParagraph = (text, x, y, width) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(...colors.primary);
    const lines = doc.splitTextToSize(text, width);
    doc.text(lines, x, y);
    return lines.length * 6 + 6;
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

  // ... Remaining existing code continues ...

  doc.save('GCA_Brochure.pdf');
};
