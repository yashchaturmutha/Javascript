import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface TicketCommentsAttributes {
  TicketCommentsId: number;
  TicketContent: string;
  TicketsId: number;
  EmployeeDetailsId: number;
  CreatedOn: Date;
  CreatedBy: number;
  FileName?: string;
}

export type TicketCommentsPk = "TicketCommentsId";
export type TicketCommentsId = TicketComments[TicketCommentsPk];
export type TicketCommentsOptionalAttributes = "TicketCommentsId" | "FileName";
export type TicketCommentsCreationAttributes = Optional<TicketCommentsAttributes, TicketCommentsOptionalAttributes>;

export class TicketComments extends Model<TicketCommentsAttributes, TicketCommentsCreationAttributes> implements TicketCommentsAttributes {
  TicketCommentsId!: number;
  TicketContent!: string;
  TicketsId!: number;
  EmployeeDetailsId!: number;
  CreatedOn!: Date;
  CreatedBy!: number;
  FileName?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof TicketComments {
    return TicketComments.init({
    TicketCommentsId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TicketContent: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    TicketsId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    EmployeeDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'TicketComments',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TicketComments",
        unique: true,
        fields: [
          { name: "TicketCommentsId" },
        ]
      },
    ]
  });
  }
}
