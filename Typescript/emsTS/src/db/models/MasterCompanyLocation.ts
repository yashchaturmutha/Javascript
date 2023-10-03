import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface MasterCompanyLocationAttributes {
  MasterCompanyLocationId: number;
  City?: string;
  Country?: string;
  IsActive?: number;
  Name?: string;
}

export type MasterCompanyLocationPk = "MasterCompanyLocationId";
export type MasterCompanyLocationId = MasterCompanyLocation[MasterCompanyLocationPk];
export type MasterCompanyLocationOptionalAttributes = "MasterCompanyLocationId" | "City" | "Country" | "IsActive" | "Name";
export type MasterCompanyLocationCreationAttributes = Optional<MasterCompanyLocationAttributes, MasterCompanyLocationOptionalAttributes>;

export class MasterCompanyLocation extends Model<MasterCompanyLocationAttributes, MasterCompanyLocationCreationAttributes> implements MasterCompanyLocationAttributes {
  MasterCompanyLocationId!: number;
  City?: string;
  Country?: string;
  IsActive?: number;
  Name?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof MasterCompanyLocation {
    return MasterCompanyLocation.init({
    MasterCompanyLocationId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    City: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IsActive: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MasterCompanyLocation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MasterCompanyLocation",
        unique: true,
        fields: [
          { name: "MasterCompanyLocationId" },
        ]
      },
    ]
  });
  }
}
