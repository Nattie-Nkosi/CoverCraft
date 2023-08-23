import { collectData } from "./prompts.js";
import { createCoverLetter } from "./coverLetter.js";
import { generatePDF } from "../pdf-generation/pdfGenerator.js";

async function main() {
  try {
    // Collect data from the user
    const answers = await collectData();

    // Create the cover letter text
    const coverLetterText = createCoverLetter(answers);

    // Generate the PDF
    generatePDF({ address: answers.address, mainContent: coverLetterText });

    console.log("PDF successfully generated!");
  } catch (error) {
    console.error("An error occurred while generating the PDF:", error);
  }
}

main();
