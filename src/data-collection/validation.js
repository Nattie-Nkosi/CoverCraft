function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email) || "Please enter a valid email address!";
}

function validatePhone(phone) {
  const regex = /^(\+27|0)[0-9]{9}$/;
  return regex.test(phone) || "Please enter a valid South African phone number";
}

function validateRequired(text) {
  return text.trim().length > 0 || "This field is required";
}

export { validateEmail, validatePhone, validateRequired };
