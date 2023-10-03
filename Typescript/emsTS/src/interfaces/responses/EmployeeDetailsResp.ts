
export interface EmployeeDetailsResp {
    EmployeeDetailsId?: number;
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
    Designation?:string
  }
  
  export interface AuthEmployeeDetailsResp {
    EmployeeDetailsId?: number;
    EmployeeCodeId?: string;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    EmpStatus?: number;
    CompanyEmailAddress?: string;
    Location?: string;
    EmployeeDetailRoles: number[];
    MasterBusinessUnitIds: number[];
  }
  