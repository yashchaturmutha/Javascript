import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TicketStatusesAttributes {
  TicketStatusesId: number;
  StatusName: string;
  Color: string;
}

export type TicketStatusesPk = "TicketStatusesId";
export type TicketStatusesId = TicketStatuses[TicketStatusesPk];
export type TicketStatusesOptionalAttributes = "TicketStatusesId";
export type TicketStatusesCreationAttributes = Optional<TicketStatusesAttributes, TicketStatusesOptionalAttributes>;

export class TicketStatuses extends Model<TicketStatusesAttributes, TicketStatusesCreationAttributes> implements TicketStatusesAttributes {
  TicketStatusesId!: number;
  StatusName!: string;
  Color!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof TicketStatuses {
    return TicketStatuses.init({
    TicketStatusesId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StatusName: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    Color: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TicketStatuses',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TicketStatuses",
        unique: true,
        fields: [
          { name: "TicketStatusesId" },
        ]
      },
    ]
  });
  }
}
