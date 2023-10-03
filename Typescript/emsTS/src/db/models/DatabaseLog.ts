import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DatabaseLogAttributes {
  DatabaseLogId: number;
  CreatedDate?: Date;
  ProjectId?: number;
  UserId?: number;
  DatabaseName?: number;
  DBObject?: number;
  Action?: number;
  Object?: string;
  Description?: string;
  DeployStatus?: number;
  Major?: number;
  Minor?: number;
  Patch?: number;
  Build?: number;
}

export type DatabaseLogPk = "DatabaseLogId";
export type DatabaseLogId = DatabaseLog[DatabaseLogPk];
export type DatabaseLogOptionalAttributes = "DatabaseLogId" | "CreatedDate" | "ProjectId" | "UserId" | "DatabaseName" | "DBObject" | "Action" | "Object" | "Description" | "DeployStatus" | "Major" | "Minor" | "Patch" | "Build";
export type DatabaseLogCreationAttributes = Optional<DatabaseLogAttributes, DatabaseLogOptionalAttributes>;

export class DatabaseLog extends Model<DatabaseLogAttributes, DatabaseLogCreationAttributes> implements DatabaseLogAttributes {
  DatabaseLogId!: number;
  CreatedDate?: Date;
  ProjectId?: number;
  UserId?: number;
  DatabaseName?: number;
  DBObject?: number;
  Action?: number;
  Object?: string;
  Description?: string;
  DeployStatus?: number;
  Major?: number;
  Minor?: number;
  Patch?: number;
  Build?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof DatabaseLog {
    return DatabaseLog.init({
    DatabaseLogId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DatabaseName: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DBObject: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Action: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Object: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    DeployStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Major: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Minor: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Patch: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Build: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DatabaseLog',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DatabaseLog",
        unique: true,
        fields: [
          { name: "DatabaseLogId" },
        ]
      },
    ]
  });
  }
}
