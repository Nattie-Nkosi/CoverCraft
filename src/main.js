import { collectData } from "./data-collection/prompts.js";
import { createCoverLetter } from "./data-collection/coverLetter.js";
import { generatePDF } from "./pdf-generation/pdfGenerator.js";

async function main() {
  try {
    const answers = await collectData();

    const coverLetterText = createCoverLetter(answers);

    generatePDF({ address: answers.address, mainContent: coverLetterText });

    console.log("PDF successfully generated!");
  } catch (error) {
    console.error("An error occurred while generating the PDF:", error);
  }
}

main();
