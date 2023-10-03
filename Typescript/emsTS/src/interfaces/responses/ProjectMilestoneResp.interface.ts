import { UserProjectMasterSowEmployeeResp } from "./UserProjectMasterResp.interface";

export interface ProjectMilestoneResp {
ProjectMilestoneId:number;
CompanyProjectId:number;
MilestoneName:string;
MilestoneDesc:string;
Amount:string;
StartDate:Date;
EndDate:Date;
Employees:UserProjectMasterSowEmployeeResp[];
}
