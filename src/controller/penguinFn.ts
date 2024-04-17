import { RequestHandler } from "express";

import { Penguin } from "../models/penguinDB";

export const createUser: RequestHandler = async(req, res, next) => {
    const createdPenguin = await Penguin.create({ ...req.body });

    return res
        .status(200)
        .json({ message: "Penguin created successfully", data: createdPenguin });
};

export const deleteUser: RequestHandler = async(req, res, next) => {
    const {id} = req.params;
    const deletedPenguin: Penguin|null = await Penguin.findByPk(id);

    await Penguin.destroy({ where: {id} }); 

    return res
        .status(200)
        .json({ message: "Penguin deleted successfully", data: deletedPenguin });
};

export const updateUser: RequestHandler = async(req, res, next) => {
    const {id} = req.params;
    await Penguin.update({ ...req.body }, {where: {id}});
    const updatedPenguin: Penguin|null = await Penguin.findByPk(id);

    return res
        .status(200)
        .json({ message: "Penguin updated successfully", data: updatedPenguin });
}

export const getAllUsers: RequestHandler = async(req, res, next) => {
    const allUsers: Penguin[] = await Penguin.findAll();

    return res
        .status(200)
        .json({ message: "Penguins fetched successfully", data: allUsers });
};

export const getUserById: RequestHandler = async(req, res, next) => {
    const {id} = req.params;
    const user: Penguin|null = await Penguin.findByPk(id);

    return res
        .status(200)
        .json({ message: "Penguin retrieved successfully", data: user });
}

export const getUserByEmail: RequestHandler = async(req, res, next) => {
    const {email} = req.params;
    const user: Penguin|null = await Penguin.findOne({ where: {email} });

    return res
        .status(200)
        .json({ message: "Penguin retrieved successfully", data: user });
}

export const isCredValid: RequestHandler = async(req, res, next) => {
    const {email, password_hash} = req.params;
    const isCredentialsValid = await Penguin.findOne({ 
        where: {
            email,
            password_hash
        }
    });

    if (!isCredentialsValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    return res
        .status(200)
        .json({ message: "Penguin credentials valid" });
}
