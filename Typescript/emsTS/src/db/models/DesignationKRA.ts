import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { DesignationMaster, DesignationMasterId } from './DesignationMaster';
import type { KRAMaster, KRAMasterId } from './KRAMaster';

export interface DesignationKRAAttributes {
  DesignationKRAId: number;
  DesignationId: number;
  KRAMasterId: number;
}

export type DesignationKRAPk = "DesignationKRAId";
export type DesignationKRAId = DesignationKRA[DesignationKRAPk];
export type DesignationKRAOptionalAttributes = "DesignationKRAId";
export type DesignationKRACreationAttributes = Optional<DesignationKRAAttributes, DesignationKRAOptionalAttributes>;

export class DesignationKRA extends Model<DesignationKRAAttributes, DesignationKRACreationAttributes> implements DesignationKRAAttributes {
  DesignationKRAId!: number;
  DesignationId!: number;
  KRAMasterId!: number;

  // // DesignationKRA belongsTo DesignationMaster via DesignationId
  // Designation!: DesignationMaster;
  // getDesignation!: Sequelize.BelongsToGetAssociationMixin<DesignationMaster>;
  // setDesignation!: Sequelize.BelongsToSetAssociationMixin<DesignationMaster, DesignationMasterId>;
  // createDesignation!: Sequelize.BelongsToCreateAssociationMixin<DesignationMaster>;
  // // DesignationKRA belongsTo KRAMaster via KRAMasterId
  // KRAMaster!: KRAMaster;
  // getKRAMaster!: Sequelize.BelongsToGetAssociationMixin<KRAMaster>;
  // setKRAMaster!: Sequelize.BelongsToSetAssociationMixin<KRAMaster, KRAMasterId>;
  // createKRAMaster!: Sequelize.BelongsToCreateAssociationMixin<KRAMaster>;

  static initModel(sequelize: Sequelize.Sequelize): typeof DesignationKRA {
    return DesignationKRA.init({
    DesignationKRAId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DesignationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'DesignationMaster',
        key: 'DesignationMasterId'
      }
    },
    KRAMasterId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'KRAMaster',
        key: 'KRAMasterId'
      }
    }
  }, {
    sequelize,
    tableName: 'DesignationKRA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DesignationKRA",
        unique: true,
        fields: [
          { name: "DesignationKRAId" },
        ]
      },
    ]
  });
  }
}
