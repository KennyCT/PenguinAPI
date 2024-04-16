import { Router } from "express";

import {
    createPenguin,
    deletePenguin,
    updatePenguin,
    getAllUsers,
    getUserById
} from "../controller/penguinFn"

const routes = Router();

routes.post("/create", createPenguin);

routes.get("/getUsers", getAllUsers);

routes.post("/:id/delete", deletePenguin);

routes.post("/:id/update", updatePenguin);

routes.get("/:id/user", getUserById);

export default routes;
