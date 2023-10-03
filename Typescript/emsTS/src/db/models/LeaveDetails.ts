import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface LeaveDetailsAttributes {
  LeaveDetailsId: number;
  EmployeeDetailsId: number;
  FromDate: string;
  ToDate: string;
  Reason: string;
  LeaveStatus?: string;
  ReasonToDenyRequest?: string;
}

export type LeaveDetailsPk = "LeaveDetailsId";
export type LeaveDetailsId = LeaveDetails[LeaveDetailsPk];
export type LeaveDetailsOptionalAttributes = "LeaveDetailsId" | "FromDate" | "ToDate" | "LeaveStatus" | "ReasonToDenyRequest";
export type LeaveDetailsCreationAttributes = Optional<LeaveDetailsAttributes, LeaveDetailsOptionalAttributes>;

export class LeaveDetails extends Model<LeaveDetailsAttributes, LeaveDetailsCreationAttributes> implements LeaveDetailsAttributes {
  LeaveDetailsId!: number;
  EmployeeDetailsId!: number;
  FromDate!: string;
  ToDate!: string;
  Reason!: string;
  LeaveStatus?: string;
  ReasonToDenyRequest?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof LeaveDetails {
    return LeaveDetails.init({
    LeaveDetailsId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmployeeDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FromDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ToDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Reason: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    LeaveStatus: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ReasonToDenyRequest: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LeaveDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_LeaveDetails",
        unique: true,
        fields: [
          { name: "LeaveDetailsId" },
        ]
      },
    ]
  });
  }
}
