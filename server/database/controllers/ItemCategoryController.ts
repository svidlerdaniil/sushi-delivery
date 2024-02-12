import ItemCategory from "../models/ItemCategory";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
    try {
        ItemCategory.findAll()
        .then((data) => {
          res.json(data);
        })
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

export const getOne = async (req: Request, res: Response) => {
  try {
    const itemId: string = req.params.id;
    const category: ItemCategory = await ItemCategory.findByPk(itemId);
    res.json(category);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const create = async (req: Request, res: Response) => {
    try {
      const doc: ItemCategory = new ItemCategory({
        name: req.body.name,
      });
      const item: ItemCategory = await doc.save();
      console.log('Категория добавлена');
      res.json(item);
    } catch (err) {
      console.log(err);
    }
  };

export * as ItemCategoryController from "./ItemCategoryController";