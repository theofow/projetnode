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

// Get type by id
router.get("/types/:id", async (req, res) => {
    // Variable(s)
    const type = await Types.findByPk(parseInt(req.params.id));

    // Condition(s)
    if (type) {
        res.json(type);
    } else {
        res.sendStatus(404);
    }
})

// Create type
router.post("/types", async (req, res, next) => {
    try {
        const type = new Types(req.body);
        await type.save({ fields: ['nom'] });
        res.status(201).json(type);
    } catch (err) {
        next(err);
    }
})

// Update type
router.put("/types/:id", async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        const [nbUpdated] = await Types.update(req.body, {
            where: {
                id,
            },
        });

        if(!nbUpdated) {
            res.sendStatus(404);
        } else {
            res.json(await Types.findByPk(id));
        }
    } catch (err) {
        next(err);
    }
})

// Delete type
router.delete("/types/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    
    const nbDeleted = await Types.destroy({
        where: {
            id,
        },
    });
    
    res.sendStatus(!nbDeleted ? 404 : 204);
})

module.exports = router;
