import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TaskDetailsAttributes {
  TaskDetailsID: number;
  ProjectID?: number;
  Task?: string;
  Description?: string;
  DeveloperID?: number;
  TesterID?: number;
  Major?: number;
  Minor?: number;
  Patch?: number;
  Build?: number;
  Status?: number;
  DeployementDate?: Date;
}

export type TaskDetailsPk = "TaskDetailsID";
export type TaskDetailsId = TaskDetails[TaskDetailsPk];
export type TaskDetailsOptionalAttributes = "TaskDetailsID" | "ProjectID" | "Task" | "Description" | "DeveloperID" | "TesterID" | "Major" | "Minor" | "Patch" | "Build" | "Status" | "DeployementDate";
export type TaskDetailsCreationAttributes = Optional<TaskDetailsAttributes, TaskDetailsOptionalAttributes>;

export class TaskDetails extends Model<TaskDetailsAttributes, TaskDetailsCreationAttributes> implements TaskDetailsAttributes {
  TaskDetailsID!: number;
  ProjectID?: number;
  Task?: string;
  Description?: string;
  DeveloperID?: number;
  TesterID?: number;
  Major?: number;
  Minor?: number;
  Patch?: number;
  Build?: number;
  Status?: number;
  DeployementDate?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof TaskDetails {
    return TaskDetails.init({
    TaskDetailsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProjectID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Task: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    DeveloperID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TesterID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Major: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Minor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Patch: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Build: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DeployementDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TaskDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_UIDetails",
        unique: true,
        fields: [
          { name: "TaskDetailsID" },
        ]
      },
    ]
  });
  }
}
