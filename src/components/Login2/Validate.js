// validate.js
export const validateFormData = (email, password, name = '') => {
    // Validate name (only if provided, for SignUp)
    if (name && /\d/.test(name)) {
      return "Name cannot contain digits.";
    }
  
    // Validate email
    if (!email) {
      return "Email cannot be empty.";
    }
  
    // Validate password
    if (!password) {
      return "Password cannot be empty.";
    }
  
    // Add more validation checks if needed
  
    return null; // Return null if no validation errors
  };
  