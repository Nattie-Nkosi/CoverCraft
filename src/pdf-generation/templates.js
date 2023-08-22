import fs from "fs";
import path from "path";

// Function to generate the cover letter HTML
export function generateCoverLetter(data) {
  // Read the base HTML template
  const templatePath = path.join(__dirname, "../templates/cover-letter.html");
  let html = fs.readFileSync(templatePath, "utf8");

  // Replace placeholders with actual data
  html = html.replace("{{contactInfo}}", data.contactInfo);
  html = html.replace("{{date}}", data.date);
  html = html.replace("{{recipientInfo}}", data.recipientInfo);
  html = html.replace("{{salutation}}", data.salutation);
  html = html.replace("{{introduction}}", data.introduction);
  html = html.replace("{{mainContent}}", data.mainContent);
  html = html.replace("{{closing}}", data.closing);
  html = html.replace("{{signature}}", data.signature);
  html = html.replace("{{footer}}", data.footer);

  return html;
}
