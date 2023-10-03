import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface MessageDetailsAttributes {
  MessageDetailsID: number;
  Subject: string;
  Message: string;
}

export type MessageDetailsPk = "MessageDetailsID";
export type MessageDetailsId = MessageDetails[MessageDetailsPk];
export type MessageDetailsOptionalAttributes = "MessageDetailsID";
export type MessageDetailsCreationAttributes = Optional<MessageDetailsAttributes, MessageDetailsOptionalAttributes>;

export class MessageDetails extends Model<MessageDetailsAttributes, MessageDetailsCreationAttributes> implements MessageDetailsAttributes {
  MessageDetailsID!: number;
  Subject!: string;
  Message!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof MessageDetails {
    return MessageDetails.init({
    MessageDetailsID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Subject: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Message: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MessageDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MessageDetails",
        unique: true,
        fields: [
          { name: "MessageDetailsID" },
        ]
      },
    ]
  });
  }
}
