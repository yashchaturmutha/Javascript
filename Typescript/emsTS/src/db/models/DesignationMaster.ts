import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { CurrentCompanyDetails, CurrentCompanyDetailsId } from './CurrentCompanyDetails';
import type { DesignationKRA, DesignationKRAId } from './DesignationKRA';

export interface DesignationMasterAttributes {
  DesignationMasterId: number;
  Designation?: string;
}

export type DesignationMasterPk = "DesignationMasterId";
export type DesignationMasterId = DesignationMaster[DesignationMasterPk];
export type DesignationMasterOptionalAttributes = "DesignationMasterId" | "Designation";
export type DesignationMasterCreationAttributes = Optional<DesignationMasterAttributes, DesignationMasterOptionalAttributes>;

export class DesignationMaster extends Model<DesignationMasterAttributes, DesignationMasterCreationAttributes> implements DesignationMasterAttributes {
  DesignationMasterId!: number;
  Designation?: string;

  // // DesignationMaster hasMany CurrentCompanyDetails via DesignationMasterId
  // CurrentCompanyDetails!: CurrentCompanyDetails[];
  // getCurrentCompanyDetails!: Sequelize.HasManyGetAssociationsMixin<CurrentCompanyDetails>;
  // setCurrentCompanyDetails!: Sequelize.HasManySetAssociationsMixin<CurrentCompanyDetails, CurrentCompanyDetailsId>;
  // addCurrentCompanyDetail!: Sequelize.HasManyAddAssociationMixin<CurrentCompanyDetails, CurrentCompanyDetailsId>;
  // addCurrentCompanyDetails!: Sequelize.HasManyAddAssociationsMixin<CurrentCompanyDetails, CurrentCompanyDetailsId>;
  // createCurrentCompanyDetail!: Sequelize.HasManyCreateAssociationMixin<CurrentCompanyDetails>;
  // removeCurrentCompanyDetail!: Sequelize.HasManyRemoveAssociationMixin<CurrentCompanyDetails, CurrentCompanyDetailsId>;
  // removeCurrentCompanyDetails!: Sequelize.HasManyRemoveAssociationsMixin<CurrentCompanyDetails, CurrentCompanyDetailsId>;
  // hasCurrentCompanyDetail!: Sequelize.HasManyHasAssociationMixin<CurrentCompanyDetails, CurrentCompanyDetailsId>;
  // hasCurrentCompanyDetails!: Sequelize.HasManyHasAssociationsMixin<CurrentCompanyDetails, CurrentCompanyDetailsId>;
  // countCurrentCompanyDetails!: Sequelize.HasManyCountAssociationsMixin;
  // // DesignationMaster hasMany DesignationKRA via DesignationId
  // DesignationKRAs!: DesignationKRA[];
  // getDesignationKRAs!: Sequelize.HasManyGetAssociationsMixin<DesignationKRA>;
  // setDesignationKRAs!: Sequelize.HasManySetAssociationsMixin<DesignationKRA, DesignationKRAId>;
  // addDesignationKRA!: Sequelize.HasManyAddAssociationMixin<DesignationKRA, DesignationKRAId>;
  // addDesignationKRAs!: Sequelize.HasManyAddAssociationsMixin<DesignationKRA, DesignationKRAId>;
  // createDesignationKRA!: Sequelize.HasManyCreateAssociationMixin<DesignationKRA>;
  // removeDesignationKRA!: Sequelize.HasManyRemoveAssociationMixin<DesignationKRA, DesignationKRAId>;
  // removeDesignationKRAs!: Sequelize.HasManyRemoveAssociationsMixin<DesignationKRA, DesignationKRAId>;
  // hasDesignationKRA!: Sequelize.HasManyHasAssociationMixin<DesignationKRA, DesignationKRAId>;
  // hasDesignationKRAs!: Sequelize.HasManyHasAssociationsMixin<DesignationKRA, DesignationKRAId>;
  // countDesignationKRAs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof DesignationMaster {
    return DesignationMaster.init({
    DesignationMasterId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Designation: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DesignationMaster',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DesignationMaster",
        unique: true,
        fields: [
          { name: "DesignationMasterId" },
        ]
      },
    ]
  });
  }
}
