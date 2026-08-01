import express from "express";
import adoptionRouter from "./routes/adoption.router.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        mensaje: "API de Adopciones funcionando"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK"
    });
});

app.use("/api/adoptions", adoptionRouter);

app.locals.ready = true;

export default app;