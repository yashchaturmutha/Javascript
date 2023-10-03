import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AppraisalPhaseDurationMaster, AppraisalPhaseDurationMasterId } from './AppraisalPhaseDurationMaster';
import type { EmployeeAppraisalStatus, EmployeeAppraisalStatusId } from './EmployeeAppraisalStatus';
import type { EmployeeKRA, EmployeeKRAId } from './EmployeeKRA';

export interface AppraisalPhaseMasterAttributes {
  AppraisalPhaseMasterId: number;
  Phase?: string;
}

export type AppraisalPhaseMasterPk = "AppraisalPhaseMasterId";
export type AppraisalPhaseMasterId = AppraisalPhaseMaster[AppraisalPhaseMasterPk];
export type AppraisalPhaseMasterOptionalAttributes = "AppraisalPhaseMasterId" | "Phase";
export type AppraisalPhaseMasterCreationAttributes = Optional<AppraisalPhaseMasterAttributes, AppraisalPhaseMasterOptionalAttributes>;

export class AppraisalPhaseMaster extends Model<AppraisalPhaseMasterAttributes, AppraisalPhaseMasterCreationAttributes> implements AppraisalPhaseMasterAttributes {
  AppraisalPhaseMasterId!: number;
  Phase?: string;

  // // AppraisalPhaseMaster hasMany AppraisalPhaseDurationMaster via AppraisalPhaseId
  // AppraisalPhaseDurationMasters!: AppraisalPhaseDurationMaster[];
  // getAppraisalPhaseDurationMasters!: Sequelize.HasManyGetAssociationsMixin<AppraisalPhaseDurationMaster>;
  // setAppraisalPhaseDurationMasters!: Sequelize.HasManySetAssociationsMixin<AppraisalPhaseDurationMaster, AppraisalPhaseDurationMasterId>;
  // addAppraisalPhaseDurationMaster!: Sequelize.HasManyAddAssociationMixin<AppraisalPhaseDurationMaster, AppraisalPhaseDurationMasterId>;
  // addAppraisalPhaseDurationMasters!: Sequelize.HasManyAddAssociationsMixin<AppraisalPhaseDurationMaster, AppraisalPhaseDurationMasterId>;
  // createAppraisalPhaseDurationMaster!: Sequelize.HasManyCreateAssociationMixin<AppraisalPhaseDurationMaster>;
  // removeAppraisalPhaseDurationMaster!: Sequelize.HasManyRemoveAssociationMixin<AppraisalPhaseDurationMaster, AppraisalPhaseDurationMasterId>;
  // removeAppraisalPhaseDurationMasters!: Sequelize.HasManyRemoveAssociationsMixin<AppraisalPhaseDurationMaster, AppraisalPhaseDurationMasterId>;
  // hasAppraisalPhaseDurationMaster!: Sequelize.HasManyHasAssociationMixin<AppraisalPhaseDurationMaster, AppraisalPhaseDurationMasterId>;
  // hasAppraisalPhaseDurationMasters!: Sequelize.HasManyHasAssociationsMixin<AppraisalPhaseDurationMaster, AppraisalPhaseDurationMasterId>;
  // countAppraisalPhaseDurationMasters!: Sequelize.HasManyCountAssociationsMixin;
  // // AppraisalPhaseMaster hasMany EmployeeAppraisalStatus via AppraisalPhaseId
  // EmployeeAppraisalStatuses!: EmployeeAppraisalStatus[];
  // getEmployeeAppraisalStatuses!: Sequelize.HasManyGetAssociationsMixin<EmployeeAppraisalStatus>;
  // setEmployeeAppraisalStatuses!: Sequelize.HasManySetAssociationsMixin<EmployeeAppraisalStatus, EmployeeAppraisalStatusId>;
  // addEmployeeAppraisalStatus!: Sequelize.HasManyAddAssociationMixin<EmployeeAppraisalStatus, EmployeeAppraisalStatusId>;
  // addEmployeeAppraisalStatuses!: Sequelize.HasManyAddAssociationsMixin<EmployeeAppraisalStatus, EmployeeAppraisalStatusId>;
  // createEmployeeAppraisalStatus!: Sequelize.HasManyCreateAssociationMixin<EmployeeAppraisalStatus>;
  // removeEmployeeAppraisalStatus!: Sequelize.HasManyRemoveAssociationMixin<EmployeeAppraisalStatus, EmployeeAppraisalStatusId>;
  // removeEmployeeAppraisalStatuses!: Sequelize.HasManyRemoveAssociationsMixin<EmployeeAppraisalStatus, EmployeeAppraisalStatusId>;
  // hasEmployeeAppraisalStatus!: Sequelize.HasManyHasAssociationMixin<EmployeeAppraisalStatus, EmployeeAppraisalStatusId>;
  // hasEmployeeAppraisalStatuses!: Sequelize.HasManyHasAssociationsMixin<EmployeeAppraisalStatus, EmployeeAppraisalStatusId>;
  // countEmployeeAppraisalStatuses!: Sequelize.HasManyCountAssociationsMixin;
  // // AppraisalPhaseMaster hasMany EmployeeKRA via AppraisalPhaseDurationId
  // EmployeeKRAs!: EmployeeKRA[];
  // getEmployeeKRAs!: Sequelize.HasManyGetAssociationsMixin<EmployeeKRA>;
  // setEmployeeKRAs!: Sequelize.HasManySetAssociationsMixin<EmployeeKRA, EmployeeKRAId>;
  // addEmployeeKRA!: Sequelize.HasManyAddAssociationMixin<EmployeeKRA, EmployeeKRAId>;
  // addEmployeeKRAs!: Sequelize.HasManyAddAssociationsMixin<EmployeeKRA, EmployeeKRAId>;
  // createEmployeeKRA!: Sequelize.HasManyCreateAssociationMixin<EmployeeKRA>;
  // removeEmployeeKRA!: Sequelize.HasManyRemoveAssociationMixin<EmployeeKRA, EmployeeKRAId>;
  // removeEmployeeKRAs!: Sequelize.HasManyRemoveAssociationsMixin<EmployeeKRA, EmployeeKRAId>;
  // hasEmployeeKRA!: Sequelize.HasManyHasAssociationMixin<EmployeeKRA, EmployeeKRAId>;
  // hasEmployeeKRAs!: Sequelize.HasManyHasAssociationsMixin<EmployeeKRA, EmployeeKRAId>;
  // countEmployeeKRAs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof AppraisalPhaseMaster {
    return AppraisalPhaseMaster.init({
    AppraisalPhaseMasterId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Phase: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AppraisalPhaseMaster',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AppraisalPhaseMaster",
        unique: true,
        fields: [
          { name: "AppraisalPhaseMasterId" },
        ]
      },
    ]
  });
  }
}
