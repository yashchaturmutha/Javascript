import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { EmployeeDetails, EmployeeDetailsId } from './EmployeeDetails';

export interface BankDetailsAttributes {
  BankDetailsId: number;
  EmployeeDetailsId: number;
  AccountNo: string;
  BankName: string;
  PanCardNo: string;
  AdharCardNo?: string;
  BankIfscCode?: string;
  UANNumber?: string;
  PFNumber?: string;
  ESICNumber?: string;
  BankAccountBranch?: string;
}

export type BankDetailsPk = "BankDetailsId";
export type BankDetailsId = BankDetails[BankDetailsPk];
export type BankDetailsOptionalAttributes = "BankDetailsId" | "AdharCardNo" | "BankIfscCode" | "UANNumber" | "PFNumber" | "ESICNumber" | "BankAccountBranch";
export type BankDetailsCreationAttributes = Optional<BankDetailsAttributes, BankDetailsOptionalAttributes>;

export class BankDetails extends Model<BankDetailsAttributes, BankDetailsCreationAttributes> implements BankDetailsAttributes {
  BankDetailsId!: number;
  EmployeeDetailsId!: number;
  AccountNo!: string;
  BankName!: string;
  PanCardNo!: string;
  AdharCardNo?: string;
  BankIfscCode?: string;
  UANNumber?: string;
  PFNumber?: string;
  ESICNumber?: string;
  BankAccountBranch?: string;

  // BankDetails belongsTo EmployeeDetails via EmployeeDetailsId
  // EmployeeDetail!: EmployeeDetails;
  // getEmployeeDetail!: Sequelize.BelongsToGetAssociationMixin<EmployeeDetails>;
  // setEmployeeDetail!: Sequelize.BelongsToSetAssociationMixin<EmployeeDetails, EmployeeDetailsId>;
  // createEmployeeDetail!: Sequelize.BelongsToCreateAssociationMixin<EmployeeDetails>;

  static initModel(sequelize: Sequelize.Sequelize): typeof BankDetails {
    return BankDetails.init({
    BankDetailsId: {
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
    AccountNo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    BankName: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    PanCardNo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    AdharCardNo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BankIfscCode: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    UANNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PFNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ESICNumber: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BankAccountBranch: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'BankDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_BankDetails",
        unique: true,
        fields: [
          { name: "BankDetailsId" },
        ]
      },
    ]
  });
  }
}
