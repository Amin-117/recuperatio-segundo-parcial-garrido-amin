import dotenv from "dotenv";
import express from "express";
import routes from "./src/routes/language.routes.js";
import { initDB } from "./src/config/database.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/languages", routes);

const PORT = process.env.PORT || 3000;

initDB().then(() => {
    app.listen(PORT, () =>{
        console.log(`servidor correindo en http:/localhost:${PORT}`)
    });
}
);