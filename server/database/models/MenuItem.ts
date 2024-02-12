import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import ItemCategory from './ItemCategory';

@Table({
    tableName: "menuItems",
    modelName: "MenuItem",
    timestamps: false
})
class MenuItem extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false
  })
  declare id: string;
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  declare name: string;
  @Column({
    type: DataType.INTEGER,
  })
  declare price: number;
  @Column({
    type: DataType.STRING,
  })
  declare imageUrl: string;
  @Column({
    type: DataType.STRING,
  })
  declare description: string;
  @ForeignKey(() => ItemCategory)
  @Column({
    type: DataType.UUID,
  })
  declare categoryId: string;
};


export default MenuItem;
