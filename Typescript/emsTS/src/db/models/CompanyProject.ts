import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CompanyProjectAttributes {
  CompanyProjectId: number;
  ProjectName: string;
  ProjectTechnology: string;
  ProjectPhaseId: number;
  ProjectStartDate: string;
  ProjectEndDate?: string;
  projectstatus?: number;
  ClientName?: string;
  MasterBusinessUnit?: number;
  ProjectType?: number;
  ClientId?: number;
  TeamSize?: number;
  Currency?: number;
  BillingType?: number;
}

export type CompanyProjectPk = "CompanyProjectId";
export type CompanyProjectId = CompanyProject[CompanyProjectPk];
export type CompanyProjectOptionalAttributes = "CompanyProjectId" | "ProjectEndDate" | "projectstatus" | "ClientName" | "MasterBusinessUnit" | "ProjectType";
export type CompanyProjectCreationAttributes = Optional<CompanyProjectAttributes, CompanyProjectOptionalAttributes>;

export class CompanyProject extends Model<CompanyProjectAttributes, CompanyProjectCreationAttributes> implements CompanyProjectAttributes {
  CompanyProjectId!: number;
  ProjectName!: string;
  ProjectTechnology!: string;
  ProjectPhaseId!: number;
  ProjectStartDate!: string;
  ProjectEndDate?: string;
  projectstatus?: number;
  ClientName?: string;
  MasterBusinessUnit?: number;
  ProjectType?: number;
  ClientId?: number;
  TeamSize?: number;
  Currency?: number;
  BillingType?: number;

  static initModel(sequelize: Sequelize.Sequelize): typeof CompanyProject {
    return CompanyProject.init({
    CompanyProjectId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProjectName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ProjectTechnology: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ProjectPhaseId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ProjectStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ProjectEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    projectstatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ClientName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MasterBusinessUnit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ProjectType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    ClientId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    TeamSize: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    Currency: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    BillingType: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }

  }, {
    sequelize,
    tableName: 'CompanyProject',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CompanyProject",
        unique: true,
        fields: [
          { name: "CompanyProjectId" },
        ]
      },
    ]
  });
  }
}
