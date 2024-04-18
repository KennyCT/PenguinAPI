import { RequestHandler } from "express";

import { Iceburg } from "../models/iceburgDB";

export const createIceburg: RequestHandler = async(req, res, next) => {
    const createdIceburg = await Iceburg.create({ ...req.body });

    return res
        .status(200)
        .json({ message: "Iceburg created successfully", data: createdIceburg });
};

export const deleteIceburg: RequestHandler = async(req, res, next) => {
    const {id} = req.params;
    const deletedIceburg: Iceburg|null = await Iceburg.findByPk(id);

    await Iceburg.destroy({ where: {id} }); 

    return res
        .status(200)
        .json({ message: "Iceburg deleted successfully", data: deletedIceburg });
};

export const updateIceburg: RequestHandler = async(req, res, next) => {
    const {id} = req.params;
    await Iceburg.update({ ...req.body }, {where: {id}});
    const updatedIceburg: Iceburg|null = await Iceburg.findByPk(id);

    return res
        .status(200)
        .json({ message: "Iceburg updated successfully", data: updatedIceburg });
}

export const getAllIceburgs: RequestHandler = async(req, res, next) => {
    const allIceburgs: Iceburg[] = await Iceburg.findAll();

    return res
        .status(200)
        .json({ message: "Iceburg fetched successfully", data: allIceburgs });
};

export const getIceburgByName: RequestHandler = async(req, res, next) => {
    const {name} = req.params;
    const iceburg: Iceburg|null = await Iceburg.findByPk(name);

    return res
        .status(200)
        .json({ message: "Iceburg retrieved successfully", data: iceburg });
}
