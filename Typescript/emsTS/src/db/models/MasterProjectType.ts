import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface MasterProjectTypeAttributes {
  MasterProjectTypeId: number;
  ProjectTypeName: string;
}

export type MasterProjectTypePk = "MasterProjectTypeId";
export type MasterProjectTypeId = MasterProjectType[MasterProjectTypePk];
export type MasterProjectTypeOptionalAttributes = "MasterProjectTypeId";
export type MasterProjectTypeCreationAttributes = Optional<MasterProjectTypeAttributes, MasterProjectTypeOptionalAttributes>;

export class MasterProjectType extends Model<MasterProjectTypeAttributes, MasterProjectTypeCreationAttributes> implements MasterProjectTypeAttributes {
  MasterProjectTypeId!: number;
  ProjectTypeName!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof MasterProjectType {
    return MasterProjectType.init({
    MasterProjectTypeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ProjectTypeName: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MasterProjectType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MasterProjectType",
        unique: true,
        fields: [
          { name: "MasterProjectTypeId" },
        ]
      },
    ]
  });
  }
}
