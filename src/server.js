import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 8080;

const startServer = async () => {

    await connectDB();

    app.listen(PORT, () => {
        console.log(`🚀 Servidor iniciado en el puerto ${PORT}`);
    });

};

startServer();