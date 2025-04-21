const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: String,
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobileNo: { type: String, required: true, unique: true },
  year: { type: String, enum: ['FY', 'SY', 'TY', 'LY'], required: true },
  department: {
    type: String,
    enum: ['Computer', 'IT', 'AI & DS', 'CSD', 'ENTC', 'Other'],
    required: true
  },
  shift: { type: String, enum: ['Morning', 'Regular'], required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
