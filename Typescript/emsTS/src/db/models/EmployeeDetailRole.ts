import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface EmployeeDetailRoleAttributes {
  EmployeeDetailRoleId: number;
  EmployeeDetailsId: number;
  MasterRoleId: number;
}

export type EmployeeDetailRolePk = "EmployeeDetailRoleId";
export type EmployeeDetailRoleId = EmployeeDetailRole[EmployeeDetailRolePk];
export type EmployeeDetailRoleOptionalAttributes = "EmployeeDetailRoleId";
export type EmployeeDetailRoleCreationAttributes = Optional<EmployeeDetailRoleAttributes, EmployeeDetailRoleOptionalAttributes>;

export class EmployeeDetailRole extends Model<EmployeeDetailRoleAttributes, EmployeeDetailRoleCreationAttributes> implements EmployeeDetailRoleAttributes {
  EmployeeDetailRoleId!: number;
  EmployeeDetailsId!: number;
  MasterRoleId!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof EmployeeDetailRole {
    return EmployeeDetailRole.init({
    EmployeeDetailRoleId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmployeeDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MasterRoleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'EmployeeDetailRole',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_EmployeeDetailRole",
        unique: true,
        fields: [
          { name: "EmployeeDetailRoleId" },
        ]
      },
    ]
  });
  }
}
