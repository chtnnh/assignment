import express from "express";
import dotenv from "dotenv";

import authRouter from "./routes/auth.js";

const app = express();
const config = dotenv.config();

app.use("/api/auth", authRouter);

app.listen(config.parsed.PORT, () => {
    console.log(`Server listening on http://localhost:${config.parsed.PORT}`);
});
