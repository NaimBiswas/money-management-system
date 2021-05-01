const RegistrationValidator = require('../valitator/RegistrationValidator')
const User = require("../models/userModel")
module.exports = {
   login(req, res) {
      res.send({
         "Message": "Hello THis is message from controller",
      })
   },
   registration(req, res) {
      const { name, email, password, confirmPassword } = req.body

      let validate = RegistrationValidator({
         name, email, password, confirmPassword,
      })
      if (!validate.isValid) {
         res.status(400).json(validate.error)
      }
      else {
         User.findOne({ email })
            .then(user => {
               if (user) {
                  res.status(401).send("This Email Already Have a Account")
               } else {
                  let NewUser = new User({
                     name: name,
                     email: email,
                     password: password,
                  })
                  let SaveUser = NewUser.save();
                  res.status(201).send("Registration Success")
               }
            }).catch((err) => {
               console.log(err);
            })
      }

   }
}