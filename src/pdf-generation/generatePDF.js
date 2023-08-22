import puppeteer from "puppeteer";
import { generateCoverLetter } from "./templates.js";

async function generatePDF(data) {
  const html = generateCoverLetter(data);

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.setContent(html);

  // Set the content of the page to the generated HTML
  await page.setContent(html);

  // Set the page size and margins (optional)
  await page.setViewport({ width: 595, height: 842 }); // A4 size

  // Generate the PDF
  const pdfBuffer = await page.pdf({
    format: "A4",
    margin: {
      top: "1in",
      right: "1in",
      bottom: "1in",
      left: "1in",
    },
  });

  // Save the PDF to a file (optional)
  const fs = require("fs");
  fs.writeFileSync("cover-letter.pdf", pdfBuffer);

  // Close the browser
  await browser.close();

  // Return the PDF buffer or other information as needed
  return pdfBuffer;
}

export { generatePDF };
