import { Router } from "express";

import {
    createPenguin,
    deletePenguin,
    updatePenguin,
    getAllUsers,
    getUserByName
} from "../controller/penguinFn"

const routes = Router();

routes.post("/create", createPenguin);

routes.get("/getUsers", getAllUsers);

routes.post("/:id/delete", deletePenguin);

routes.post("/:id", updatePenguin);

routes.get("/:id/name", getUserByName);

export default routes;
