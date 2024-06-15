export const validateFormData = (name, email, password) => {
  // Regular expression to check if name contains only characters
  const nameCheck = /^[a-zA-Z\s]+$/.test(name);
  
  // Regular expression to validate email format
  const emailCheck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  
  // Regular expression to validate password complexity
  const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
  // Check if name is empty or not valid
  if (!name) return "Name cannot be empty.";
  if (!nameCheck) return "Name can only contain characters.";
  
  // Check if email is empty or not valid
  if (!email) return "Email cannot be empty.";
  if (!emailCheck) return "Email is not valid.";
  
  // Check if password is empty or not valid
  if (!password) return "Password cannot be empty.";
  if (!passwordCheck) return "Password is not valid.";
  
  return null; // Return null if no validation errors
};
