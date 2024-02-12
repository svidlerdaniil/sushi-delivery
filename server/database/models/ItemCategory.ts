import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import MenuItem from './MenuItem';

@Table({
    tableName: "itemCategories",
    modelName: "ItemCategory",
    timestamps: false
})
class ItemCategory extends Model {
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
  
  @HasMany(() => MenuItem, 'categoryId')
  declare menuItems: MenuItem[];
};


export default ItemCategory;
