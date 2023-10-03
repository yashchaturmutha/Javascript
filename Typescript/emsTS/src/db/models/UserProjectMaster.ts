import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UserProjectMasterAttributes {
  UserProjectMasterId: number;
  EmployeeDetailsId?: number;
  CompanyProjectId?: number;
  ReportToEmployeeId?: number;
  LastProjectRemark?: string;
  AssignedDate?: string;
  UnAssignedDate?: string;
  IsBillable?: number;
  RateType?: number;
  Rate?: string;
  SOWMasterId?: number;
  Utilization?: number;
}

export type UserProjectMasterPk = "UserProjectMasterId";
export type UserProjectMasterId = UserProjectMaster[UserProjectMasterPk];
export type UserProjectMasterOptionalAttributes = "UserProjectMasterId" | "EmployeeDetailsId" | "CompanyProjectId" | "ReportToEmployeeId" | "LastProjectRemark" | "AssignedDate" | "UnAssignedDate" | "IsBillable" | "RateType" | "Rate" | "SOWMasterId" | "Utilization";
export type UserProjectMasterCreationAttributes = Optional<UserProjectMasterAttributes, 
UserProjectMasterOptionalAttributes>;

export class UserProjectMaster extends Model<UserProjectMasterAttributes, UserProjectMasterCreationAttributes> implements UserProjectMasterAttributes {
  UserProjectMasterId!: number;
  EmployeeDetailsId?: number;
  CompanyProjectId?: number;
  ReportToEmployeeId?: number;
  LastProjectRemark?: string;
  AssignedDate?: string;
  UnAssignedDate?: string;
  IsBillable?: number;
  RateType?: number;
  Rate?: string;
  SOWMasterId!: number;
  Utilization?: number;

  static initModel(sequelize: Sequelize.Sequelize): typeof UserProjectMaster {
    return UserProjectMaster.init({
      UserProjectMasterId: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      EmployeeDetailsId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      CompanyProjectId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      ReportToEmployeeId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      LastProjectRemark: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      AssignedDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      UnAssignedDate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      IsBillable: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      RateType: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      Rate: {
        type: DataTypes.STRING(512),
        allowNull: true
      },
      SOWMasterId: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      Utilization: {
        type: DataTypes.INTEGER,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'UserProjectMaster',
      schema: 'dbo',
      timestamps: false,
      indexes: [
        {
          name: "PK_UserProjectMaster",
          unique: true,
          fields: [
            { name: "UserProjectMasterId" },
          ]
        },
      ]
    });
  }
}
