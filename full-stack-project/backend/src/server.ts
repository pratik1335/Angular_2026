import express from "express";
import console = require("node:console");
import cors from "cors";

const app = express();

const PORT = 3000;

app.use(cors());

app.get("/api/health", (req, res) => {
    res.json({
        message: "API is working",
        rating : '5/5'
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})