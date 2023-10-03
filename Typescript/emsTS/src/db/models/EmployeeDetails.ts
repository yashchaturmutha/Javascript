import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
// import type { BankDetails, BankDetailsId } from './BankDetails';
// import type { BikeCarDetails, BikeCarDetailsId } from './BikeCarDetails';
// import type { CurrentCompanyDetails, CurrentCompanyDetailsId } from './CurrentCompanyDetails';
// import type { EducationalDetails, EducationalDetailsId } from './EducationalDetails';
// import type { EmergencyDetails, EmergencyDetailsId } from './EmergencyDetails';
// import type { EmployeeAppraisalStatus, EmployeeAppraisalStatusId } from './EmployeeAppraisalStatus';
// import type { EmployeeKRA, EmployeeKRAId } from './EmployeeKRA';
// import type { EmployeeManager, EmployeeManagerId } from './EmployeeManager';
// import type { LoginDetails, LoginDetailsId } from './LoginDetails';
// import type { MasterBusinessUnit, MasterBusinessUnitId } from './MasterBusinessUnit';
// import type { PreviousCompanyDetails, PreviousCompanyDetailsId } from './PreviousCompanyDetails';

export interface EmployeeDetailsAttributes {
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
}

export type EmployeeDetailsPk = "EmployeeDetailsId";
export type EmployeeDetailsId = EmployeeDetails[EmployeeDetailsPk];
export type EmployeeDetailsOptionalAttributes = "EmployeeDetailsId" | "EmployeeCodeId" | "MasterGenderId" | "DOB" | "MobileNo" | "LandlineNo" | "EmailId" | "CurrentAddress" | "ResidentialAddress" | "PassportNo" | "PassportValidity" | "BloodGroup" | "Photo" | "Image" | "EmpStatus" | "CompanyEmailAddress" | "Location";
export type EmployeeDetailsCreationAttributes = Optional<EmployeeDetailsAttributes, EmployeeDetailsOptionalAttributes>;

export class EmployeeDetails extends Model<EmployeeDetailsAttributes, EmployeeDetailsCreationAttributes> implements EmployeeDetailsAttributes {
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

