// Requires
const express = require("express");
const app = express();
const userrouter=require("./routes/user");
const typesrouter = require("./routes/types");

// Variables
const PORT = process.env.PORT || 3000; // Default: 3000

app.get("/", (req, res) => {
    res.json("I play Pokemon go ! ");
  });

// Listener
app.use(express.json());

app.use(userrouter);
app.use(typesrouter);

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});