import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TicketPrioritiesAttributes {
  TicketPrioritiesId: number;
  PrioritiesName: string;
  Color: string;
}

export type TicketPrioritiesPk = "TicketPrioritiesId";
export type TicketPrioritiesId = TicketPriorities[TicketPrioritiesPk];
export type TicketPrioritiesOptionalAttributes = "TicketPrioritiesId";
export type TicketPrioritiesCreationAttributes = Optional<TicketPrioritiesAttributes, TicketPrioritiesOptionalAttributes>;

export class TicketPriorities extends Model<TicketPrioritiesAttributes, TicketPrioritiesCreationAttributes> implements TicketPrioritiesAttributes {
  TicketPrioritiesId!: number;
  PrioritiesName!: string;
  Color!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof TicketPriorities {
    return TicketPriorities.init({
    TicketPrioritiesId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PrioritiesName: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    Color: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TicketPriorities',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TicketPriorities",
        unique: true,
        fields: [
          { name: "TicketPrioritiesId" },
        ]
      },
    ]
  });
  }
}
