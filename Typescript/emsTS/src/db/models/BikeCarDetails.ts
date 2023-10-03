import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { EmployeeDetails, EmployeeDetailsId } from './EmployeeDetails';

export interface BikeCarDetailsAttributes {
  BikeCarDetailId: number;
  EmployeeDetailsId: number;
  Description?: string;
  RegNumber?: string;
}

export type BikeCarDetailsPk = "BikeCarDetailId";
export type BikeCarDetailsId = BikeCarDetails[BikeCarDetailsPk];
export type BikeCarDetailsOptionalAttributes = "BikeCarDetailId" | "Description" | "RegNumber";
export type BikeCarDetailsCreationAttributes = Optional<BikeCarDetailsAttributes, BikeCarDetailsOptionalAttributes>;

export class BikeCarDetails extends Model<BikeCarDetailsAttributes, BikeCarDetailsCreationAttributes> implements BikeCarDetailsAttributes {
  BikeCarDetailId!: number;
  EmployeeDetailsId!: number;
  Description?: string;
  RegNumber?: string;

  // // BikeCarDetails belongsTo EmployeeDetails via EmployeeDetailsId
  // EmployeeDetail!: EmployeeDetails;
  // getEmployeeDetail!: Sequelize.BelongsToGetAssociationMixin<EmployeeDetails>;
  // setEmployeeDetail!: Sequelize.BelongsToSetAssociationMixin<EmployeeDetails, EmployeeDetailsId>;
  // createEmployeeDetail!: Sequelize.BelongsToCreateAssociationMixin<EmployeeDetails>;

  static initModel(sequelize: Sequelize.Sequelize): typeof BikeCarDetails {
    return BikeCarDetails.init({
    BikeCarDetailId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmployeeDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EmployeeDetails',
        key: 'EmployeeDetailsId'
      }
    },
    Description: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    RegNumber: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BikeCarDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_BikeCarDetails",
        unique: true,
        fields: [
          { name: "BikeCarDetailId" },
        ]
      },
    ]
  });
  }
}
