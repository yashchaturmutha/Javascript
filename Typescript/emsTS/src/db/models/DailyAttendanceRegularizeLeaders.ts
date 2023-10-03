import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DailyAttendanceRegularizeLeadersAttributes {
  DailyAttendanceRegularizeLeadersId: number;
  DailyAttendanceRegularizeId: number;
  ToEmployeeDetailsId?: number;
}

export type DailyAttendanceRegularizeLeadersPk = "DailyAttendanceRegularizeLeadersId";
export type DailyAttendanceRegularizeLeadersId = DailyAttendanceRegularizeLeaders[DailyAttendanceRegularizeLeadersPk];
export type DailyAttendanceRegularizeLeadersOptionalAttributes = "DailyAttendanceRegularizeLeadersId" | "ToEmployeeDetailsId";
export type DailyAttendanceRegularizeLeadersCreationAttributes = Optional<DailyAttendanceRegularizeLeadersAttributes, DailyAttendanceRegularizeLeadersOptionalAttributes>;

export class DailyAttendanceRegularizeLeaders extends Model<DailyAttendanceRegularizeLeadersAttributes, DailyAttendanceRegularizeLeadersCreationAttributes> implements DailyAttendanceRegularizeLeadersAttributes {
  DailyAttendanceRegularizeLeadersId!: number;
  DailyAttendanceRegularizeId!: number;
  ToEmployeeDetailsId?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof DailyAttendanceRegularizeLeaders {
    return DailyAttendanceRegularizeLeaders.init({
    DailyAttendanceRegularizeLeadersId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DailyAttendanceRegularizeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ToEmployeeDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DailyAttendanceRegularizeLeaders',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DailyAttendanceRegularizeLeaders",
        unique: true,
        fields: [
          { name: "DailyAttendanceRegularizeLeadersId" },
        ]
      },
    ]
  });
  }
}
