const mongoose = require('mongoose');

const UserModelSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true,
         trim: true
      },
      email: {
         type: String,
         required: true
      },
      password: {
         type: String,
         required: true
      },
      balance: Number,
      income: Number,
      expense: Number,
      transaction: {
         type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction"
         }],
      }
   }
);

module.exports = mongoose.model('UserModel', UserModelSchema);
