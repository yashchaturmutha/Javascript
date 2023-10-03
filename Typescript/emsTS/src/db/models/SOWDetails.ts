import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import { UserProjectMaster } from './UserProjectMaster';

export interface SOWDetailsAttributes {
  SOWMasterId: number;
  SOWName: string;
  SOWSerialNumber?: string;
  IsAutoRenewal?: string;
  ParentSOWId?: number;
  StartDate: string;
  EndDate?: string;
  MaxBillableHours?: number;
  MaxBillingAmount?: number;
  CompanyProjectId: number;
  MasterRateTypeId?: number;
  Rate?: number;
  IsActive?: boolean;
  SOWFile?: string;
}

export type SOWDetailsPk = "SOWMasterId";
export type SOWDetailsId = SOWDetails[SOWDetailsPk];
export type SOWDetailsOptionalAttributes = "SOWMasterId" | "SOWSerialNumber" | "IsAutoRenewal" | "ParentSOWId" | "EndDate" | "MaxBillableHours" | "MaxBillingAmount" | "MasterRateTypeId" | "Rate" | "IsActive" | "SOWFile";
export type SOWDetailsCreationAttributes = Optional<SOWDetailsAttributes, SOWDetailsOptionalAttributes>;

export class SOWDetails extends Model<SOWDetailsAttributes, SOWDetailsCreationAttributes> implements SOWDetailsAttributes {
  SOWMasterId!: number;
  SOWName!: string;
  SOWSerialNumber?: string;
  IsAutoRenewal?: string;
  ParentSOWId?: number;
  StartDate!: string;
  EndDate?: string;
  MaxBillableHours?: number;
  MaxBillingAmount?: number;
  CompanyProjectId!: number;
  MasterRateTypeId?: number;
  Rate?: number;
  IsActive?: boolean;
  SOWFile?: string;
  upm?: UserProjectMaster[];

  static initModel(sequelize: Sequelize.Sequelize): typeof SOWDetails {
    return SOWDetails.init({
      SOWMasterId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      SOWName: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      SOWSerialNumber: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      IsAutoRenewal: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      ParentSOWId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      StartDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
      },
      EndDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      MaxBillableHours: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      MaxBillingAmount: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      CompanyProjectId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      MasterRateTypeId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      Rate: {
        type: DataTypes.FLOAT,
        allowNull: true
      },
      IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      SOWFile: {
        type: DataTypes.STRING(256),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'SOWDetails',
      schema: 'dbo',
      timestamps: false,
      indexes: [
        {
          name: "PK_SOWMaster",
          unique: true,
          fields: [
            { name: "SOWMasterId" },
          ]
        },
      ]
    });
  }
}
