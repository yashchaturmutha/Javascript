import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DesignationMaster, DesignationMasterId } from './DesignationMaster';
import type { EmployeeDetails, EmployeeDetailsId } from './EmployeeDetails';

export interface CurrentCompanyDetailsAttributes {
  CurrentCompanyDetailsId: number;
  EmployeeDetailsId: number;
  CurrentCTC: number;
  JoiningDate: string;
  DepartmentMasterId: number;
  DesignationMasterId: number;
  NextRaiseDate?: string;
  ReleaseDate?: string;
  ExperienceSkills?: string;
  OtherSkills?: string;
  YearsOfExperience?: number;
  YearsOfExperienceDate?: string;
  Certifications?: string;
  ResumeFileName?: string;
  MasterBusinessUnitId?: number;
  EmployeeTypeId?: number;
}

export type CurrentCompanyDetailsPk = "CurrentCompanyDetailsId";
export type CurrentCompanyDetailsId = CurrentCompanyDetails[CurrentCompanyDetailsPk];
export type CurrentCompanyDetailsOptionalAttributes = "CurrentCompanyDetailsId" | "NextRaiseDate" | "ReleaseDate" | "ExperienceSkills" | "OtherSkills" | "YearsOfExperience" | "YearsOfExperienceDate" | "Certifications" | "ResumeFileName" | "MasterBusinessUnitId" | "EmployeeTypeId";
export type CurrentCompanyDetailsCreationAttributes = Optional<CurrentCompanyDetailsAttributes, CurrentCompanyDetailsOptionalAttributes>;

export class CurrentCompanyDetails extends Model<CurrentCompanyDetailsAttributes, CurrentCompanyDetailsCreationAttributes> implements CurrentCompanyDetailsAttributes {
  CurrentCompanyDetailsId!: number;
  EmployeeDetailsId!: number;
  CurrentCTC!: number;
  JoiningDate!: string;
  DepartmentMasterId!: number;
  DesignationMasterId!: number;
  NextRaiseDate?: string;
  ReleaseDate?: string;
  ExperienceSkills?: string;
  OtherSkills?: string;
  YearsOfExperience?: number;
  YearsOfExperienceDate?: string;
  Certifications?: string;
  ResumeFileName?: string;
  MasterBusinessUnitId?: number;
  EmployeeTypeId?: number;

  // // CurrentCompanyDetails belongsTo DesignationMaster via DesignationMasterId
  // DesignationMaster!: DesignationMaster;
  // getDesignationMaster!: Sequelize.BelongsToGetAssociationMixin<DesignationMaster>;
  // setDesignationMaster!: Sequelize.BelongsToSetAssociationMixin<DesignationMaster, DesignationMasterId>;
  // createDesignationMaster!: Sequelize.BelongsToCreateAssociationMixin<DesignationMaster>;
  // // CurrentCompanyDetails belongsTo EmployeeDetails via EmployeeDetailsId
  // EmployeeDetail!: EmployeeDetails;
  // getEmployeeDetail!: Sequelize.BelongsToGetAssociationMixin<EmployeeDetails>;
  // setEmployeeDetail!: Sequelize.BelongsToSetAssociationMixin<EmployeeDetails, EmployeeDetailsId>;
  // createEmployeeDetail!: Sequelize.BelongsToCreateAssociationMixin<EmployeeDetails>;

  static initModel(sequelize: Sequelize.Sequelize): typeof CurrentCompanyDetails {
    return CurrentCompanyDetails.init({
    CurrentCompanyDetailsId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmployeeDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EmployeeDetails',
        key: 'EmployeeDetailsId'
      }
    },
    CurrentCTC: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    JoiningDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DepartmentMasterId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DesignationMasterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'DesignationMaster',
        key: 'DesignationMasterId'
      }
    },
    NextRaiseDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ReleaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ExperienceSkills: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OtherSkills: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    YearsOfExperience: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    YearsOfExperienceDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Certifications: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ResumeFileName: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    MasterBusinessUnitId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EmployeeTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'CurrentCompanyDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CurrentCompanyDetails",
        unique: true,
        fields: [
          { name: "CurrentCompanyDetailsId" },
        ]
      },
    ]
  });
  }
}
