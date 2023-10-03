import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import { EmployeeDetailsModel } from './init-models';
// import type { EmployeeDetails, EmployeeDetailsId } from './EmployeeDetails';
// import type { EmployeeRole, EmployeeRoleId } from './EmployeeRole';
// import type { SecurityQuetion, SecurityQuetionId } from './SecurityQuetion';

export interface LoginDetailsAttributes {
  LoginDetailsId: number;
  EmployeeDetailsId: number;
  UserName: string;
  UserPassword: string;
  EmployeeRoleId: number;
  SecurityQuetionId?: number;
  Answer?: string;
  UserPasswordNew?: string;
  EmployeeDetail?: EmployeeDetailsModel;
}

export type LoginDetailsPk = "LoginDetailsId";
export type LoginDetailsId = LoginDetails[LoginDetailsPk];
export type LoginDetailsOptionalAttributes = "LoginDetailsId" | "SecurityQuetionId" | "Answer" | "UserPasswordNew";
export type LoginDetailsCreationAttributes = Optional<LoginDetailsAttributes, LoginDetailsOptionalAttributes>;

export class LoginDetails extends Model<LoginDetailsAttributes, LoginDetailsCreationAttributes> implements LoginDetailsAttributes {
  LoginDetailsId!: number;
  EmployeeDetailsId!: number;
  UserName!: string;
  UserPassword!: string;
  EmployeeRoleId!: number;
  SecurityQuetionId?: number;
  Answer?: string;
  UserPasswordNew?: string;

  // // LoginDetails belongsTo EmployeeDetails via EmployeeDetailsId
  // EmployeeDetail!: EmployeeDetails;
  // getEmployeeDetail!: Sequelize.BelongsToGetAssociationMixin<EmployeeDetails>;
  // setEmployeeDetail!: Sequelize.BelongsToSetAssociationMixin<EmployeeDetails, EmployeeDetailsId>;
  // createEmployeeDetail!: Sequelize.BelongsToCreateAssociationMixin<EmployeeDetails>;
  // // LoginDetails belongsTo EmployeeRole via EmployeeRoleId
  // EmployeeRole!: EmployeeRole;
  // getEmployeeRole!: Sequelize.BelongsToGetAssociationMixin<EmployeeRole>;
  // setEmployeeRole!: Sequelize.BelongsToSetAssociationMixin<EmployeeRole, EmployeeRoleId>;
  // createEmployeeRole!: Sequelize.BelongsToCreateAssociationMixin<EmployeeRole>;
  // // LoginDetails belongsTo SecurityQuetion via SecurityQuetionId
  // SecurityQuetion!: SecurityQuetion;
  // getSecurityQuetion!: Sequelize.BelongsToGetAssociationMixin<SecurityQuetion>;
  // setSecurityQuetion!: Sequelize.BelongsToSetAssociationMixin<SecurityQuetion, SecurityQuetionId>;
  // createSecurityQuetion!: Sequelize.BelongsToCreateAssociationMixin<SecurityQuetion>;

  static initModel(sequelize: Sequelize.Sequelize): typeof LoginDetails {
    return LoginDetails.init({
    LoginDetailsId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmployeeDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EmployeeDetails',
        key: 'EmployeeDetailsId'
      }
    },
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    UserPassword: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    EmployeeRoleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EmployeeRole',
        key: 'EmployeeRoleId'
      }
    },
    SecurityQuetionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SecurityQuetion',
        key: 'SecurityQuetionId'
      }
    },
    Answer: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    UserPasswordNew: {
      type: DataTypes.STRING(512),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LoginDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IX_LoginDetails",
        unique: true,
        fields: [
          { name: "UserName" },
        ]
      },
      {
        name: "PK_LoginDetails",
        unique: true,
        fields: [
          { name: "LoginDetailsId" },
        ]
      },
    ]
  });
  }
}
