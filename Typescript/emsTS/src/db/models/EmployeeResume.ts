import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface EmployeeResumeAttributes {
  ResumeId: number;
  EmployeeId: number;
  ProjectDetails?: string;
  YearsOfExperince?: number;
  Skills?: string;
  EducationDetails?: string;
}

export type EmployeeResumeOptionalAttributes = "ResumeId" | "ProjectDetails" | "YearsOfExperince" | "Skills" | "EducationDetails";
export type EmployeeResumeCreationAttributes = Optional<EmployeeResumeAttributes, EmployeeResumeOptionalAttributes>;

export class EmployeeResume extends Model<EmployeeResumeAttributes, EmployeeResumeCreationAttributes> implements EmployeeResumeAttributes {
  ResumeId!: number;
  EmployeeId!: number;
  ProjectDetails?: string;
  YearsOfExperince?: number;
  Skills?: string;
  EducationDetails?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof EmployeeResume {
    return EmployeeResume.init({
    ResumeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    EmployeeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    YearsOfExperince: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Skills: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EducationDetails: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EmployeeResume',
    schema: 'dbo',
    timestamps: false
  });
  }
}
