const { Router } = require("express");
const { Types } = require("../modeles");
const router = new Router();

// Get collection types
router.get(
    "/types",
    async (req, res) => {
        const types = await Types.findAll({
            where: req.query,
        });
        res.json(types);
    }
);

module.exports = router;