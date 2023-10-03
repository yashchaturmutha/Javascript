import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface MasterGenderAttributes {
  MasterGenderId: number;
  Gender?: string;
}

export type MasterGenderPk = "MasterGenderId";
export type MasterGenderId = MasterGender[MasterGenderPk];
export type MasterGenderOptionalAttributes = "Gender";
export type MasterGenderCreationAttributes = Optional<MasterGenderAttributes, MasterGenderOptionalAttributes>;

export class MasterGender extends Model<MasterGenderAttributes, MasterGenderCreationAttributes> implements MasterGenderAttributes {
  MasterGenderId!: number;
  Gender?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof MasterGender {
    return MasterGender.init({
    MasterGenderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Gender: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MasterGender',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MasterGender",
        unique: true,
        fields: [
          { name: "MasterGenderId" },
        ]
      },
    ]
  });
  }
}
