import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ProjectDocumentAttributes {
  ProjectDocumentId: number;
  EmployeeDetailsId?: number;
  CompanyProjectId: number;
  DocumentDescription?: string;
  DocumentFile: string;
  DocumentVersion: string;
  DocumentUploadDate: string;
}

export type ProjectDocumentPk = "ProjectDocumentId";
export type ProjectDocumentId = ProjectDocument[ProjectDocumentPk];
export type ProjectDocumentOptionalAttributes = "ProjectDocumentId" | "EmployeeDetailsId" | "DocumentDescription";
export type ProjectDocumentCreationAttributes = Optional<ProjectDocumentAttributes, ProjectDocumentOptionalAttributes>;

export class ProjectDocument extends Model<ProjectDocumentAttributes, ProjectDocumentCreationAttributes> implements ProjectDocumentAttributes {
  ProjectDocumentId!: number;
  EmployeeDetailsId?: number;
  CompanyProjectId!: number;
  DocumentDescription?: string;
  DocumentFile!: string;
  DocumentVersion!: string;
  DocumentUploadDate!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ProjectDocument {
    return ProjectDocument.init({
    ProjectDocumentId: {
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
      allowNull: false
    },
    DocumentDescription: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DocumentFile: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    DocumentVersion: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    DocumentUploadDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ProjectDocument',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ProjectDocument",
        unique: true,
        fields: [
          { name: "ProjectDocumentId" },
        ]
      },
    ]
  });
  }
}
