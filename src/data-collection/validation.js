function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email) || "Please enter a valid email address!";
}

function validatePhone(phone) {
  const regex = /^(\+27|0)[0-9]{9}$/;
  return regex.test(phone) || "Please enter a valid South African phone number";
}

/* function validatePostalCode(postalCode) {
  const regex = /^[0-9]{4}$/;
  return (
    regex.test(postalCode) || "Please enter a valid South African postal code"
  );
} */

function validateRequired(text) {
  return text.trim().length > 0 || "This field is required";
}

export { validateEmail, validatePhone, validatePostalCode, validateRequired };
