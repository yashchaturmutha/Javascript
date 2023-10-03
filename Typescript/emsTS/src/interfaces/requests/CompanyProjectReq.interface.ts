import Joi from 'joi';
import { UserProjectMasterSowEmployeeResp } from '../responses/UserProjectMasterResp.interface';
import { ProjectMilestoneReq } from './ProjectMilestoneReq.interface';
import { SOWDetailsReq } from './SOWDetailsReq.interface';
import { UserProjectMasterReq } from './UserProjectMasterReq.interface';

export interface CompanyProjectReq {
CompanyProjectId:number;
ProjectName:string;
ProjectTechnology:string;
ProjectPhaseId:number;
ProjectStartDate:Date;
ProjectEndDate?:Date|null;
projectstatus:number;
ClientName:string;
MasterBusinessUnit:number;
ProjectType:number;
ClientId:number;
TeamSize: number;
Currency: number;
BillingType: number;
SOWDetails?: SOWDetailsReq[];
BillableEmployees?: UserProjectMasterReq[];
ProjectMilestones?: ProjectMilestoneReq[];
NonBillableEmployees:UserProjectMasterSowEmployeeResp[];
}

export interface CompanyProjectNonBillableReq {
    CompanyProjectId:number;
    NonBillableEmployees:UserProjectMasterReq[];
}
export interface CompanyProjectMilestoneReq {
    CompanyProjectId:number;
    SOWDetails:Array<SOWDetailsReq>,
    ProjectMilestones: ProjectMilestoneReq[];
    NonBillableEmployees:UserProjectMasterReq[];
    BillableEmployees:UserProjectMasterReq[];
}
// add validation based on above request 
export const CompanyProjectValidation = Joi.object({
//  name: Joi.string().required(),
});