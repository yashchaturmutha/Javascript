import Joi from 'joi';

export interface UserProjectMasterReq {
UserProjectMasterId:number;
EmployeeDetailsId:number;
CompanyProjectId:number;
ReportToEmployeeId:number;
LastProjectRemark:string;
AssignedDate:Date;
UnAssignedDate:Date|string;
IsBillable:number;
RateType:number;
Rate:string;
SOWMasterId:number;
Utilization:number;

}

export interface UserProjectMasterUtlizationReq {
    UserProjectMasterId:number;
    EmployeeDetailsId:number;
    CompanyProjectId:number;
    Utilization:number;
}
    
// add validation based on above request 
export const UserProjectMasterValidation = Joi.object({
//  name: Joi.string().required(),
});