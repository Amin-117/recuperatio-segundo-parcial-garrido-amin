import express from "express";

import{
    createLenguage,
    getAllLenguage,
    getlenguageById,
    updateLanguage,
    daleteLanguage,
} from "../controllers/language.controllers.js";

const routes = express.Router();

routes.get("/", createLenguage);
routes.get("/", getAllLenguage);
routes.get("/:id", getlenguageById);
routes.get("/:id", updateLanguage);
routes.get("/:id", daleteLanguage);

export default routes;