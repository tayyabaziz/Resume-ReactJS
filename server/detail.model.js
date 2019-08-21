import mongoose from "mongoose";

const collectionName = "details";
const collectionField = {
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
  },
  education: {
    type: Array,
  },
  experience: {
    type: Array,
  },
  achievement: {
    type: Array,
  },
  skill: {
    type: Array,
  }
};
const projectSchema = new mongoose.Schema(collectionField);
const projectModel = mongoose.model(collectionName, projectSchema);

export default projectModel;