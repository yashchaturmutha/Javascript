import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DailyAttendanceRegularizeAttributes {
  DailyAttendanceRegularizeId: number;
  FromEmployeeDetailsId?: number;
  In_time?: Date;
  Out_Time?: Date;
  Status?: string;
  RegularizeStatus?: number;
  CreatedOn?: Date;
  UpdatedOn?: Date;
  UpdateBy?: number;
}

export type DailyAttendanceRegularizePk = "DailyAttendanceRegularizeId";
export type DailyAttendanceRegularizeId = DailyAttendanceRegularize[DailyAttendanceRegularizePk];
export type DailyAttendanceRegularizeOptionalAttributes = "DailyAttendanceRegularizeId" | "FromEmployeeDetailsId" | "In_time" | "Out_Time" | "Status" | "RegularizeStatus" | "CreatedOn" | "UpdatedOn" | "UpdateBy";
export type DailyAttendanceRegularizeCreationAttributes = Optional<DailyAttendanceRegularizeAttributes, DailyAttendanceRegularizeOptionalAttributes>;

export class DailyAttendanceRegularize extends Model<DailyAttendanceRegularizeAttributes, DailyAttendanceRegularizeCreationAttributes> implements DailyAttendanceRegularizeAttributes {
  DailyAttendanceRegularizeId!: number;
  FromEmployeeDetailsId?: number;
  In_time?: Date;
  Out_Time?: Date;
  Status?: string;
  RegularizeStatus?: number;
  CreatedOn?: Date;
  UpdatedOn?: Date;
  UpdateBy?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof DailyAttendanceRegularize {
    return DailyAttendanceRegularize.init({
    DailyAttendanceRegularizeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FromEmployeeDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    In_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Out_Time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    RegularizeStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CreatedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UpdatedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UpdateBy: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DailyAttendanceRegularize',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DailyAttendanceRegularize",
        unique: true,
        fields: [
          { name: "DailyAttendanceRegularizeId" },
        ]
      },
    ]
  });
  }
}
