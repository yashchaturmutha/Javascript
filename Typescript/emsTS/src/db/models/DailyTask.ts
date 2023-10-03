import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DailyTaskAttributes {
  DailyTaskId: number;
  EmployeeDetailsId?: number;
  CompanyProjectId?: number;
  TaskDescription?: string;
  TaskHour?: number;
  TaskDate?: Date;
  TaskStatus?: number;
  BlockingIssues?: string;
  PersonResponsibleForBlock?: string;
}

export type DailyTaskPk = "DailyTaskId";
export type DailyTaskId = DailyTask[DailyTaskPk];
export type DailyTaskOptionalAttributes = "DailyTaskId" | "EmployeeDetailsId" | "CompanyProjectId" | "TaskDescription" | "TaskHour" | "TaskDate" | "TaskStatus" | "BlockingIssues" | "PersonResponsibleForBlock";
export type DailyTaskCreationAttributes = Optional<DailyTaskAttributes, DailyTaskOptionalAttributes>;

export class DailyTask extends Model<DailyTaskAttributes, DailyTaskCreationAttributes> implements DailyTaskAttributes {
  DailyTaskId!: number;
  EmployeeDetailsId?: number;
  CompanyProjectId?: number;
  TaskDescription?: string;
  TaskHour?: number;
  TaskDate?: Date;
  TaskStatus?: number;
  BlockingIssues?: string;
  PersonResponsibleForBlock?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DailyTask {
    return DailyTask.init({
    DailyTaskId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmployeeDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CompanyProjectId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TaskDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TaskHour: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    TaskDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TaskStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BlockingIssues: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    PersonResponsibleForBlock: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DailyTask',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Daily_Task",
        unique: true,
        fields: [
          { name: "DailyTaskId" },
        ]
      },
    ]
  });
  }
}
