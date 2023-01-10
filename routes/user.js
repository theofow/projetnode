const { Router } = require("express");
const { User } = require("../modeles");
const router = new Router();

// Get collection users
router.get(
  "/users",
  async (req, res) => {
    const users = await User.findAll({
      where: req.query,
      attributes: { exclude: ["password"] },
    });
    res.json(users);
  }
);

router.post("/users", (req, res) => {
    const user = new User(req.body);
    user
        .save()
        .then((data) => res.status(201).json(data))
        .catch((err) => {
            console.log(err);
            res.sendStatus(422);
        });
});
// Get a specific user
router.get("/users/:id", async (req, res) => {
  const user = await User.findByPk(parseInt(req.params.id), {
    attributes: { exclude: ["password"] },
  });
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

// Update a specific user
router.put(
  "/users/:id",
  async (req, res, next) => {
    try {
      const id = parseInt(req.params.id);
      if (req.user.id !== id) {
        return res.sendStatus(403);
      }
      const [nbUpdated] = await User.update(req.body, {
        where: {
          id,
        },
        individualHooks: true,
      });
      if (!nbUpdated) {
        res.sendStatus(404);
      } else {
        res.json(
          await User.findByPk(id, { attributes: { exclude: ["password"] } })
        );
      }
    } catch (error) {
      next(error);
    }
  }
);

// DELETE a specific user
router.delete("/users/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  if (req.user.id !== id) {
    return res.sendStatus(403);
  }
  const nbDeleted = await User.destroy({
    where: {
      id,
    },
  });
  res.sendStatus(!nbDeleted ? 404 : 204);
});

module.exports = router;