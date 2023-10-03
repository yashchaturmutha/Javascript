import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TicketCategoriesAttributes {
  TicketCategoriesId: number;
  CategoriesName: string;
  Color: string;
}

export type TicketCategoriesPk = "TicketCategoriesId";
export type TicketCategoriesId = TicketCategories[TicketCategoriesPk];
export type TicketCategoriesOptionalAttributes = "TicketCategoriesId";
export type TicketCategoriesCreationAttributes = Optional<TicketCategoriesAttributes, TicketCategoriesOptionalAttributes>;

export class TicketCategories extends Model<TicketCategoriesAttributes, TicketCategoriesCreationAttributes> implements TicketCategoriesAttributes {
  TicketCategoriesId!: number;
  CategoriesName!: string;
  Color!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof TicketCategories {
    return TicketCategories.init({
    TicketCategoriesId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CategoriesName: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    Color: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TicketCategories',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TicketCategories",
        unique: true,
        fields: [
          { name: "TicketCategoriesId" },
        ]
      },
    ]
  });
  }
}
