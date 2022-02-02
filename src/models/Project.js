const mongoose = require('mongoose');

const baseOptions = {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
};

const projectSchema = new mongoose.Schema(
  {
    name: String,
    tests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Test' }],
  },

  baseOptions
);

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
