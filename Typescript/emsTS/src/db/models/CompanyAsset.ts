import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CompanyAssetAttributes {
  CompanyAssetId: number;
  AssetNumber: string;
  AssetDetails: string;
  EmployeeId?: number;
  CurrentAllocated?: number;
  PurchaseDate?: Date;
  Vendor?: string;
  Category?: string;
  WarrantyEndDate?: Date;
  AssetStatus?: string;
}

export type CompanyAssetOptionalAttributes = "CompanyAssetId" | "EmployeeId" | "CurrentAllocated" | "PurchaseDate" | "Vendor" | "Category" | "WarrantyEndDate" | "AssetStatus";
export type CompanyAssetCreationAttributes = Optional<CompanyAssetAttributes, CompanyAssetOptionalAttributes>;

export class CompanyAsset extends Model<CompanyAssetAttributes, CompanyAssetCreationAttributes> implements CompanyAssetAttributes {
  CompanyAssetId!: number;
  AssetNumber!: string;
  AssetDetails!: string;
  EmployeeId?: number;
  CurrentAllocated?: number;
  PurchaseDate?: Date;
  Vendor?: string;
  Category?: string;
  WarrantyEndDate?: Date;
  AssetStatus?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof CompanyAsset {
    return CompanyAsset.init({
    CompanyAssetId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    AssetNumber: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    AssetDetails: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    EmployeeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CurrentAllocated: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PurchaseDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Vendor: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    Category: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    WarrantyEndDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AssetStatus: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CompanyAsset',
    schema: 'dbo',
    timestamps: false
  });
  }
}
