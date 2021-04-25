const mongoose = require('mongoose');

const UserModelSchema = new mongoose.Schema(
   {
      name: {
         Type: String,
         required: true,
         trim: true,
      },
      email: {
         Type: String,
         required: true,
      },
      password: {
         Type: String,
         required: true,
      },
      balance: Number,
      income: Number,
      expense: Number,
      transaction: {
         type: [{
            Type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction"
         }],
      }
   }
);

module.exports = mongoose.model('UserModel', UserModelSchema);
