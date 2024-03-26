import { Router } from "express";

import {
    createPenguin,
    deletePenguin,
    updatePenguin,
    getAllUsers,
    getUserByName
} from "../controller/penguinFn"

const routes = Router();

routes.post("/", createPenguin);

routes.post("/", getAllUsers);

routes.post("/:id", deletePenguin);

routes.post("/:id", updatePenguin);

routes.post("/:id", getUserByName);

export default routes;
