import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { EmployeeDetails, EmployeeDetailsId } from './EmployeeDetails';

export interface PreviousCompanyDetailsAttributes {
  PreviousCompanyId: number;
  EmployeeDetailsId: number;
  PreviousCompanyName?: string;
  Experience?: number;
  StartDate?: string;
  EndDate?: string;
  ReasonToLeave?: string;
  Skills: string;
}

export type PreviousCompanyDetailsPk = "PreviousCompanyId";
export type PreviousCompanyDetailsId = PreviousCompanyDetails[PreviousCompanyDetailsPk];
export type PreviousCompanyDetailsOptionalAttributes = "PreviousCompanyId" | "PreviousCompanyName" | "Experience" | "StartDate" | "EndDate" | "ReasonToLeave";
export type PreviousCompanyDetailsCreationAttributes = Optional<PreviousCompanyDetailsAttributes, PreviousCompanyDetailsOptionalAttributes>;

export class PreviousCompanyDetails extends Model<PreviousCompanyDetailsAttributes, PreviousCompanyDetailsCreationAttributes> implements PreviousCompanyDetailsAttributes {
  PreviousCompanyId!: number;
  EmployeeDetailsId!: number;
  PreviousCompanyName?: string;
  Experience?: number;
  StartDate?: string;
  EndDate?: string;
  ReasonToLeave?: string;
  Skills!: string;

  // PreviousCompanyDetails belongsTo EmployeeDetails via EmployeeDetailsId
  // EmployeeDetail!: EmployeeDetails;
  // getEmployeeDetail!: Sequelize.BelongsToGetAssociationMixin<EmployeeDetails>;
  // setEmployeeDetail!: Sequelize.BelongsToSetAssociationMixin<EmployeeDetails, EmployeeDetailsId>;
  // createEmployeeDetail!: Sequelize.BelongsToCreateAssociationMixin<EmployeeDetails>;

  static initModel(sequelize: Sequelize.Sequelize): typeof PreviousCompanyDetails {
    return PreviousCompanyDetails.init({
    PreviousCompanyId: {
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
    PreviousCompanyName: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Experience: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    StartDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    EndDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ReasonToLeave: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Skills: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PreviousCompanyDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PreviousCompanyDetails",
        unique: true,
        fields: [
          { name: "PreviousCompanyId" },
        ]
      },
    ]
  });
  }
}
