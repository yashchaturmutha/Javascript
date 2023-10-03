import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ProjectMilestoneAttributes {
  ProjectMilestoneId: number;
  CompanyProjectId: number;
  MilestoneName: string;
  MilestoneDesc?: string;
  Amount: number;
  StartDate: string;
  EndDate?: string;
}

export type ProjectMilestonePk = "ProjectMilestoneId";
export type ProjectMilestoneId = ProjectMilestone[ProjectMilestonePk];
export type ProjectMilestoneOptionalAttributes = "ProjectMilestoneId" | "MilestoneDesc" | "EndDate";
export type ProjectMilestoneCreationAttributes = Optional<ProjectMilestoneAttributes, ProjectMilestoneOptionalAttributes>;

export class ProjectMilestone extends Model<ProjectMilestoneAttributes, ProjectMilestoneCreationAttributes> implements ProjectMilestoneAttributes {
  ProjectMilestoneId!: number;
  CompanyProjectId!: number;
  MilestoneName!: string;
  MilestoneDesc?: string;
  Amount!: number;
  StartDate!: string;
  EndDate?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ProjectMilestone {
    return ProjectMilestone.init({
    ProjectMilestoneId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CompanyProjectId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MilestoneName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MilestoneDesc: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    Amount: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    StartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    EndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ProjectMilestone',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ProjectMilestone",
        unique: true,
        fields: [
          { name: "ProjectMilestoneId" },
        ]
      },
    ]
  });
  }
}
