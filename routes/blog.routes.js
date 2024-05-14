const { Router } = require("express");
const blogController = require("../controller/blog.controller.js");
const blogRoutes = Router();

blogRoutes.get("/", blogController.getAllBlog);
blogRoutes.get("/:blogId", blogController.getBlogById);
blogRoutes.post("/", blogController.createBlog);
blogRoutes.put("/:blogId", blogController.updateBlog);
blogRoutes.delete("/:blogId", blogController.deleteBlog);

module.exports = blogRoutes;