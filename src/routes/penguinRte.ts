import { Router } from "express";

import {
    createUser,
    deleteUser,
    updateUser,
    getAllUsers,
    getUserById,
    getUserByEmail,
    isCredValid
} from "../controller/penguinFn"

const routes = Router();

routes.post("/create", createUser);

routes.post("/:id/delete", deleteUser);

routes.post("/:id/update", updateUser);

routes.get("/users", getAllUsers);

routes.get("/:id/user/id", getUserById);

routes.get("/:email/user/email", getUserByEmail);

routes.get("/:email/:password_hash/user/cred", isCredValid);

export default routes;
