import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface EmployeeLeaveCarryForwardAttributes {
  EmployeeLeaveCarryForwardId: number;
  EmployeeDetailsId?: number;
  FinanceYearEnding?: number;
  LeavesCarryForward?: number;
}

export type EmployeeLeaveCarryForwardOptionalAttributes = "EmployeeLeaveCarryForwardId" | "EmployeeDetailsId" | "FinanceYearEnding" | "LeavesCarryForward";
export type EmployeeLeaveCarryForwardCreationAttributes = Optional<EmployeeLeaveCarryForwardAttributes, EmployeeLeaveCarryForwardOptionalAttributes>;

export class EmployeeLeaveCarryForward extends Model<EmployeeLeaveCarryForwardAttributes, EmployeeLeaveCarryForwardCreationAttributes> implements EmployeeLeaveCarryForwardAttributes {
  EmployeeLeaveCarryForwardId!: number;
  EmployeeDetailsId?: number;
  FinanceYearEnding?: number;
  LeavesCarryForward?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof EmployeeLeaveCarryForward {
    return EmployeeLeaveCarryForward.init({
    EmployeeLeaveCarryForwardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    EmployeeDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FinanceYearEnding: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LeavesCarryForward: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EmployeeLeaveCarryForward',
    schema: 'dbo',
    timestamps: false
  });
  }
}
