import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DesignationKRA, DesignationKRAId } from './DesignationKRA';
import type { EmployeeKRA, EmployeeKRAId } from './EmployeeKRA';
import type { KRAMasterTypes, KRAMasterTypesId } from './KRAMasterTypes';

export interface KRAMasterAttributes {
  KRAMasterId: number;
  Description?: string;
  KRAMasterTypeId?: number;
}

export type KRAMasterPk = "KRAMasterId";
export type KRAMasterId = KRAMaster[KRAMasterPk];
export type KRAMasterOptionalAttributes = "KRAMasterId" | "Description" | "KRAMasterTypeId";
export type KRAMasterCreationAttributes = Optional<KRAMasterAttributes, KRAMasterOptionalAttributes>;

export class KRAMaster extends Model<KRAMasterAttributes, KRAMasterCreationAttributes> implements KRAMasterAttributes {
  KRAMasterId!: number;
  Description?: string;
  KRAMasterTypeId?: number;

  // // KRAMaster hasMany DesignationKRA via KRAMasterId
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
  // // KRAMaster hasMany EmployeeKRA via KRAMasterId
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
  // // KRAMaster belongsTo KRAMasterTypes via KRAMasterTypeId
  // KRAMasterType!: KRAMasterTypes;
  // getKRAMasterType!: Sequelize.BelongsToGetAssociationMixin<KRAMasterTypes>;
  // setKRAMasterType!: Sequelize.BelongsToSetAssociationMixin<KRAMasterTypes, KRAMasterTypesId>;
  // createKRAMasterType!: Sequelize.BelongsToCreateAssociationMixin<KRAMasterTypes>;

  static initModel(sequelize: Sequelize.Sequelize): typeof KRAMaster {
    return KRAMaster.init({
    KRAMasterId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    KRAMasterTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'KRAMasterTypes',
        key: 'KRAMasterTypesId'
      }
    }
  }, {
    sequelize,
    tableName: 'KRAMaster',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_KRAMaster_1",
        unique: true,
        fields: [
          { name: "KRAMasterId" },
        ]
      },
    ]
  });
  }
}
