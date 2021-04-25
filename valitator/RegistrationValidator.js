const validator = require("validator")

const validate = (user) => {
   let error = {}
   if (!user.name) {
      error.name = "Please Provide Your Name"
   }
   if (!user.email) {
      error.email = "Provide Your Email";
   } else if (!validator.isEmail(user.email)) {
      error.email = "Provide a valid mail address"
   }
   if (!user.password) {
      error.password = "Provide Password"
   } else if (user.password < 6) {
      error.password = "Password Must Be getter Than 6 Char"
   }
   if (!user.confirmPassword) {
      error.cpassword = "Add YOur Confirm Password"
   } else if (user.password != user.confirmPassword) {
      error.cpasswrod = "Password Dosen't Mathc"
   }
   return {
      error,
      isValid: Object.keys(error).length === 0
   }
}

module.exports = validate
