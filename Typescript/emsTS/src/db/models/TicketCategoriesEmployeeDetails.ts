import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TicketCategoriesEmployeeDetailsAttributes {
  TicketCategoriesEmployeeDetailsId: number;
  TicketCategoriesId: number;
  EmployeeDetailsId: number;
}

export type TicketCategoriesEmployeeDetailsPk = "TicketCategoriesEmployeeDetailsId";
export type TicketCategoriesEmployeeDetailsId = TicketCategoriesEmployeeDetails[TicketCategoriesEmployeeDetailsPk];
export type TicketCategoriesEmployeeDetailsOptionalAttributes = "TicketCategoriesEmployeeDetailsId";
export type TicketCategoriesEmployeeDetailsCreationAttributes = Optional<TicketCategoriesEmployeeDetailsAttributes, TicketCategoriesEmployeeDetailsOptionalAttributes>;

export class TicketCategoriesEmployeeDetails extends Model<TicketCategoriesEmployeeDetailsAttributes, TicketCategoriesEmployeeDetailsCreationAttributes> implements TicketCategoriesEmployeeDetailsAttributes {
  TicketCategoriesEmployeeDetailsId!: number;
  TicketCategoriesId!: number;
  EmployeeDetailsId!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof TicketCategoriesEmployeeDetails {
    return TicketCategoriesEmployeeDetails.init({
    TicketCategoriesEmployeeDetailsId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TicketCategoriesId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EmployeeDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TicketCategoriesEmployeeDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TicketCategoriesEmployeeDetails",
        unique: true,
        fields: [
          { name: "TicketCategoriesEmployeeDetailsId" },
        ]
      },
    ]
  });
  }
}
