const { Router } = require("express");
const router = Router();
const Product = require("../../models/Product");

router.get("/shows", async (req, res) => {
  try {
    const allProducts = await Product.findAll({});

    return res.json({
      allProducts,
    });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
