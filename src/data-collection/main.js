import fs from "fs";
import { collectData } from "./prompts.js";
import { createCoverLetter } from "./coverLetter.js";

async function main() {
  try {
    const answers = await collectData();
    const coverLetter = createCoverLetter(answers);

    // Define the file path
    const filePath = "./coverLetter.txt";

    // Write the cover letter to a file
    fs.writeFileSync(filePath, coverLetter);
    console.log(
      `Cover letter created successfully! Check the file at: ${filePath}`
    );
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
