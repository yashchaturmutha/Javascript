import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { AppraisalPhaseDurationMaster, AppraisalPhaseDurationMasterId } from './AppraisalPhaseDurationMaster';
import type { EmployeeKRA, EmployeeKRAId } from './EmployeeKRA';

export interface AppraisalDurationMasterAttributes {
  AppraisalDurationMasterId: number;
  StartDate?: Date;
  EndDate?: Date;
}

export type AppraisalDurationMasterPk = "AppraisalDurationMasterId";
export type AppraisalDurationMasterId = AppraisalDurationMaster[AppraisalDurationMasterPk];
export type AppraisalDurationMasterOptionalAttributes = "AppraisalDurationMasterId" | "StartDate" | "EndDate";
export type AppraisalDurationMasterCreationAttributes = Optional<AppraisalDurationMasterAttributes, AppraisalDurationMasterOptionalAttributes>;

export class AppraisalDurationMaster extends Model<AppraisalDurationMasterAttributes, AppraisalDurationMasterCreationAttributes> implements AppraisalDurationMasterAttributes {
  AppraisalDurationMasterId!: number;
  StartDate?: Date;
  EndDate?: Date;

  // AppraisalDurationMaster hasMany AppraisalPhaseDurationMaster via AppraisalDurationId
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
  // // AppraisalDurationMaster hasMany EmployeeKRA via AppraisalDurationId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof AppraisalDurationMaster {
    return AppraisalDurationMaster.init({
      AppraisalDurationMasterId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
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
      tableName: 'AppraisalDurationMaster',
      schema: 'dbo',
      timestamps: false,
      indexes: [
        {
          name: "PK_AppraisalDurationMaster",
          unique: true,
          fields: [
            { name: "AppraisalDurationMasterId" },
          ]
        },
      ]
    });
  }
}
