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

routes.get("/users", getAllUsers);

routes.get("/:id/user/id", getUserById);

routes.get("/:email/user/email", getUserByEmail);

export default routes;
