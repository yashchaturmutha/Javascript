import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface EmployeeDocumentsAttributes {
  EmployeeDocumentId: number;
  EmployeeDetailsId: number;
  DocumentType: string;
  DocumentDescription?: string;
  DocumentFile: string;
  DocumentDate?: string;
  CreatedOn: Date;
}

export type EmployeeDocumentsPk = "EmployeeDocumentId";
export type EmployeeDocumentsId = EmployeeDocuments[EmployeeDocumentsPk];
export type EmployeeDocumentsOptionalAttributes = "EmployeeDocumentId" | "DocumentDescription" | "DocumentDate" | "CreatedOn";
export type EmployeeDocumentsCreationAttributes = Optional<EmployeeDocumentsAttributes, EmployeeDocumentsOptionalAttributes>;

export class EmployeeDocuments extends Model<EmployeeDocumentsAttributes, EmployeeDocumentsCreationAttributes> implements EmployeeDocumentsAttributes {
  EmployeeDocumentId!: number;
  EmployeeDetailsId!: number;
  DocumentType!: string;
  DocumentDescription?: string;
  DocumentFile!: string;
  DocumentDate?: string;
  CreatedOn!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof EmployeeDocuments {
    return EmployeeDocuments.init({
    EmployeeDocumentId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmployeeDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DocumentType: {
      type: DataTypes.STRING(100),
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
    DocumentDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CreatedOn: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('getdate')
    }
  }, {
    sequelize,
    tableName: 'EmployeeDocuments',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_EmployeeDocument",
        unique: true,
        fields: [
          { name: "EmployeeDocumentId" },
        ]
      },
    ]
  });
  }
}
