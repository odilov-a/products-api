const mongoose = require("mongoose");
const blogSchame = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blogs = mongoose.model("blog", blogSchame);
module.exports = Blogs;
