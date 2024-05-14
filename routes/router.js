const { Router } = require("express");
const blogRoutes = require("./blog.routes.js");
const router = Router();

router.use("/products", blogRoutes);

module.exports = router;