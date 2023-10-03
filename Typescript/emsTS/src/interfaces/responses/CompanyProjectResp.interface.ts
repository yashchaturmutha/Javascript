import { ProjectMilestoneResp } from "./ProjectMilestoneResp.interface";
import { SOWDetailsResp } from "./SOWDetailsResp.interface";
import { UserProjectMasterSowEmployeeResp } from "./UserProjectMasterResp.interface";

export interface CompanyProjectResp {
CompanyProjectId:number;
ProjectName:string;
ProjectTechnology:string;
ProjectPhaseId:number;
ProjectStartDate:Date;
ProjectEndDate:Date;
projectstatus:number;
ClientName:string;
MasterBusinessUnit:number;
MasterBusinessUnitName:string;
ProjectType:number;
ClientId:number;
TeamSize: number;
Currency: number;
BillingType: number;
SOWDetails?: SOWDetailsResp[];
ProjectMilestones?: ProjectMilestoneResp[];
BillableEmployees: UserProjectMasterSowEmployeeResp[];
NonBillableEmployees:UserProjectMasterSowEmployeeResp[];
}

export interface CompanyProjectLookupResp {
    CompanyProjectId:number;
    ProjectName:string;
}
    