import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DatabaseNamesAttributes {
  DatabaseId: number;
  DatabaseName?: string;
  CreatedDate?: Date;
}

export type DatabaseNamesPk = "DatabaseId";
export type DatabaseNamesId = DatabaseNames[DatabaseNamesPk];
export type DatabaseNamesOptionalAttributes = "DatabaseId" | "DatabaseName" | "CreatedDate";
export type DatabaseNamesCreationAttributes = Optional<DatabaseNamesAttributes, DatabaseNamesOptionalAttributes>;

export class DatabaseNames extends Model<DatabaseNamesAttributes, DatabaseNamesCreationAttributes> implements DatabaseNamesAttributes {
  DatabaseId!: number;
  DatabaseName?: string;
  CreatedDate?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof DatabaseNames {
    return DatabaseNames.init({
    DatabaseId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DatabaseName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DatabaseNames',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DatabaseNames",
        unique: true,
        fields: [
          { name: "DatabaseId" },
        ]
      },
    ]
  });
  }
}
