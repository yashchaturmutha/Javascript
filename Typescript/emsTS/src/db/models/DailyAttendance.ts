import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DailyAttendanceAttributes {
  AttendanceId: number;
  EmployeeDetailsId?: number;
  In_time?: Date;
  Out_Time?: Date;
  Status?: string;
}

export type DailyAttendancePk = "AttendanceId";
export type DailyAttendanceId = DailyAttendance[DailyAttendancePk];
export type DailyAttendanceOptionalAttributes = "AttendanceId" | "EmployeeDetailsId" | "In_time" | "Out_Time" | "Status";
export type DailyAttendanceCreationAttributes = Optional<DailyAttendanceAttributes, DailyAttendanceOptionalAttributes>;

export class DailyAttendance extends Model<DailyAttendanceAttributes, DailyAttendanceCreationAttributes> implements DailyAttendanceAttributes {
  AttendanceId!: number;
  EmployeeDetailsId?: number;
  In_time?: Date;
  Out_Time?: Date;
  Status?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof DailyAttendance {
    return DailyAttendance.init({
    AttendanceId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmployeeDetailsId: {
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
    }
  }, {
    sequelize,
    tableName: 'DailyAttendance',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DailyAttendance",
        unique: true,
        fields: [
          { name: "AttendanceId" },
        ]
      },
    ]
  });
  }
}
