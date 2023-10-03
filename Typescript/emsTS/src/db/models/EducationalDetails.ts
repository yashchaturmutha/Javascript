import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { EmployeeDetails, EmployeeDetailsId } from './EmployeeDetails';

export interface EducationalDetailsAttributes {
  EducationDetailsId: number;
  EmployeeDetailsId: number;
  grade: string;
  Stream: string;
  College: string;
  University: string;
  Percentage: string;
  YearOfPassing: string;
}

export type EducationalDetailsPk = "EducationDetailsId";
export type EducationalDetailsId = EducationalDetails[EducationalDetailsPk];
export type EducationalDetailsOptionalAttributes = "EducationDetailsId";
export type EducationalDetailsCreationAttributes = Optional<EducationalDetailsAttributes, EducationalDetailsOptionalAttributes>;

export class EducationalDetails extends Model<EducationalDetailsAttributes, EducationalDetailsCreationAttributes> implements EducationalDetailsAttributes {
  EducationDetailsId!: number;
  EmployeeDetailsId!: number;
  grade!: string;
  Stream!: string;
  College!: string;
  University!: string;
  Percentage!: string;
  YearOfPassing!: string;

  // // EducationalDetails belongsTo EmployeeDetails via EmployeeDetailsId
  // EmployeeDetail!: EmployeeDetails;
  // getEmployeeDetail!: Sequelize.BelongsToGetAssociationMixin<EmployeeDetails>;
  // setEmployeeDetail!: Sequelize.BelongsToSetAssociationMixin<EmployeeDetails, EmployeeDetailsId>;
  // createEmployeeDetail!: Sequelize.BelongsToCreateAssociationMixin<EmployeeDetails>;

  static initModel(sequelize: Sequelize.Sequelize): typeof EducationalDetails {
    return EducationalDetails.init({
    EducationDetailsId: {
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
    grade: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Stream: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    College: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    University: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    Percentage: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    YearOfPassing: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'EducationalDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_EducationalDetails",
        unique: true,
        fields: [
          { name: "EducationDetailsId" },
        ]
      },
    ]
  });
  }
}
