import { CompanyProjectResp } from "./CompanyProjectResp.interface";
import { EmployeeDetailsResp } from "./EmployeeDetailsResp";
import { EmployeeViewResp } from "./EmployeeViewResp";
import { SOWDetailsResp } from "./SOWDetailsResp.interface";

export interface UserProjectMasterResp {
    UserProjectMasterId:number;
    EmployeeDetailsId:number;
    CompanyProjectId:number;
    ReportToEmployeeId:number;
    LastProjectRemark:string;
    AssignedDate:Date;
    UnAssignedDate:Date;
    IsBillable:number;
    RateType:number;
    Rate:string;
    SOWMasterId:number;
    Utilization: number;
}

export interface UserProjectMasterSowEmployeeResp extends UserProjectMasterResp {
    SOWDetailsResps?:SOWDetailsResp;
    EmployeeViewResp?:EmployeeViewResp;
    CompanyProjectResp?: CompanyProjectResp;
}

export interface UserProjectMasterCompanyProjectResp extends UserProjectMasterResp {
    CompanyProject?:CompanyProjectResp;
}
    