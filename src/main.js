import inquirer from "inquirer";

const prompts = [
  {
    type: "input",
    name: "fullname",
    message: "Please enter your fullname:",
  },
  {
    type: "input",
    name: "address",
    message: "Please enter your address:",
  },
  {
    type: "input",
    name: "phone",
    message: "Please enter your phone number:",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address:",
  },
  {
    type: "input",
    name: "recipientName",
    message: "Please enter the recipient's name:",
  },
  {
    type: "input",
    name: "recipientTitle",
    message: "Please enter the recipient's title:",
  },
  {
    type: "input",
    name: "recipientAddress",
    message: "Please enter the recipient's address:",
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
  },
  {
    type: "editor",
    name: "introduction",
    message: "Please write the introduction of your cover letter:",
  },
  {
    type: "editor",
    name: "mainContent",
    message: "Please write the main content of your cover letter:",
  },
  {
    type: "list",
    name: "closing",
    message: "Please choose a closing:",
    choices: ["Sincerely", "Yours Truly", "Best Regards", "Yours Faithfully"],
  },
  {
    type: "input",
    name: "signature",
    message: "Please enter your name for the signature:",
  },
  {
    type: "editor",
    name: "footer",
    message: "Please write any additional footer information (optional):",
  },
];

async function collectData() {
  const answers = await inquirer.prompt(prompts);
  return answers;
}

module.exports = {
  collectData,
};
