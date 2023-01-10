const { Router } = require("express");
const { Region } = require("../modeles");
const router = new Router();

// Get collection regions
router.get(
    "/regions",
    async (req, res) => {
        const regions = await Region.findAll({
            where: req.query,
        });
        res.json(regions);
    }
);

// Get region by id
router.get("/regions/:id", async (req, res) => {
    const region = await Region.findByPk(parseInt(req.params.id));

    if (region) {
        res.json(region);
    } else {
        res.sendStatus(404);
    }
})

router.post("/regions", async (req, res, next) => {
    try {
        const region = new Region(req.body);
        await region.save({ fields: ['nom'] });
        res.status(201).json(region);
    } catch (err) {
        next(err);
    }
})

router.put("/regions/:id", async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        const [nbUpdated] = await Region.update(req.body, {
            where: {
                id,
            },
        });

        if(!nbUpdated) {
            res.sendStatus(404);
        } else {
            res.json(await Region.findByPk(id));
        }
    } catch (err) {
        next(err);
    }
})

// Delete region
router.delete("/regions/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    const nbDeleted = await Region.destroy({
        where: {
            id,
        },
    });

    res.sendStatus(!nbDeleted ? 404 : 204);
})

module.exports = router;