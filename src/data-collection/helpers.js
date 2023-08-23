function capitalizeWords(str) {
  if (!str) {
    return "";
  }
  return str.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
  );
}

function customSalutation(name) {
  return `Dear ${name},`;
}

export { capitalizeWords, customSalutation };
