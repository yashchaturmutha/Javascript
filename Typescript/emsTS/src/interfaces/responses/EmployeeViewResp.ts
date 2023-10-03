import { UserProjectMasterSowEmployeeResp } from "./UserProjectMasterResp.interface";

export interface EmployeeViewResp {
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
  UserProjectMasters: UserProjectMasterSowEmployeeResp[];
  }
  
  
export interface EmployeeViewSearchResp {
  EmployeeDetailsId: number;
  EmployeeCodeId?: string;
  FirstName: string;
  MiddleName: string;
  LastName: string;
  CompanyEmailAddress?: string;
}
  