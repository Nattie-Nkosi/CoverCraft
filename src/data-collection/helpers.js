function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email) || "Please enter a valid email address!";
}

function validatePhone(phone) {
  const regex = /^[0-9]{10}$/; // Example for a 10-digit phone number
  return regex.test(phone) || "Please enter a valid 10-digit phone number!";
}

function capitalizeWords(str) {
  return str.replace(
    /\w\S*/g,
    (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
  );
}

function formatAddress(address) {
  const { streetNumber, streetName, suburb, city, province, postalCode } =
    address;

  // Concatenating the address components into the standard South African format
  const formattedAddress = `
    ${streetNumber} ${streetName}
    ${suburb}
    ${city}
    ${province}
    ${postalCode}
  `;

  return formattedAddress.trim();
}

function customSalutation(name) {
  return `Dear ${name},`;
}

export {
  validateEmail,
  validatePhone,
  capitalizeWords,
  formatAddress,
  customSalutation,
};
