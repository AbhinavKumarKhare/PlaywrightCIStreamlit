const express = require("express");
const router = express.Router();
const { spawn } = require("child_process");
const path = require("path");

router.post("/ask", (req, res) => {
    const { question } = req.body;

    const py = spawn("python3", [
        path.join(__dirname, "../../llm/run_api.py"),
        question
    ]);

    let output = "";

    py.stdout.on("data", data => output += data.toString());
    py.stderr.on("data", data => console.error(data.toString()));

    py.on("close", () => {
        res.json({ ok: true, answer: output.trim() });
    });
});

module.exports = router;
