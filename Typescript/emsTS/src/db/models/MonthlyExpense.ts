import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface MonthlyExpenseAttributes {
  MonthlyExpenseId?: number;
  ExpDescription?: string;
  Amount?: number;
  ExpDate?: string;
  EntryType?: number;
}

export type MonthlyExpenseOptionalAttributes = "MonthlyExpenseId" | "ExpDescription" | "Amount" | "ExpDate" | "EntryType";
export type MonthlyExpenseCreationAttributes = Optional<MonthlyExpenseAttributes, MonthlyExpenseOptionalAttributes>;

export class MonthlyExpense extends Model<MonthlyExpenseAttributes, MonthlyExpenseCreationAttributes> implements MonthlyExpenseAttributes {
  MonthlyExpenseId?: number;
  ExpDescription?: string;
  Amount?: number;
  ExpDate?: string;
  EntryType?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof MonthlyExpense {
    return MonthlyExpense.init({
    MonthlyExpenseId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ExpDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Amount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ExpDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    EntryType: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MonthlyExpense',
    schema: 'dbo',
    timestamps: false
  });
  }
}
