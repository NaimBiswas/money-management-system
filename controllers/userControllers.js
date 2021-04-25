const RegistrationValidator = require('../valitator/RegistrationValidator')
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
         res.status(200).send("That is ok")
      }

   }
}