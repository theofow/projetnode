const { Router } = require("express");
const { Types } = require("../modeles");
const router = new Router();


router.get(
    "/types",
    async (req, res) => {
        const types = await Types.findAll({
            where: req.query,
        });
        res.json(types);
    }
);


router.get("/types/:id", async (req, res) => {
    
    const type = await Types.findByPk(parseInt(req.params.id));

    
    if (type) {
        res.json(type);
    } else {
        res.sendStatus(404);
    }
})


router.post("/types", async (req, res, next) => {
    try {
        const type = new Types(req.body);
        await type.save({ fields: ['nom'] });
        res.status(201).json(type);
    } catch (err) {
        next(err);
    }
})


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
