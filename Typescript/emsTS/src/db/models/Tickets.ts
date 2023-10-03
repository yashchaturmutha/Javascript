import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TicketsAttributes {
  TicketsId: number;
  TicketSubject: string;
  TicketContent: string;
  TicketStatusesId: number;
  TicketPrioritiesId: number;
  TicketCategoriesId: number;
  EmployeeDetailsId: number;
  CompletedOn?: Date;
  CreatedOn: Date;
  CreatedBy: number;
  FileName?: string;
}

export type TicketsPk = "TicketsId";
export type TicketsId = Tickets[TicketsPk];
export type TicketsOptionalAttributes = "TicketsId" | "CompletedOn" | "FileName";
export type TicketsCreationAttributes = Optional<TicketsAttributes, TicketsOptionalAttributes>;

export class Tickets extends Model<TicketsAttributes, TicketsCreationAttributes> implements TicketsAttributes {
  TicketsId!: number;
  TicketSubject!: string;
  TicketContent!: string;
  TicketStatusesId!: number;
  TicketPrioritiesId!: number;
  TicketCategoriesId!: number;
  EmployeeDetailsId!: number;
  CompletedOn?: Date;
  CreatedOn!: Date;
  CreatedBy!: number;
  FileName?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Tickets {
    return Tickets.init({
    TicketsId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TicketSubject: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    TicketContent: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    TicketStatusesId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TicketPrioritiesId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TicketCategoriesId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EmployeeDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CompletedOn: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreatedOn: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FileName: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Tickets',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Tickets",
        unique: true,
        fields: [
          { name: "TicketsId" },
        ]
      },
    ]
  });
  }
}
