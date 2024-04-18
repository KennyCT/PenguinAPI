import { RequestHandler } from "express";

import { User } from "../models/userDB";

export const createUser: RequestHandler = async(req, res, next) => {
    const createdUser = await User.create({ ...req.body });

    return res
        .status(200)
        .json({ message: "User created successfully", data: createdUser });
};

export const deleteUser: RequestHandler = async(req, res, next) => {
    const {id} = req.params;
    const deletedUser: User|null = await User.findByPk(id);

    await User.destroy({ where: {id} }); 

    return res
        .status(200)
        .json({ message: "User deleted successfully", data: deletedUser });
};

export const updateUser: RequestHandler = async(req, res, next) => {
    const {id} = req.params;
    await User.update({ ...req.body }, {where: {id}});
    const updatedUser: User|null = await User.findByPk(id);

    return res
        .status(200)
        .json({ message: "User updated successfully", data: updatedUser });
}

export const getAllUsers: RequestHandler = async(req, res, next) => {
    const allUsers: User[] = await User.findAll();

    return res
        .status(200)
        .json({ message: "User fetched successfully", data: allUsers });
};

export const getUserById: RequestHandler = async(req, res, next) => {
    const {id} = req.params;
    const user: User|null = await User.findByPk(id);

    return res
        .status(200)
        .json({ message: "User retrieved successfully", data: user });
}

export const getUserByEmail: RequestHandler = async(req, res, next) => {
    const {email} = req.params;
    const user: User|null = await User.findOne({ where: {email} });

    return res
        .status(200)
        .json({ message: "User retrieved successfully", data: user });
}

export const isCredValid: RequestHandler = async(req, res, next) => {
    const {email, password_hash} = req.params;
    const isCredentialsValid = await User.findOne({ 
        where: {
            email,
            password_hash
        }
    });

    if (!isCredentialsValid) {
      return res
        .status(400)
        .json({ message: 'Invalid credentials' });
    }

    return res
        .status(200)
        .json({ message: "User credentials valid" });
}
