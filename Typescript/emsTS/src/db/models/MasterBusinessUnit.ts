import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { EmployeeDetails, EmployeeDetailsId } from './EmployeeDetails';

export interface MasterBusinessUnitAttributes {
  MasterBusinessUnitId: number;
  BusinessUnitName: string;
  HeadEmployeeId: number;
}

export type MasterBusinessUnitPk = "MasterBusinessUnitId";
export type MasterBusinessUnitId = MasterBusinessUnit[MasterBusinessUnitPk];
export type MasterBusinessUnitOptionalAttributes = "MasterBusinessUnitId";
export type MasterBusinessUnitCreationAttributes = Optional<MasterBusinessUnitAttributes, MasterBusinessUnitOptionalAttributes>;

export class MasterBusinessUnit extends Model<MasterBusinessUnitAttributes, MasterBusinessUnitCreationAttributes> implements MasterBusinessUnitAttributes {
  MasterBusinessUnitId!: number;
  BusinessUnitName!: string;
  HeadEmployeeId!: number;

  // // MasterBusinessUnit belongsTo EmployeeDetails via HeadEmployeeId
  // HeadEmployee!: EmployeeDetails;
  // getHeadEmployee!: Sequelize.BelongsToGetAssociationMixin<EmployeeDetails>;
  // setHeadEmployee!: Sequelize.BelongsToSetAssociationMixin<EmployeeDetails, EmployeeDetailsId>;
  // createHeadEmployee!: Sequelize.BelongsToCreateAssociationMixin<EmployeeDetails>;

  static initModel(sequelize: Sequelize.Sequelize): typeof MasterBusinessUnit {
    return MasterBusinessUnit.init({
    MasterBusinessUnitId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BusinessUnitName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    HeadEmployeeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'EmployeeDetails',
        key: 'EmployeeDetailsId'
      }
    }
  }, {
    sequelize,
    tableName: 'MasterBusinessUnit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_BusinessUnitMaster",
        unique: true,
        fields: [
          { name: "MasterBusinessUnitId" },
        ]
      },
    ]
  });
  }
}
