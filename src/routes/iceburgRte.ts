import { Router } from "express";

import {
    createIceburg,
    deleteIceburg,
    updateIceburg,
    getAllIceburgs,
    getIceburgByName,
} from "../controller/iceburgFn"

const iceburgRoutes = Router();

iceburgRoutes.post("/create", createIceburg);

iceburgRoutes.post("/:id/delete", deleteIceburg);

iceburgRoutes.post("/:id/update", updateIceburg);

iceburgRoutes.get("/iceburgs", getAllIceburgs);

iceburgRoutes.get("/:name/name", getIceburgByName);

export default iceburgRoutes;
