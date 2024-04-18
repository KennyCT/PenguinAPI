import { Router } from "express";

import {
    createUser,
    deleteUser,
    updateUser,
    getAllUsers,
    getUserById,
    getUserByEmail,
    isCredValid
} from "../controller/userFn"

const userRoutes = Router();

userRoutes.post("/create", createUser);

userRoutes.post("/:id/delete", deleteUser);

userRoutes.post("/:id/update", updateUser);

userRoutes.get("/users", getAllUsers);

userRoutes.get("/:id/id", getUserById);

userRoutes.get("/:email/email", getUserByEmail);

userRoutes.get("/:email/:password_hash/cred", isCredValid);

export default userRoutes;
