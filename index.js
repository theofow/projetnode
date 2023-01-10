// Requires

const express = require("express");
const app = express();

// Variables

const PORT = process.env.PORT || 3000; // Default: 3000 (use the process.env.PORT else use 3000 by default)


// Listener
app.use(express.json());

app.listen(PORT, () => {
    console.log(
        "Server is listening on port "
        + PORT + "\n" +
        "Server URL: http://localhost:" + PORT
    );
});

// Routes
