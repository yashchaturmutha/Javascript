import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AppraisalDurationMaster, AppraisalDurationMasterId } from './AppraisalDurationMaster';
import type { AppraisalPhaseMaster, AppraisalPhaseMasterId } from './AppraisalPhaseMaster';
import type { EmployeeDetails, EmployeeDetailsId } from './EmployeeDetails';
import type { KRAMaster, KRAMasterId } from './KRAMaster';

export interface EmployeeKRAAttributes {
  EmployeeKRAId: number;
  EmaployeedetailsId: number;
  KRAMasterId: number;
  KRADescription?: string;
  Weightage?: number;
  EmployeeRating?: string;
  EmployeeComments?: string;
  ManagerRating?: string;
  ManagerComments?: string;
  AppraisalDurationId: number;
  AppraisalPhaseDurationId?: number;
  SubmittedByManagerId?: number;
  IsEmployeeRatingLocked?: boolean;
  IsManagerRatingLocked?: boolean;
  FinalRating?: string;
  FinalComment?: string;
}

export type EmployeeKRAPk = "EmployeeKRAId";
export type EmployeeKRAId = EmployeeKRA[EmployeeKRAPk];
export type EmployeeKRAOptionalAttributes = "EmployeeKRAId" | "KRADescription" | "Weightage" | "EmployeeRating" | "EmployeeComments" | "ManagerRating" | "ManagerComments" | "AppraisalPhaseDurationId" | "SubmittedByManagerId" | "IsEmployeeRatingLocked" | "IsManagerRatingLocked" | "FinalRating" | "FinalComment";
export type EmployeeKRACreationAttributes = Optional<EmployeeKRAAttributes, EmployeeKRAOptionalAttributes>;

export class EmployeeKRA extends Model<EmployeeKRAAttributes, EmployeeKRACreationAttributes> implements EmployeeKRAAttributes {
  EmployeeKRAId!: number;
  EmaployeedetailsId!: number;
  KRAMasterId!: number;
  KRADescription?: string;
  Weightage?: number;
  EmployeeRating?: string;
  EmployeeComments?: string;
  ManagerRating?: string;
  ManagerComments?: string;
  AppraisalDurationId!: number;
  AppraisalPhaseDurationId?: number;
  SubmittedByManagerId?: number;
  IsEmployeeRatingLocked?: boolean;
  IsManagerRatingLocked?: boolean;
  FinalRating?: string;
  FinalComment?: string;

  // // EmployeeKRA belongsTo AppraisalDurationMaster via AppraisalDurationId
  // AppraisalDuration!: AppraisalDurationMaster;
  // getAppraisalDuration!: Sequelize.BelongsToGetAssociationMixin<AppraisalDurationMaster>;
  // setAppraisalDuration!: Sequelize.BelongsToSetAssociationMixin<AppraisalDurationMaster, AppraisalDurationMasterId>;
  // createAppraisalDuration!: Sequelize.BelongsToCreateAssociationMixin<AppraisalDurationMaster>;
  // // EmployeeKRA belongsTo AppraisalPhaseMaster via AppraisalPhaseDurationId
  // AppraisalPhaseDuration!: AppraisalPhaseMaster;
  // getAppraisalPhaseDuration!: Sequelize.BelongsToGetAssociationMixin<AppraisalPhaseMaster>;
  // setAppraisalPhaseDuration!: Sequelize.BelongsToSetAssociationMixin<AppraisalPhaseMaster, AppraisalPhaseMasterId>;
  // createAppraisalPhaseDuration!: Sequelize.BelongsToCreateAssociationMixin<AppraisalPhaseMaster>;
  // // EmployeeKRA belongsTo EmployeeDetails via EmaployeedetailsId
  // Emaployeedetail!: EmployeeDetails;
  // getEmaployeedetail!: Sequelize.BelongsToGetAssociationMixin<EmployeeDetails>;
  // setEmaployeedetail!: Sequelize.BelongsToSetAssociationMixin<EmployeeDetails, EmployeeDetailsId>;
  // createEmaployeedetail!: Sequelize.BelongsToCreateAssociationMixin<EmployeeDetails>;
  // // EmployeeKRA belongsTo EmployeeKRA via EmployeeKRAId
  // EmployeeKRA!: EmployeeKRA;
  // getEmployeeKRA!: Sequelize.BelongsToGetAssociationMixin<EmployeeKRA>;
  // setEmployeeKRA!: Sequelize.BelongsToSetAssociationMixin<EmployeeKRA, EmployeeKRAId>;
  // createEmployeeKRA!: Sequelize.BelongsToCreateAssociationMixin<EmployeeKRA>;
  // // EmployeeKRA belongsTo KRAMaster via KRAMasterId
  // KRAMaster!: KRAMaster;
  // getKRAMaster!: Sequelize.BelongsToGetAssociationMixin<KRAMaster>;
  // setKRAMaster!: Sequelize.BelongsToSetAssociationMixin<KRAMaster, KRAMasterId>;
  // createKRAMaster!: Sequelize.BelongsToCreateAssociationMixin<KRAMaster>;

  static initModel(sequelize: Sequelize.Sequelize): typeof EmployeeKRA {
    return EmployeeKRA.init({
    EmployeeKRAId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'EmployeeKRA',
        key: 'EmployeeKRAId'
      }
    },
    EmaployeedetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EmployeeDetails',
        key: 'EmployeeDetailsId'
      }
    },
    KRAMasterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'KRAMaster',
        key: 'KRAMasterId'
      }
    },
    KRADescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Weightage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EmployeeRating: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EmployeeComments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ManagerRating: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ManagerComments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    AppraisalDurationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'AppraisalDurationMaster',
        key: 'AppraisalDurationMasterId'
      }
    },
    AppraisalPhaseDurationId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'AppraisalPhaseMaster',
        key: 'AppraisalPhaseMasterId'
      }
    },
    SubmittedByManagerId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    IsEmployeeRatingLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    IsManagerRatingLocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    FinalRating: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FinalComment: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EmployeeKRA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_EmployeeKRA",
        unique: true,
        fields: [
          { name: "EmployeeKRAId" },
        ]
      },
    ]
  });
  }
}
