import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    unique: false
  },
  description: {
    type: String,
    required: [true, 'Please provide an description'],
    unique: false
  },
  imgUrl: {
    type: String,
    required: [true, 'Please provide an image url'],
    unique: false
  },
  imgAlt: {
    type: String,
    required: [true, 'Please provide an image alt'],
    unique: false
  },
  btnText: {
    type: String,
    required: [true, 'Please provide a button text'],
    unique: false
  },
  btnUrl: {
    type: String,
    required: [true, 'Please provide an button url'],
    unique: false
  },
  type: {
    type: String,
    required: [true, 'Please provide a type (img left or img right)'],
    unique: false
  },
  bgColor: {
    type: String,
    required: [true, 'Please provide an background color (grey, white, black)'],
    unique: false
  },
  position: {
    type: Number,
    required: [true, 'Please provide a position'],
    unique: false
  },
});

const Content = mongoose.models.content || mongoose.model('content', contentSchema);

export default Content;