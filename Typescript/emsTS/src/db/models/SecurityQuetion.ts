import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { LoginDetails, LoginDetailsId } from './LoginDetails';

export interface SecurityQuetionAttributes {
  SecurityQuetionId: number;
  Question?: string;
}

export type SecurityQuetionPk = "SecurityQuetionId";
export type SecurityQuetionId = SecurityQuetion[SecurityQuetionPk];
export type SecurityQuetionOptionalAttributes = "Question";
export type SecurityQuetionCreationAttributes = Optional<SecurityQuetionAttributes, SecurityQuetionOptionalAttributes>;

export class SecurityQuetion extends Model<SecurityQuetionAttributes, SecurityQuetionCreationAttributes> implements SecurityQuetionAttributes {
  SecurityQuetionId!: number;
  Question?: string;

  // // SecurityQuetion hasMany LoginDetails via SecurityQuetionId
  // LoginDetails!: LoginDetails[];
  // getLoginDetails!: Sequelize.HasManyGetAssociationsMixin<LoginDetails>;
  // setLoginDetails!: Sequelize.HasManySetAssociationsMixin<LoginDetails, LoginDetailsId>;
  // addLoginDetail!: Sequelize.HasManyAddAssociationMixin<LoginDetails, LoginDetailsId>;
  // addLoginDetails!: Sequelize.HasManyAddAssociationsMixin<LoginDetails, LoginDetailsId>;
  // createLoginDetail!: Sequelize.HasManyCreateAssociationMixin<LoginDetails>;
  // removeLoginDetail!: Sequelize.HasManyRemoveAssociationMixin<LoginDetails, LoginDetailsId>;
  // removeLoginDetails!: Sequelize.HasManyRemoveAssociationsMixin<LoginDetails, LoginDetailsId>;
  // hasLoginDetail!: Sequelize.HasManyHasAssociationMixin<LoginDetails, LoginDetailsId>;
  // hasLoginDetails!: Sequelize.HasManyHasAssociationsMixin<LoginDetails, LoginDetailsId>;
  // countLoginDetails!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof SecurityQuetion {
    return SecurityQuetion.init({
    SecurityQuetionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Question: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SecurityQuetion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SecurityQueMaster",
        unique: true,
        fields: [
          { name: "SecurityQuetionId" },
        ]
      },
    ]
  });
  }
}
