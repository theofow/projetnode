const { Router } = require("express");
const { Region } = require("../modeles");
const router = new Router();

// Get collection types
router.get(
    "/regions",
    async (req, res) => {
        const regions = await Region.findAll({
            where: req.query,
        });
        res.json(regions);
    }
);

module.exports = router;