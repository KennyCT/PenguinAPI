import { Router } from "express";

import {
    createUser,
    deleteUser,
    updateUser,
    getAllUsers,
    getUserById,
    getUserByEmail
} from "../controller/penguinFn"

const routes = Router();

routes.post("/create", createUser);

routes.post("/:id/delete", deleteUser);

routes.post("/:id/update", updateUser);

routes.get("/getUsers", getAllUsers);

routes.get("/:id/user", getUserById);

routes.get("/:email/user", getUserByEmail);

export default routes;
