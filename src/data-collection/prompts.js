import inquirer from "inquirer";
import { capitalizeWords, customSalutation } from "./helpers.js";
import {
  validateEmail,
  validatePhone,
  validateRequired,
} from "./validation.js";

const prompts = [
  {
    type: "input",
    name: "fullname",
    message: "Please enter your fullname:",
    validate: validateRequired,
  },
  {
    type: "input",
    name: "address",
    message: "Please enter your address:",
    validate: validateRequired,
  },
  {
    type: "input",
    name: "phone",
    message: "Please enter your phone number:",
    validate: validatePhone,
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
    validate: validateEmail,
  },
  {
    type: "list",
    name: "salutation",
    message: "Please choose a salutation:",
    choices: [
      "Dear Sir/Madam",
      "To Whom It May Concern",
      "Dear [Recipient's Name]",
    ],
    validate: validateRequired,
  },
  {
    type: "input",
    name: "recipientName",
    message: "Please enter the recipient's name:",
    when: (answers) => answers.salutation === "Dear [Recipient's Name]",
    validate: validateRequired,
  },
  {
    type: "editor",
    name: "introduction",
    message: "Please write the introduction of your cover letter:",
    validate: validateRequired,
  },
  {
    type: "editor",
    name: "mainContent",
    message: "Please write the main content of your cover letter:",
    validate: validateRequired,
  },
  {
    type: "list",
    name: "closing",
    message: "Please choose a closing:",
    choices: ["Sincerely", "Yours Truly", "Best Regards", "Yours Faithfully"],
    validate: validateRequired,
  },
  {
    type: "input",
    name: "signature",
    message: "Please enter your name for the signature:",
    validate: validateRequired,
  },
];

async function collectData() {
  const answers = await inquirer.prompt(prompts);

  answers.fullname = capitalizeWords(answers.fullname);

  if (answers.salutation === "Dear [Recipient's Name]") {
    answers.salutation = customSalutation(answers.recipientName);
  }

  return answers;
}

export { collectData };
