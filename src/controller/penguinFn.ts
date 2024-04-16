import { RequestHandler } from "express";

import { Penguin } from "../models/penguinDB";

export const createPenguin: RequestHandler = async(req, res, next) => {
    const createdPenguin = await Penguin.create({ ...req.body });

    return res
        .status(200)
        .json({ message: "Penguin created successfully", data: createdPenguin });
};

export const deletePenguin: RequestHandler = async(req, res, next) => {
    const {id} = req.params;
    const deletedPenguin: Penguin|null = await Penguin.findByPk(id);

    await Penguin.destroy({ where: {id} }); 

    return res
        .status(200)
        .json({ message: "Penguin deleted successfully", data: deletedPenguin });
};

export const updatePenguin: RequestHandler = async(req, res, next) => {
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
        .json({ message: "Penguin fetched successfully", data: allUsers });
};

export const getUserById: RequestHandler = async(req, res, next) => {
    const {id} = req.params;
    const user: Penguin|null = await Penguin.findByPk(id);

    return res
        .json({ message: "Penguin retrieved successfully", data: user });
}
