import Joi from 'joi';

export interface EmployeeDetailsReq {
EmployeeDetailsId:number;
EmployeeCodeId:string;
FirstName:string;
MiddleName:string;
LastName:string;
MasterGenderId:number;
DOB:Date;
MobileNo:string;
LandlineNo:string;
EmailId:string;
CurrentAddress:string;
ResidentialAddress:string;
PassportNo:string;
PassportValidity:Date;
BloodGroup:string;
Photo:string;
Image:string;
EmpStatus:number;
CompanyEmailAddress:string;
Location:string;
}
export interface EmployeeDetailsSearchReq {
    keyword:string;
    bu:number;
    pid:number;
    isbillable:string;
    empprjstatus: number;
}

export interface EmployeeSearchKeywordReq {
    keyword:string;
}
// add validation based on above request 
export const EmployeeDetailsValidation = Joi.object({
//  name: Joi.string().required(),
});