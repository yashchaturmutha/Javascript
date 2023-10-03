import Joi from 'joi';
import { UserProjectMasterReq } from './UserProjectMasterReq.interface';

export interface ProjectMilestoneReq {
ProjectMilestoneId?:number;
CompanyProjectId:number;
MilestoneName:string;
MilestoneDesc:string;
Amount:string;
StartDate:Date;
EndDate:Date;
BillableEmployees: UserProjectMasterReq[];

}
