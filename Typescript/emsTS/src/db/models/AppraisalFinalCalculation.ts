import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface AppraisalFinalCalculationAttributes {
  AppraisalFinalCalculationID: number;
  EmployeedetailsId: number;
  AppraisalDurationId: number;
  FinalAverageRating?: number;
}

export type AppraisalFinalCalculationPk = "AppraisalFinalCalculationID";
export type AppraisalFinalCalculationId = AppraisalFinalCalculation[AppraisalFinalCalculationPk];
export type AppraisalFinalCalculationOptionalAttributes = "AppraisalFinalCalculationID" | "FinalAverageRating";
export type AppraisalFinalCalculationCreationAttributes = Optional<AppraisalFinalCalculationAttributes, AppraisalFinalCalculationOptionalAttributes>;

export class AppraisalFinalCalculation extends Model<AppraisalFinalCalculationAttributes, AppraisalFinalCalculationCreationAttributes> implements AppraisalFinalCalculationAttributes {
  AppraisalFinalCalculationID!: number;
  EmployeedetailsId!: number;
  AppraisalDurationId!: number;
  FinalAverageRating?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof AppraisalFinalCalculation {
    return AppraisalFinalCalculation.init({
    AppraisalFinalCalculationID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmployeedetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AppraisalDurationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FinalAverageRating: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AppraisalFinalCalculation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AppraisalFinalCalculation",
        unique: true,
        fields: [
          { name: "AppraisalFinalCalculationID" },
        ]
      },
    ]
  });
  }
}
