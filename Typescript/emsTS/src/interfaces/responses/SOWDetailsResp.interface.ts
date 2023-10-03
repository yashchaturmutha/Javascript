import { CompanyProjectResp } from "./CompanyProjectResp.interface";
import { UserProjectMasterSowEmployeeResp } from "./UserProjectMasterResp.interface";

export interface SOWDetailsResp {
SOWMasterId:number;
SOWName:string;
SOWSerialNumber:string;
IsAutoRenewal:string;
ParentSOWId:number;
StartDate:Date;
EndDate:Date;
MaxBillableHours:number;
MaxBillingAmount:string;
CompanyProjectId:number;
MasterRateTypeId:number;
Rate:string;
IsActive:boolean;
SOWFile:string;
CompanyProject:CompanyProjectResp;
//BillableEmployees:UserProjectMasterSowEmployeeResp[];
}
