import express from "express";

import{
    createLenguage,
    getAllLenguage,
    getlenguageById,
    updateLanguage,
    daleteLanguage,
} from "../controllers/language.controllers.js";

const routes = express.Router();

routes.post("/", createLenguage);
routes.get("/", getAllLenguage);
routes.get("/:id", getlenguageById);
routes.put("/:id", updateLanguage);
routes.delete("/:id", daleteLanguage);

export default routes;