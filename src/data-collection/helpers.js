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

export { capitalizeWords, formatAddress, customSalutation };
