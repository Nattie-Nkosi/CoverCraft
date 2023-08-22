function createCoverLetter(answers) {
  return `
  ${answers.salutation}

  ${answers.introduction}
  
  ${answers.mainContent}
  
  ${answers.closing},
  
  ${answers.signature}
  
  ${answers.footer || ""}
  `;
}

export { createCoverLetter };
