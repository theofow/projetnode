const { Router } = require("express");
const { Pokemon }  = require("../modeles");
const router = new Router();

// Get collection types
router.get(
    "/pokemons",
    async (req, res) => {
        const pokemons = await Pokemon.findAll({
            where: req.query,
        });
        res.json(pokemons);
    }
);

module.exports = router;
