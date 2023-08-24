import { jsPDF } from "jspdf";

function generatePDF(content) {
  if (!content || !content.address || !content.mainContent) {
    console.error("Content, address, or main content is missing");
    return;
  }
  const doc = new jsPDF();
  const margin = 10;
  const lineHeight = 5;
  const pageHeight = doc.internal.pageSize.getHeight() - margin * 2;
  const pageWidth = doc.internal.pageSize.getWidth();

  doc.setFont("Helvetica");
  doc.setFontSize(10);

  let yPosition = margin;

  const addressLines = content.address.split("\n");

  addressLines.forEach((line, index) => {
    const textWidth = doc.getTextWidth(line);
    const xPosition = pageWidth - textWidth - margin;
    doc.text(xPosition, yPosition + index * lineHeight, line);
  });

  yPosition += addressLines.length * lineHeight + margin;

  const paragraphs = content.mainContent.split("\n\n");

  paragraphs.forEach((paragraph) => {
    const lines = doc.splitTextToSize(paragraph, 180);

    lines.forEach((line) => {
      if (yPosition > pageHeight) {
        yPosition = margin;
        doc.addPage();
      }

      doc.text(margin, yPosition, line);
      yPosition += lineHeight;
    });

    yPosition += lineHeight;
  });

  doc.save("coverLetter.pdf");
}

export { generatePDF };
