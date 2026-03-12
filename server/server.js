const express = require("express");
const cors = require("cors");
const app = express();

const port = 5433;

app.use(cors());

app.get("/", (req, res) => {
    return res.status(200).json({
        message: "Hello Tee lux"
    })
});

app.listen(5433, () => {
    console.log(`Listen to port ${port}`);
});