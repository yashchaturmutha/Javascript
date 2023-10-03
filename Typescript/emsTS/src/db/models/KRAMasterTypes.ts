import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { KRAMaster, KRAMasterId } from './KRAMaster';

export interface KRAMasterTypesAttributes {
  KRAMasterTypesId: number;
  Description?: string;
}

export type KRAMasterTypesPk = "KRAMasterTypesId";
export type KRAMasterTypesId = KRAMasterTypes[KRAMasterTypesPk];
export type KRAMasterTypesOptionalAttributes = "KRAMasterTypesId" | "Description";
export type KRAMasterTypesCreationAttributes = Optional<KRAMasterTypesAttributes, KRAMasterTypesOptionalAttributes>;

export class KRAMasterTypes extends Model<KRAMasterTypesAttributes, KRAMasterTypesCreationAttributes> implements KRAMasterTypesAttributes {
  KRAMasterTypesId!: number;
  Description?: string;

  // // KRAMasterTypes hasMany KRAMaster via KRAMasterTypeId
  // KRAMasters!: KRAMaster[];
  // getKRAMasters!: Sequelize.HasManyGetAssociationsMixin<KRAMaster>;
  // setKRAMasters!: Sequelize.HasManySetAssociationsMixin<KRAMaster, KRAMasterId>;
  // addKRAMaster!: Sequelize.HasManyAddAssociationMixin<KRAMaster, KRAMasterId>;
  // addKRAMasters!: Sequelize.HasManyAddAssociationsMixin<KRAMaster, KRAMasterId>;
  // createKRAMaster!: Sequelize.HasManyCreateAssociationMixin<KRAMaster>;
  // removeKRAMaster!: Sequelize.HasManyRemoveAssociationMixin<KRAMaster, KRAMasterId>;
  // removeKRAMasters!: Sequelize.HasManyRemoveAssociationsMixin<KRAMaster, KRAMasterId>;
  // hasKRAMaster!: Sequelize.HasManyHasAssociationMixin<KRAMaster, KRAMasterId>;
  // hasKRAMasters!: Sequelize.HasManyHasAssociationsMixin<KRAMaster, KRAMasterId>;
  // countKRAMasters!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof KRAMasterTypes {
    return KRAMasterTypes.init({
    KRAMasterTypesId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'KRAMasterTypes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_KRAMasterTypes",
        unique: true,
        fields: [
          { name: "KRAMasterTypesId" },
        ]
      },
    ]
  });
  }
}
