import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface FileUpdateDetailsAttributes {
  FileUpdateDetailsId: number;
  ProjectDocumentId: number;
  UpdateProjectDocumentId: number;
}

export type FileUpdateDetailsPk = "FileUpdateDetailsId";
export type FileUpdateDetailsId = FileUpdateDetails[FileUpdateDetailsPk];
export type FileUpdateDetailsOptionalAttributes = "FileUpdateDetailsId";
export type FileUpdateDetailsCreationAttributes = Optional<FileUpdateDetailsAttributes, FileUpdateDetailsOptionalAttributes>;

export class FileUpdateDetails extends Model<FileUpdateDetailsAttributes, FileUpdateDetailsCreationAttributes> implements FileUpdateDetailsAttributes {
  FileUpdateDetailsId!: number;
  ProjectDocumentId!: number;
  UpdateProjectDocumentId!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof FileUpdateDetails {
    return FileUpdateDetails.init({
    FileUpdateDetailsId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProjectDocumentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    UpdateProjectDocumentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'FileUpdateDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_FileUpdateDetails",
        unique: true,
        fields: [
          { name: "FileUpdateDetailsId" },
        ]
      },
    ]
  });
  }
}
