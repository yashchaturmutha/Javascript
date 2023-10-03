import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DesignationKRACountAttributes {
  DesignationKRACountId: number;
  DesignationId: number;
  MinimumKRACount: number;
  MinimumSkillsCount: number;
}

export type DesignationKRACountPk = "DesignationKRACountId";
export type DesignationKRACountId = DesignationKRACount[DesignationKRACountPk];
export type DesignationKRACountOptionalAttributes = "DesignationKRACountId";
export type DesignationKRACountCreationAttributes = Optional<DesignationKRACountAttributes, DesignationKRACountOptionalAttributes>;

export class DesignationKRACount extends Model<DesignationKRACountAttributes, DesignationKRACountCreationAttributes> implements DesignationKRACountAttributes {
  DesignationKRACountId!: number;
  DesignationId!: number;
  MinimumKRACount!: number;
  MinimumSkillsCount!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof DesignationKRACount {
    return DesignationKRACount.init({
    DesignationKRACountId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DesignationId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MinimumKRACount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MinimumSkillsCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'DesignationKRACount',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DesignationKRACount",
        unique: true,
        fields: [
          { name: "DesignationKRACountId" },
        ]
      },
    ]
  });
  }
}
