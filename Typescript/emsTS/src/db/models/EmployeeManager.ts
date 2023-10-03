import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { EmployeeDetails, EmployeeDetailsId } from './EmployeeDetails';

export interface EmployeeManagerAttributes {
  EmployeeManagerID: number;
  EmployeeDetailsID?: number;
  ManagerID?: number;
  IsActive?: boolean;
}

export type EmployeeManagerPk = "EmployeeManagerID";
export type EmployeeManagerId = EmployeeManager[EmployeeManagerPk];
export type EmployeeManagerOptionalAttributes = "EmployeeManagerID" | "EmployeeDetailsID" | "ManagerID" | "IsActive";
export type EmployeeManagerCreationAttributes = Optional<EmployeeManagerAttributes, EmployeeManagerOptionalAttributes>;

export class EmployeeManager extends Model<EmployeeManagerAttributes, EmployeeManagerCreationAttributes> implements EmployeeManagerAttributes {
  EmployeeManagerID!: number;
  EmployeeDetailsID?: number;
  ManagerID?: number;
  IsActive?: boolean;

  // // EmployeeManager belongsTo EmployeeDetails via EmployeeDetailsID
  // EmployeeDetail!: EmployeeDetails;
  // getEmployeeDetail!: Sequelize.BelongsToGetAssociationMixin<EmployeeDetails>;
  // setEmployeeDetail!: Sequelize.BelongsToSetAssociationMixin<EmployeeDetails, EmployeeDetailsId>;
  // createEmployeeDetail!: Sequelize.BelongsToCreateAssociationMixin<EmployeeDetails>;
  // // EmployeeManager belongsTo EmployeeDetails via ManagerID
  // Manager!: EmployeeDetails;
  // getManager!: Sequelize.BelongsToGetAssociationMixin<EmployeeDetails>;
  // setManager!: Sequelize.BelongsToSetAssociationMixin<EmployeeDetails, EmployeeDetailsId>;
  // createManager!: Sequelize.BelongsToCreateAssociationMixin<EmployeeDetails>;

  static initModel(sequelize: Sequelize.Sequelize): typeof EmployeeManager {
    return EmployeeManager.init({
    EmployeeManagerID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmployeeDetailsID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'EmployeeDetails',
        key: 'EmployeeDetailsId'
      }
    },
    ManagerID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'EmployeeDetails',
        key: 'EmployeeDetailsId'
      }
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'EmployeeManager',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Employee__3214EC27051D13D1",
        unique: true,
        fields: [
          { name: "EmployeeManagerID" },
        ]
      },
    ]
  });
  }
}
