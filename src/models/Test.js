const mongoose = require('mongoose');

const baseOptions = {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
};

const testSchema = new mongoose.Schema(
  {
    name: String,
    language: String,
    preRequiste: String,
    priority: {
      type: String,
      enum: ['high', 'medium', 'low'],
    },
    difficultyLevel: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
    },
    Scenarios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Scenario' }],
  },
  baseOptions
);

const Test = mongoose.model('Test', testSchema);
module.exports = Test;