  // EmployeeDetails hasMany BankDetails via EmployeeDetailsId
  // BankDetails!: BankDetails[];
  // getBankDetails!: Sequelize.HasManyGetAssociationsMixin<BankDetails>;
  // setBankDetails!: Sequelize.HasManySetAssociationsMixin<BankDetails, BankDetailsId>;
  // addBankDetail!: Sequelize.HasManyAddAssociationMixin<BankDetails, BankDetailsId>;
  // addBankDetails!: Sequelize.HasManyAddAssociationsMixin<BankDetails, BankDetailsId>;
  // createBankDetail!: Sequelize.HasManyCreateAssociationMixin<BankDetails>;
  // removeBankDetail!: Sequelize.HasManyRemoveAssociationMixin<BankDetails, BankDetailsId>;
  // removeBankDetails!: Sequelize.HasManyRemoveAssociationsMixin<BankDetails, BankDetailsId>;
  // hasBankDetail!: Sequelize.HasManyHasAssociationMixin<BankDetails, BankDetailsId>;
  // hasBankDetails!: Sequelize.HasManyHasAssociationsMixin<BankDetails, BankDetailsId>;
  // countBankDetails!: Sequelize.HasManyCountAssociationsMixin;
  // // EmployeeDetails hasMany BikeCarDetails via EmployeeDetailsId
  // BikeCarDetails!: BikeCarDetails[];
  // getBikeCarDetails!: Sequelize.HasManyGetAssociationsMixin<BikeCarDetails>;
  // setBikeCarDetails!: Sequelize.HasManySetAssociationsMixin<BikeCarDetails, BikeCarDetailsId>;
  // addBikeCarDetail!: Sequelize.HasManyAddAssociationMixin<BikeCarDetails, BikeCarDetailsId>;
  // addBikeCarDetails!: Sequelize.HasManyAddAssociationsMixin<BikeCarDetails, BikeCarDetailsId>;
  // createBikeCarDetail!: Sequelize.HasManyCreateAssociationMixin<BikeCarDetails>;
  // removeBikeCarDetail!: Sequelize.HasManyRemoveAssociationMixin<BikeCarDetails, BikeCarDetailsId>;
  // removeBikeCarDetails!: Sequelize.HasManyRemoveAssociationsMixin<BikeCarDetails, BikeCarDetailsId>;
  // hasBikeCarDetail!: Sequelize.HasManyHasAssociationMixin<BikeCarDetails, BikeCarDetailsId>;
  // hasBikeCarDetails!: Sequelize.HasManyHasAssociationsMixin<BikeCarDetails, BikeCarDetailsId>;
  // countBikeCarDetails!: Sequelize.HasManyCountAssociationsMixin;
  // // EmployeeDetails hasMany CurrentCompanyDetails via EmployeeDetailsId
  // CurrentCompanyDetails!: CurrentCompanyDetails[];
  // getCurrentCompanyDetails!: Sequelize.HasManyGetAssociationsMixin<CurrentCompanyDetails>;
  // setCurrentCompanyDetails!: Sequelize.HasManySetAssociationsMixin<CurrentCompanyDetails, CurrentCompanyDetailsId>;
  // addCurrentCompanyDetail!: Sequelize.HasManyAddAssociationMixin<CurrentCompanyDetails, CurrentCompanyDetailsId>;
  // addCurrentCompanyDetails!: Sequelize.HasManyAddAssociationsMixin<CurrentCompanyDetails, CurrentCompanyDetailsId>;
  // createCurrentCompanyDetail!: Sequelize.HasManyCreateAssociationMixin<CurrentCompanyDetails>;
  // removeCurrentCompanyDetail!: Sequelize.HasManyRemoveAssociationMixin<CurrentCompanyDetails, CurrentCompanyDetailsId>;
  // removeCurrentCompanyDetails!: Sequelize.HasManyRemoveAssociationsMixin<CurrentCompanyDetails, CurrentCompanyDetailsId>;
  // hasCurrentCompanyDetail!: Sequelize.HasManyHasAssociationMixin<CurrentCompanyDetails, CurrentCompanyDetailsId>;
  // hasCurrentCompanyDetails!: Sequelize.HasManyHasAssociationsMixin<CurrentCompanyDetails, CurrentCompanyDetailsId>;
  // countCurrentCompanyDetails!: Sequelize.HasManyCountAssociationsMixin;
  // // EmployeeDetails hasMany EducationalDetails via EmployeeDetailsId
  // EducationalDetails!: EducationalDetails[];
  // getEducationalDetails!: Sequelize.HasManyGetAssociationsMixin<EducationalDetails>;
  // setEducationalDetails!: Sequelize.HasManySetAssociationsMixin<EducationalDetails, EducationalDetailsId>;
  // addEducationalDetail!: Sequelize.HasManyAddAssociationMixin<EducationalDetails, EducationalDetailsId>;
  // addEducationalDetails!: Sequelize.HasManyAddAssociationsMixin<EducationalDetails, EducationalDetailsId>;
  // createEducationalDetail!: Sequelize.HasManyCreateAssociationMixin<EducationalDetails>;
  // removeEducationalDetail!: Sequelize.HasManyRemoveAssociationMixin<EducationalDetails, EducationalDetailsId>;
  // removeEducationalDetails!: Sequelize.HasManyRemoveAssociationsMixin<EducationalDetails, EducationalDetailsId>;
  // hasEducationalDetail!: Sequelize.HasManyHasAssociationMixin<EducationalDetails, EducationalDetailsId>;
  // hasEducationalDetails!: Sequelize.HasManyHasAssociationsMixin<EducationalDetails, EducationalDetailsId>;
  // countEducationalDetails!: Sequelize.HasManyCountAssociationsMixin;
  // // EmployeeDetails hasMany EmergencyDetails via EmployeeDetailsId
  // EmergencyDetails!: EmergencyDetails[];
  // getEmergencyDetails!: Sequelize.HasManyGetAssociationsMixin<EmergencyDetails>;
  // setEmergencyDetails!: Sequelize.HasManySetAssociationsMixin<EmergencyDetails, EmergencyDetailsId>;
  // addEmergencyDetail!: Sequelize.HasManyAddAssociationMixin<EmergencyDetails, EmergencyDetailsId>;
  // addEmergencyDetails!: Sequelize.HasManyAddAssociationsMixin<EmergencyDetails, EmergencyDetailsId>;
  // createEmergencyDetail!: Sequelize.HasManyCreateAssociationMixin<EmergencyDetails>;
  // removeEmergencyDetail!: Sequelize.HasManyRemoveAssociationMixin<EmergencyDetails, EmergencyDetailsId>;
  // removeEmergencyDetails!: Sequelize.HasManyRemoveAssociationsMixin<EmergencyDetails, EmergencyDetailsId>;
  // hasEmergencyDetail!: Sequelize.HasManyHasAssociationMixin<EmergencyDetails, EmergencyDetailsId>;
  // hasEmergencyDetails!: Sequelize.HasManyHasAssociationsMixin<EmergencyDetails, EmergencyDetailsId>;
  // countEmergencyDetails!: Sequelize.HasManyCountAssociationsMixin;
  // // EmployeeDetails hasMany EmployeeAppraisalStatus via EmployeeDetailsId
  // EmployeeAppraisalStatuses!: EmployeeAppraisalStatus[];
  // getEmployeeAppraisalStatuses!: Sequelize.HasManyGetAssociationsMixin<EmployeeAppraisalStatus>;
  // setEmployeeAppraisalStatuses!: Sequelize.HasManySetAssociationsMixin<EmployeeAppraisalStatus, EmployeeAppraisalStatusId>;
  // addEmployeeAppraisalStatus!: Sequelize.HasManyAddAssociationMixin<EmployeeAppraisalStatus, EmployeeAppraisalStatusId>;
  // addEmployeeAppraisalStatuses!: Sequelize.HasManyAddAssociationsMixin<EmployeeAppraisalStatus, EmployeeAppraisalStatusId>;
  // createEmployeeAppraisalStatus!: Sequelize.HasManyCreateAssociationMixin<EmployeeAppraisalStatus>;
  // removeEmployeeAppraisalStatus!: Sequelize.HasManyRemoveAssociationMixin<EmployeeAppraisalStatus, EmployeeAppraisalStatusId>;
  // removeEmployeeAppraisalStatuses!: Sequelize.HasManyRemoveAssociationsMixin<EmployeeAppraisalStatus, EmployeeAppraisalStatusId>;
  // hasEmployeeAppraisalStatus!: Sequelize.HasManyHasAssociationMixin<EmployeeAppraisalStatus, EmployeeAppraisalStatusId>;
  // hasEmployeeAppraisalStatuses!: Sequelize.HasManyHasAssociationsMixin<EmployeeAppraisalStatus, EmployeeAppraisalStatusId>;
  // countEmployeeAppraisalStatuses!: Sequelize.HasManyCountAssociationsMixin;
  // // EmployeeDetails hasMany EmployeeKRA via EmaployeedetailsId
  // EmployeeKRAs!: EmployeeKRA[];
  // getEmployeeKRAs!: Sequelize.HasManyGetAssociationsMixin<EmployeeKRA>;
  // setEmployeeKRAs!: Sequelize.HasManySetAssociationsMixin<EmployeeKRA, EmployeeKRAId>;
  // addEmployeeKRA!: Sequelize.HasManyAddAssociationMixin<EmployeeKRA, EmployeeKRAId>;
  // addEmployeeKRAs!: Sequelize.HasManyAddAssociationsMixin<EmployeeKRA, EmployeeKRAId>;
  // createEmployeeKRA!: Sequelize.HasManyCreateAssociationMixin<EmployeeKRA>;
  // removeEmployeeKRA!: Sequelize.HasManyRemoveAssociationMixin<EmployeeKRA, EmployeeKRAId>;
  // removeEmployeeKRAs!: Sequelize.HasManyRemoveAssociationsMixin<EmployeeKRA, EmployeeKRAId>;
  // hasEmployeeKRA!: Sequelize.HasManyHasAssociationMixin<EmployeeKRA, EmployeeKRAId>;
  // hasEmployeeKRAs!: Sequelize.HasManyHasAssociationsMixin<EmployeeKRA, EmployeeKRAId>;
  // countEmployeeKRAs!: Sequelize.HasManyCountAssociationsMixin;
  // // EmployeeDetails hasMany EmployeeManager via EmployeeDetailsID
  // EmployeeManagers!: EmployeeManager[];
  // getEmployeeManagers!: Sequelize.HasManyGetAssociationsMixin<EmployeeManager>;
  // setEmployeeManagers!: Sequelize.HasManySetAssociationsMixin<EmployeeManager, EmployeeManagerId>;
  // addEmployeeManager!: Sequelize.HasManyAddAssociationMixin<EmployeeManager, EmployeeManagerId>;
  // addEmployeeManagers!: Sequelize.HasManyAddAssociationsMixin<EmployeeManager, EmployeeManagerId>;
  // createEmployeeManager!: Sequelize.HasManyCreateAssociationMixin<EmployeeManager>;
  // removeEmployeeManager!: Sequelize.HasManyRemoveAssociationMixin<EmployeeManager, EmployeeManagerId>;
  // removeEmployeeManagers!: Sequelize.HasManyRemoveAssociationsMixin<EmployeeManager, EmployeeManagerId>;
  // hasEmployeeManager!: Sequelize.HasManyHasAssociationMixin<EmployeeManager, EmployeeManagerId>;
  // hasEmployeeManagers!: Sequelize.HasManyHasAssociationsMixin<EmployeeManager, EmployeeManagerId>;
  // countEmployeeManagers!: Sequelize.HasManyCountAssociationsMixin;
  // // EmployeeDetails hasMany EmployeeManager via ManagerID
  // Manager_EmployeeManagers!: EmployeeManager[];
  // getManager_EmployeeManagers!: Sequelize.HasManyGetAssociationsMixin<EmployeeManager>;
  // setManager_EmployeeManagers!: Sequelize.HasManySetAssociationsMixin<EmployeeManager, EmployeeManagerId>;
  // addManager_EmployeeManager!: Sequelize.HasManyAddAssociationMixin<EmployeeManager, EmployeeManagerId>;
  // addManager_EmployeeManagers!: Sequelize.HasManyAddAssociationsMixin<EmployeeManager, EmployeeManagerId>;
  // createManager_EmployeeManager!: Sequelize.HasManyCreateAssociationMixin<EmployeeManager>;
  // removeManager_EmployeeManager!: Sequelize.HasManyRemoveAssociationMixin<EmployeeManager, EmployeeManagerId>;
  // removeManager_EmployeeManagers!: Sequelize.HasManyRemoveAssociationsMixin<EmployeeManager, EmployeeManagerId>;
  // hasManager_EmployeeManager!: Sequelize.HasManyHasAssociationMixin<EmployeeManager, EmployeeManagerId>;
  // hasManager_EmployeeManagers!: Sequelize.HasManyHasAssociationsMixin<EmployeeManager, EmployeeManagerId>;
  // countManager_EmployeeManagers!: Sequelize.HasManyCountAssociationsMixin;
  // // EmployeeDetails hasMany LoginDetails via EmployeeDetailsId
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
  // // EmployeeDetails hasMany MasterBusinessUnit via HeadEmployeeId
  // MasterBusinessUnits!: MasterBusinessUnit[];
  // getMasterBusinessUnits!: Sequelize.HasManyGetAssociationsMixin<MasterBusinessUnit>;
  // setMasterBusinessUnits!: Sequelize.HasManySetAssociationsMixin<MasterBusinessUnit, MasterBusinessUnitId>;
  // addMasterBusinessUnit!: Sequelize.HasManyAddAssociationMixin<MasterBusinessUnit, MasterBusinessUnitId>;
  // addMasterBusinessUnits!: Sequelize.HasManyAddAssociationsMixin<MasterBusinessUnit, MasterBusinessUnitId>;
  // createMasterBusinessUnit!: Sequelize.HasManyCreateAssociationMixin<MasterBusinessUnit>;
  // removeMasterBusinessUnit!: Sequelize.HasManyRemoveAssociationMixin<MasterBusinessUnit, MasterBusinessUnitId>;
  // removeMasterBusinessUnits!: Sequelize.HasManyRemoveAssociationsMixin<MasterBusinessUnit, MasterBusinessUnitId>;
  // hasMasterBusinessUnit!: Sequelize.HasManyHasAssociationMixin<MasterBusinessUnit, MasterBusinessUnitId>;
  // hasMasterBusinessUnits!: Sequelize.HasManyHasAssociationsMixin<MasterBusinessUnit, MasterBusinessUnitId>;
  // countMasterBusinessUnits!: Sequelize.HasManyCountAssociationsMixin;
  // // EmployeeDetails hasMany PreviousCompanyDetails via EmployeeDetailsId
  // PreviousCompanyDetails!: PreviousCompanyDetails[];
  // getPreviousCompanyDetails!: Sequelize.HasManyGetAssociationsMixin<PreviousCompanyDetails>;
  // setPreviousCompanyDetails!: Sequelize.HasManySetAssociationsMixin<PreviousCompanyDetails, PreviousCompanyDetailsId>;
  // addPreviousCompanyDetail!: Sequelize.HasManyAddAssociationMixin<PreviousCompanyDetails, PreviousCompanyDetailsId>;
  // addPreviousCompanyDetails!: Sequelize.HasManyAddAssociationsMixin<PreviousCompanyDetails, PreviousCompanyDetailsId>;
  // createPreviousCompanyDetail!: Sequelize.HasManyCreateAssociationMixin<PreviousCompanyDetails>;
  // removePreviousCompanyDetail!: Sequelize.HasManyRemoveAssociationMixin<PreviousCompanyDetails, PreviousCompanyDetailsId>;
  // removePreviousCompanyDetails!: Sequelize.HasManyRemoveAssociationsMixin<PreviousCompanyDetails, PreviousCompanyDetailsId>;
  // hasPreviousCompanyDetail!: Sequelize.HasManyHasAssociationMixin<PreviousCompanyDetails, PreviousCompanyDetailsId>;
  // hasPreviousCompanyDetails!: Sequelize.HasManyHasAssociationsMixin<PreviousCompanyDetails, PreviousCompanyDetailsId>;
  // countPreviousCompanyDetails!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof EmployeeDetails {
    return EmployeeDetails.init({
    EmployeeDetailsId: {
      autoIncrement: true,
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
      allowNull: true,
      defaultValue: 0
    },
    CompanyEmailAddress: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    Location: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EmployeeDetails',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_EmployeeDetails",
        unique: true,
        fields: [
          { name: "EmployeeDetailsId" },
        ]
      },
    ]
  });
  }
}
