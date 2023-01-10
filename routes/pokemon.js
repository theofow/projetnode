const { Router } = require("express");
const { Pokemon } = require("../modeles");
const router = new Router();

// Get collection pokemons
router.get(
    "/pokemons",
    async (req, res) => {
        const pokemons = await Pokemon.findAll({
            where: req.query,
        });
        res.json(pokemons);
    }
);

// Get pokemon by id
router.get("/pokemons/:id", async (req, res) => {
    const pokemon = await Pokemon.findByPk(parseInt(req.params.id));

    if (pokemon) {
        res.json(pokemon);
    } else {
        res.sendStatus(404);
    }
})

// Create pokemon
router.post("/pokemons", async (req, res, next) => {
    try {
        const pokemon = new Pokemon(req.body);
        await pokemon.save({ fields: ['nom', 'type'] });
        res.status(201).json(pokemon);
    } catch (err) {
        next(err);
    }
})

// Update pokemon
router.put("/pokemons/:id", async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);

        const [nbUpdated] = await Pokemon.update(req.body, {
            where: {
                id,
            },
        });

        if(!nbUpdated) {
            res.sendStatus(404);
        } else {
            res.json(await Pokemon.findByPk(id));
        }
    } catch (err) {
        next(err);
    }
})

// Delete pokemon
router.delete("/pokemons/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    const nbDeleted = await Pokemon.destroy({
        where: {
            id,
        },
    });

    res.sendStatus(!nbDeleted ? 404 : 204);
})

module.exports = router;
