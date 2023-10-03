import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface MasterRolesAttributes {
  MasterRoleId: number;
  Name: string;
}

export type MasterRolesPk = "MasterRoleId";
export type MasterRolesId = MasterRoles[MasterRolesPk];
export type MasterRolesCreationAttributes = MasterRolesAttributes;

export class MasterRoles extends Model<MasterRolesAttributes, MasterRolesCreationAttributes> implements MasterRolesAttributes {
  MasterRoleId!: number;
  Name!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof MasterRoles {
    return MasterRoles.init({
    MasterRoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MasterRoles',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MasterRoles",
        unique: true,
        fields: [
          { name: "MasterRoleId" },
        ]
      },
    ]
  });
  }
}
