import MenuItem from "../models/MenuItem";
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
    try {
        MenuItem.findAll()
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
    const item: MenuItem = await MenuItem.findByPk(itemId);
    res.json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const create = async (req: Request, res: Response) => {
    try {
      const doc: MenuItem = new MenuItem({
        name: req.body.name,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        categoryId: req.body.categoryId,
        description: req.body.description,
      });
      const item: MenuItem = await doc.save();
      console.log('Товар добавлен');
      res.json(item);
    } catch (err) {
      console.log(err);
    }
  };

export * as MenuItemController from "./MenuItemController";