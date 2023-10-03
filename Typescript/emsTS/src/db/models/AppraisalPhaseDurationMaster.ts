import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AppraisalDurationMaster, AppraisalDurationMasterId } from './AppraisalDurationMaster';
import type { AppraisalPhaseMaster, AppraisalPhaseMasterId } from './AppraisalPhaseMaster';

export interface AppraisalPhaseDurationMasterAttributes {
  AppraisalPhaseDurationMasterId: number;
  AppraisalDurationId: number;
  AppraisalPhaseId: number;
  StartDate?: Date;
  EndDate?: Date;
}

export type AppraisalPhaseDurationMasterPk = "AppraisalPhaseDurationMasterId";
export type AppraisalPhaseDurationMasterId = AppraisalPhaseDurationMaster[AppraisalPhaseDurationMasterPk];
export type AppraisalPhaseDurationMasterOptionalAttributes = "AppraisalPhaseDurationMasterId" | "StartDate" | "EndDate";
export type AppraisalPhaseDurationMasterCreationAttributes = Optional<AppraisalPhaseDurationMasterAttributes, AppraisalPhaseDurationMasterOptionalAttributes>;

export class AppraisalPhaseDurationMaster extends Model<AppraisalPhaseDurationMasterAttributes, AppraisalPhaseDurationMasterCreationAttributes> implements AppraisalPhaseDurationMasterAttributes {
  AppraisalPhaseDurationMasterId!: number;
  AppraisalDurationId!: number;
  AppraisalPhaseId!: number;
  StartDate?: Date;
  EndDate?: Date;

  // // AppraisalPhaseDurationMaster belongsTo AppraisalDurationMaster via AppraisalDurationId
  // AppraisalDuration!: AppraisalDurationMaster;
  // getAppraisalDuration!: Sequelize.BelongsToGetAssociationMixin<AppraisalDurationMaster>;
  // setAppraisalDuration!: Sequelize.BelongsToSetAssociationMixin<AppraisalDurationMaster, AppraisalDurationMasterId>;
  // createAppraisalDuration!: Sequelize.BelongsToCreateAssociationMixin<AppraisalDurationMaster>;
  // // AppraisalPhaseDurationMaster belongsTo AppraisalPhaseMaster via AppraisalPhaseId
  // AppraisalPhase!: AppraisalPhaseMaster;
  // getAppraisalPhase!: Sequelize.BelongsToGetAssociationMixin<AppraisalPhaseMaster>;
  // setAppraisalPhase!: Sequelize.BelongsToSetAssociationMixin<AppraisalPhaseMaster, AppraisalPhaseMasterId>;
  // createAppraisalPhase!: Sequelize.BelongsToCreateAssociationMixin<AppraisalPhaseMaster>;

  static initModel(sequelize: Sequelize.Sequelize): typeof AppraisalPhaseDurationMaster {
    return AppraisalPhaseDurationMaster.init({
    AppraisalPhaseDurationMasterId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AppraisalDurationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'AppraisalDurationMaster',
        key: 'AppraisalDurationMasterId'
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
    StartDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EndDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AppraisalPhaseDurationMaster',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AppraisalPhaseDurationMaster",
        unique: true,
        fields: [
          { name: "AppraisalPhaseDurationMasterId" },
        ]
      },
    ]
  });
  }
}
