import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ClientAttributes {
  ClientId: number;
  ClientName: string;
  ClientStatus: number;
}

export type ClientsPk = "ClientId";
export type ClientId = Clients[ClientsPk];
export type ClientsOptionalAttributes = "ClientId"| "ClientName";
export type ClientCreationAttributes = Optional<ClientAttributes, ClientsOptionalAttributes>;

export class Clients extends Model<ClientAttributes, ClientCreationAttributes> implements ClientAttributes {
  ClientId!: number;
  ClientStatus!: number;
  ClientName!: string;

  static initModel(sequelize: Sequelize.Sequelize): typeof Clients {
    return Clients.init({
    ClientId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
  
    ClientStatus: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ClientName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
   
  }, {
    sequelize,
    tableName: 'Clients',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Clients",
        unique: true,
        fields: [
          { name: "ClientId" },
        ]
      },
    ]
  });
  }
}
