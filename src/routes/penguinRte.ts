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

routes.post("/getUsers", getAllUsers);

routes.post("/:id/delete", deletePenguin);

routes.post("/:id", updatePenguin);

routes.post("/:id/name", getUserByName);

export default routes;
