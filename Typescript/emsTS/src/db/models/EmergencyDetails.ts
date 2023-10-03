import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { EmployeeDetails, EmployeeDetailsId } from './EmployeeDetails';

export interface EmergencyDetailsAttributes {
  EmergencyDetailsId: number;
  EmployeeDetailsId: number;
  Personal1Name: string;
  FContact1: string;
  FContact2?: string;
  Personal2Name: string;
  SContact1: string;
  SContact2?: string;
  BloodGroup?: string;
}

export type EmergencyDetailsPk = "EmergencyDetailsId";
export type EmergencyDetailsId = EmergencyDetails[EmergencyDetailsPk];
export type EmergencyDetailsOptionalAttributes = "EmergencyDetailsId" | "FContact2" | "SContact2" | "BloodGroup";
export type EmergencyDetailsCreationAttributes = Optional<EmergencyDetailsAttributes, EmergencyDetailsOptionalAttributes>;

export class EmergencyDetails extends Model<EmergencyDetailsAttributes, EmergencyDetailsCreationAttributes> implements EmergencyDetailsAttributes {
  EmergencyDetailsId!: number;
  EmployeeDetailsId!: number;
  Personal1Name!: string;
  FContact1!: string;
  FContact2?: string;
  Personal2Name!: string;
  SContact1!: string;
  SContact2?: string;
  BloodGroup?: string;

  // // EmergencyDetails belongsTo EmployeeDetails via EmployeeDetailsId
  // EmployeeDetail!: EmployeeDetails;
  // getEmployeeDetail!: Sequelize.BelongsToGetAssociationMixin<EmployeeDetails>;
  // setEmployeeDetail!: Sequelize.BelongsToSetAssociationMixin<EmployeeDetails, EmployeeDetailsId>;
  // createEmployeeDetail!: Sequelize.BelongsToCreateAssociationMixin<EmployeeDetails>;

  static initModel(sequelize: Sequelize.Sequelize): typeof EmergencyDetails {
    return EmergencyDetails.init({
    EmergencyDetailsId: {
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
    Personal1Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    FContact1: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    FContact2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Personal2Name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    SContact1: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    SContact2: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    BloodGroup: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EmergencyDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_EmergencyDetails",
        unique: true,
        fields: [
          { name: "EmergencyDetailsId" },
        ]
      },
    ]
  });
  }
}
