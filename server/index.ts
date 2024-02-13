import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import sequelize from './database/connection';
import { MenuItemController } from './database/controllers/MenuItemController';
import { ItemCategoryController } from './database/controllers/ItemCategoryController';

config();

const app: Express = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Сервак');
});

app.get('/items', MenuItemController.getAll);
app.get('/items/:id', MenuItemController.getOne);
app.post('/items', MenuItemController.create);

app.get('/categories', ItemCategoryController.getAll);
app.get('/categories/:id', ItemCategoryController.getOne);
app.post('/categories', ItemCategoryController.create);

app.listen(port, () => {
  console.log(`Сервер запущен http://localhost:${port}`);
});

async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log('Успешно установлено соединение с БД');
  } catch (error) {
    console.error('Ошибка при соединении с:', error);
  }
}

testDatabaseConnection();
