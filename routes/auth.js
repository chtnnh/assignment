import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
    res.send("Hello Register!");
});

router.post("/login", (req, res) => {
    res.send("Hello Login!");
});

export default router;
