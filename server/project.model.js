import mongoose from "mongoose";

const collectionName = "projects";
const collectionField = {
  title: {
    type: String,
  },
  projectName: {
    type: String,
  },
  category: {
    type: String,
  },
  description: {
    type: String,
  },
  metaDesc: {
    type: String,
  },
  projectUnder: {
    type: String,
  },
  client: {
    type: String,
  },
  url: {
    type: String,
  },
  roles: {
    type: String,
  },
  images: {
    type: Array,
  }
};
const projectSchema = new mongoose.Schema(collectionField);
const projectModel = mongoose.model(collectionName, projectSchema);

export default projectModel;