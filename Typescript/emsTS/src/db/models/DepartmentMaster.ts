import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DepartmentMasterAttributes {
  DepartmentMasterId: number;
  DepartmentName: string;
}

export type DepartmentMasterPk = "DepartmentMasterId";
export type DepartmentMasterId = DepartmentMaster[DepartmentMasterPk];
export type DepartmentMasterOptionalAttributes = "DepartmentMasterId";
export type DepartmentMasterCreationAttributes = Optional<DepartmentMasterAttributes, DepartmentMasterOptionalAttributes>;

export class DepartmentMaster extends Model<DepartmentMasterAttributes, DepartmentMasterCreationAttributes> implements DepartmentMasterAttributes {
  DepartmentMasterId!: number;
  DepartmentName!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DepartmentMaster {
    return DepartmentMaster.init({
    DepartmentMasterId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DepartmentName: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'DepartmentMaster',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DepartmentMaster",
        unique: true,
        fields: [
          { name: "DepartmentMasterId" },
        ]
      },
    ]
  });
  }
}
