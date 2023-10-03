import { AuthEmployeeDetailsResp, EmployeeDetailsResp } from '../interfaces/responses/EmployeeDetailsResp';
import { LoginDetailsResp } from '../interfaces/responses/LoginDetailsResp';

export const dbEmployeeDetailsModelToResp = (objEmployeeDetails: any): EmployeeDetailsResp => {

    if(objEmployeeDetails == undefined)
    {
        return objEmployeeDetails;
    }
    return {
        
EmployeeDetailsId:objEmployeeDetails.EmployeeDetailsId,
EmployeeCodeId:objEmployeeDetails.EmployeeCodeId,
FirstName:objEmployeeDetails.FirstName,
MiddleName:objEmployeeDetails.MiddleName,
LastName:objEmployeeDetails.LastName,
MasterGenderId:objEmployeeDetails.MasterGenderId,
DOB:objEmployeeDetails.DOB,
MobileNo:objEmployeeDetails.MobileNo,
LandlineNo:objEmployeeDetails.LandlineNo,
EmailId:objEmployeeDetails.EmailId,
CurrentAddress:objEmployeeDetails.CurrentAddress,
ResidentialAddress:objEmployeeDetails.ResidentialAddress,
PassportNo:objEmployeeDetails.PassportNo,
PassportValidity:objEmployeeDetails.PassportValidity,
BloodGroup:objEmployeeDetails.BloodGroup,
Photo:objEmployeeDetails.Photo,
Image:objEmployeeDetails.Image,
EmpStatus:objEmployeeDetails.EmpStatus,
CompanyEmailAddress:objEmployeeDetails.CompanyEmailAddress,
Location:objEmployeeDetails.Location,
Designation:objEmployeeDetails.CurrentCompanyDetails[0].dataValues.DesignationMaster.dataValues.Designation
    }
}

export const dbAuthModelToEmployeeDetails = (objEmployeeDetails?: any): AuthEmployeeDetailsResp => {
    let employeeDetailRoles: number[] = [];
    let MasterBusinessUnitIds: number[] = [];

    if(objEmployeeDetails=== undefined) {
        return { EmployeeDetailsId: -1 , EmployeeCodeId: '', FirstName:''
        , MiddleName:'' , LastName:'', EmployeeDetailRoles:employeeDetailRoles, MasterBusinessUnitIds: MasterBusinessUnitIds
        };
    }
    if (objEmployeeDetails.edr !== undefined && objEmployeeDetails.edr.length > 0) {
        for(var index:number = 0; index < objEmployeeDetails.edr.length; index++)
        {
            employeeDetailRoles.push(objEmployeeDetails.edr[index].MasterRoleId);
        }
    }
    if (objEmployeeDetails.hmbu !== undefined && objEmployeeDetails.hmbu.length > 0) {
        for(var index:number = 0; index < objEmployeeDetails.hmbu.length; index++)
        {
            employeeDetailRoles.push(objEmployeeDetails.hmbu[index].MasterBusinessUnitId);
        }
    }
    
    return {
        EmployeeDetailsId:objEmployeeDetails.EmployeeDetailsId,
        EmployeeCodeId:objEmployeeDetails.EmployeeCodeId,
        FirstName:objEmployeeDetails.FirstName,
        MiddleName:objEmployeeDetails.MiddleName,
        LastName:objEmployeeDetails.LastName,
        EmpStatus:objEmployeeDetails.EmpStatus,
        CompanyEmailAddress:objEmployeeDetails.CompanyEmailAddress,
        Location:objEmployeeDetails.Location,
        EmployeeDetailRoles: employeeDetailRoles,
        MasterBusinessUnitIds: MasterBusinessUnitIds

    }
}

export const dbModelToLoginDetails = (objLoginDetails: any): LoginDetailsResp => {
    let EmployeeDetails!: AuthEmployeeDetailsResp;
    if (objLoginDetails.ed !== undefined) {
        EmployeeDetails = dbAuthModelToEmployeeDetails(objLoginDetails.ed);
    }
    
    return {
        EmployeeDetailsId:objLoginDetails.EmployeeDetailsId,
        UserName:objLoginDetails.UserName,
        EmployeeDetails: EmployeeDetails
    }
}
