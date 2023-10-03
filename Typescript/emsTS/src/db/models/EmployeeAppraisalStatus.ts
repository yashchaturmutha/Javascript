import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AppraisalPhaseMaster, AppraisalPhaseMasterId } from './AppraisalPhaseMaster';
import type { EmployeeDetails, EmployeeDetailsId } from './EmployeeDetails';

export interface EmployeeAppraisalStatusAttributes {
  EmployeeAppraisalStatusId: number;
  EmployeeDetailsId: number;
  AppraisalPhaseId: number;
  ManagerId: number;
  Status?: string;
}

export type EmployeeAppraisalStatusPk = "EmployeeAppraisalStatusId";
export type EmployeeAppraisalStatusId = EmployeeAppraisalStatus[EmployeeAppraisalStatusPk];
export type EmployeeAppraisalStatusOptionalAttributes = "EmployeeAppraisalStatusId" | "Status";
export type EmployeeAppraisalStatusCreationAttributes = Optional<EmployeeAppraisalStatusAttributes, EmployeeAppraisalStatusOptionalAttributes>;

export class EmployeeAppraisalStatus extends Model<EmployeeAppraisalStatusAttributes, EmployeeAppraisalStatusCreationAttributes> implements EmployeeAppraisalStatusAttributes {
  EmployeeAppraisalStatusId!: number;
  EmployeeDetailsId!: number;
  AppraisalPhaseId!: number;
  ManagerId!: number;
  Status?: string;

  // // EmployeeAppraisalStatus belongsTo AppraisalPhaseMaster via AppraisalPhaseId
  // AppraisalPhase!: AppraisalPhaseMaster;
  // getAppraisalPhase!: Sequelize.BelongsToGetAssociationMixin<AppraisalPhaseMaster>;
  // setAppraisalPhase!: Sequelize.BelongsToSetAssociationMixin<AppraisalPhaseMaster, AppraisalPhaseMasterId>;
  // createAppraisalPhase!: Sequelize.BelongsToCreateAssociationMixin<AppraisalPhaseMaster>;
  // // EmployeeAppraisalStatus belongsTo EmployeeDetails via EmployeeDetailsId
  // EmployeeDetail!: EmployeeDetails;
  // getEmployeeDetail!: Sequelize.BelongsToGetAssociationMixin<EmployeeDetails>;
  // setEmployeeDetail!: Sequelize.BelongsToSetAssociationMixin<EmployeeDetails, EmployeeDetailsId>;
  // createEmployeeDetail!: Sequelize.BelongsToCreateAssociationMixin<EmployeeDetails>;

  static initModel(sequelize: Sequelize.Sequelize): typeof EmployeeAppraisalStatus {
    return EmployeeAppraisalStatus.init({
    EmployeeAppraisalStatusId: {
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
    AppraisalPhaseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'AppraisalPhaseMaster',
        key: 'AppraisalPhaseMasterId'
      }
    },
    ManagerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Status: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EmployeeAppraisalStatus',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_EmployeeAppraisalStatus",
        unique: true,
        fields: [
          { name: "EmployeeAppraisalStatusId" },
        ]
      },
    ]
  });
  }
}
