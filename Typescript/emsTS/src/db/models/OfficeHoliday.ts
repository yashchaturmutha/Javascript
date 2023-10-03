import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface OfficeHolidayAttributes {
  OfficeHolidayId: number;
  HolidayDate?: string;
  MasterCompanyLocationId?: number;
  HolidayDescription?: string;
}

export type OfficeHolidayOptionalAttributes = "OfficeHolidayId" | "HolidayDate" | "MasterCompanyLocationId" | "HolidayDescription";
export type OfficeHolidayCreationAttributes = Optional<OfficeHolidayAttributes, OfficeHolidayOptionalAttributes>;

export class OfficeHoliday extends Model<OfficeHolidayAttributes, OfficeHolidayCreationAttributes> implements OfficeHolidayAttributes {
  OfficeHolidayId!: number;
  HolidayDate?: string;
  MasterCompanyLocationId?: number;
  HolidayDescription?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof OfficeHoliday {
    return OfficeHoliday.init({
    OfficeHolidayId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    HolidayDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    MasterCompanyLocationId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    HolidayDescription: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OfficeHoliday',
    schema: 'dbo',
    timestamps: false
  });
  }
}
