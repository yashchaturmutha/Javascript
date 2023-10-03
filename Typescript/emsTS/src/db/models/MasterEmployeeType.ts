import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface MasterEmployeeTypeAttributes {
  EmployeeTypeId: number;
  EmployeeTypeName: string;
}

export type MasterEmployeeTypePk = "EmployeeTypeId";
export type MasterEmployeeTypeId = MasterEmployeeType[MasterEmployeeTypePk];
export type MasterEmployeeTypeOptionalAttributes = "EmployeeTypeId";
export type MasterEmployeeTypeCreationAttributes = Optional<MasterEmployeeTypeAttributes, MasterEmployeeTypeOptionalAttributes>;

export class MasterEmployeeType extends Model<MasterEmployeeTypeAttributes, MasterEmployeeTypeCreationAttributes> implements MasterEmployeeTypeAttributes {
  EmployeeTypeId!: number;
  EmployeeTypeName!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof MasterEmployeeType {
    return MasterEmployeeType.init({
    EmployeeTypeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmployeeTypeName: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MasterEmployeeType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MasterEmployeeType",
        unique: true,
        fields: [
          { name: "EmployeeTypeId" },
        ]
      },
    ]
  });
  }
}
