import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface MenuPagesRolesAttributes {
  MenuPagesRoleId: number;
  MenuName?: string;
  MenuSubName?: string;
  PageName?: string;
  MasterRoleId: number;
  IsAllowed: number;
}

export type MenuPagesRolesPk = "MenuPagesRoleId";
export type MenuPagesRolesId = MenuPagesRoles[MenuPagesRolesPk];
export type MenuPagesRolesOptionalAttributes = "MenuPagesRoleId" | "MenuName" | "MenuSubName" | "PageName";
export type MenuPagesRolesCreationAttributes = Optional<MenuPagesRolesAttributes, MenuPagesRolesOptionalAttributes>;

export class MenuPagesRoles extends Model<MenuPagesRolesAttributes, MenuPagesRolesCreationAttributes> implements MenuPagesRolesAttributes {
  MenuPagesRoleId!: number;
  MenuName?: string;
  MenuSubName?: string;
  PageName?: string;
  MasterRoleId!: number;
  IsAllowed!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof MenuPagesRoles {
    return MenuPagesRoles.init({
    MenuPagesRoleId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MenuName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MenuSubName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    PageName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MasterRoleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsAllowed: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MenuPagesRoles',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MenuPagesRoles",
        unique: true,
        fields: [
          { name: "MenuPagesRoleId" },
        ]
      },
    ]
  });
  }
}
