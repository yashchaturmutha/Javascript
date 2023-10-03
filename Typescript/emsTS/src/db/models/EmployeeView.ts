import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface EmployeeViewAttributes {
  EmployeeDetailsId: number;
  EmployeeCodeId?: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  MasterGenderId?: number;
  DOB?: string;
  MobileNo?: string;
  LandlineNo?: string;
  EmailId?: string;
  CurrentAddress?: string;
  ResidentialAddress?: string;
  PassportNo?: string;
  PassportValidity?: string;
  BloodGroup?: string;
  Photo?: any;
  Image?: string;
  EmpStatus?: number;
  CompanyEmailAddress?: string;
  Location?: string;
  MasterCompanyLocationId?: number;
  CurrentCompanyDetailsId: number;
  CurrentCTC: number;
  JoiningDate: string;
  DepartmentMasterId: number;
  DesignationMasterId: number;
  NextRaiseDate?: string;
  ReleaseDate?: string;
  ExperienceSkills?: string;
  OtherSkills?: string;
  YearsOfExperience?: number;
  YearsOfExperienceDate?: string;
  Certifications?: string;
  ResumeFileName?: string;
  MasterBusinessUnitId?: number;
  EmployeeTypeId?: number;
  EmployeeTypeName: string;
  BusinessUnitName: string;
  HeadEmployeeId: number;
  DepartmentName: string;
  Designation?: string;
  EmployeeCodeIdBu?: string;
  FirstNameBu: string;
  MiddleNameBu: string;
  LastNameBu: string;
  CompanyEmailAddressBu?: string;
  LocationBu?: string;
  LocationName?: string;
  LocationNameBu?: string;
}

export type EmployeeViewPk = "EmployeeDetailsId";
export type EmployeeViewId = EmployeeView[EmployeeViewPk];
export type EmployeeViewOptionalAttributes = "EmployeeDetailsId"|"EmployeeCodeId" | "MasterGenderId" | "DOB" | "MobileNo" | "LandlineNo" | "EmailId" | "CurrentAddress" | "ResidentialAddress" | "PassportNo" | "PassportValidity" | "BloodGroup" | "Photo" | "Image" | "EmpStatus" | "CompanyEmailAddress" | "Location" | "MasterCompanyLocationId" | "NextRaiseDate" | "ReleaseDate" | "ExperienceSkills" | "OtherSkills" | "YearsOfExperience" | "YearsOfExperienceDate" | "Certifications" | "ResumeFileName" | "MasterBusinessUnitId" | "EmployeeTypeId" | "Designation" | "EmployeeCodeIdBu" | "CompanyEmailAddressBu" | "LocationBu" | "LocationName" | "LocationNameBu";
export type EmployeeViewCreationAttributes = Optional<EmployeeViewAttributes, EmployeeViewOptionalAttributes>;

export class EmployeeView extends Model<EmployeeViewAttributes, EmployeeViewCreationAttributes> implements EmployeeViewAttributes {
  EmployeeDetailsId!: number;
  EmployeeCodeId?: string;
  FirstName!: string;
  MiddleName!: string;
  LastName!: string;
  MasterGenderId?: number;
  DOB?: string;
  MobileNo?: string;
  LandlineNo?: string;
  EmailId?: string;
  CurrentAddress?: string;
  ResidentialAddress?: string;
  PassportNo?: string;
  PassportValidity?: string;
  BloodGroup?: string;
  Photo?: any;
  Image?: string;
  EmpStatus?: number;
  CompanyEmailAddress?: string;
  Location?: string;
  MasterCompanyLocationId?: number;
  CurrentCompanyDetailsId!: number;
  CurrentCTC!: number;
  JoiningDate!: string;
  DepartmentMasterId!: number;
  DesignationMasterId!: number;
  NextRaiseDate?: string;
  ReleaseDate?: string;
  ExperienceSkills?: string;
  OtherSkills?: string;
  YearsOfExperience?: number;
  YearsOfExperienceDate?: string;
  Certifications?: string;
  ResumeFileName?: string;
  MasterBusinessUnitId?: number;
  EmployeeTypeId?: number;
  EmployeeTypeName!: string;
  BusinessUnitName!: string;
  HeadEmployeeId!: number;
  DepartmentName!: string;
  Designation?: string;
  EmployeeCodeIdBu?: string;
  FirstNameBu!: string;
  MiddleNameBu!: string;
  LastNameBu!: string;
  CompanyEmailAddressBu?: string;
  LocationBu?: string;
  LocationName?: string;
  LocationNameBu?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof EmployeeView {
    return EmployeeView.init({
    EmployeeDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EmployeeCodeId: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FirstName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    MiddleName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    MasterGenderId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DOB: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    MobileNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    LandlineNo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EmailId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CurrentAddress: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ResidentialAddress: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    PassportNo: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PassportValidity: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    BloodGroup: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Photo: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    Image: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    EmpStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CompanyEmailAddress: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Location: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MasterCompanyLocationId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CurrentCompanyDetailsId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CurrentCTC: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    JoiningDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    DepartmentMasterId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DesignationMasterId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    NextRaiseDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ReleaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ExperienceSkills: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OtherSkills: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    YearsOfExperience: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    YearsOfExperienceDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Certifications: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ResumeFileName: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    MasterBusinessUnitId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EmployeeTypeId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    EmployeeTypeName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BusinessUnitName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    HeadEmployeeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DepartmentName: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    Designation: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    EmployeeCodeIdBu: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FirstNameBu: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    MiddleNameBu: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    LastNameBu: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CompanyEmailAddressBu: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    LocationBu: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LocationName: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LocationNameBu: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EmployeeView',
    schema: 'dbo',
    timestamps: false
  });
  }
}
