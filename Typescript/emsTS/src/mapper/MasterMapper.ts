import { DepartmentMasterResp } from '../interfaces/responses/DepartmentMasterResp.interface';
import { DesignationMasterResp } from '../interfaces/responses/DesignationMasterResp.interface';
import { MasterBusinessUnitResp } from '../interfaces/responses/MasterBusinessUnitResp.interface';
import { MasterCompanyLocationResp } from '../interfaces/responses/MasterCompanyLocationResp.interface';
import { MasterEmployeeTypeResp } from '../interfaces/responses/MasterEmployeeTypeResp.interface';
import { MasterGenderResp } from '../interfaces/responses/MasterGenderResp.interface';
import { MasterProjectTypeResp } from '../interfaces/responses/MasterProjectTypeResp.interface';

export const dbDepartmentMasterToResp = (objEmployeeDetails: any): DepartmentMasterResp => {
    if(objEmployeeDetails == undefined)
    {
        return objEmployeeDetails;
    }
    return {
    
        DepartmentMasterId:objEmployeeDetails.DepartmentMasterId,
        DepartmentName:objEmployeeDetails.DepartmentName

    }
}
export const dbDesignationMasterToResp = (objEmployeeDetails: any): DesignationMasterResp => {
    if(objEmployeeDetails == undefined)
    {
        return objEmployeeDetails;
    }
    return {
        DesignationMasterId:objEmployeeDetails.DesignationMasterId,
        Designation:objEmployeeDetails.Designation

    }
}
export const dbMasterBusinessUnitToResp = (objEmployeeDetails: any): MasterBusinessUnitResp => {
    if(objEmployeeDetails == undefined)
    {
        return objEmployeeDetails;
    }
    return {
    
        MasterBusinessUnitId:objEmployeeDetails.MasterBusinessUnitId,
        BusinessUnitName:objEmployeeDetails.BusinessUnitName,
        HeadEmployeeId:objEmployeeDetails.HeadEmployeeId
    }
}
export const dbMasterCompanyLocationToResp = (objEmployeeDetails: any): MasterCompanyLocationResp => {
    if(objEmployeeDetails == undefined)
    {
        return objEmployeeDetails;
    }
    return {
        MasterCompanyLocationId:objEmployeeDetails.MasterCompanyLocationId,
        City:objEmployeeDetails.City,
        Country:objEmployeeDetails.Country,
        IsActive:objEmployeeDetails.IsActive,
        Name:objEmployeeDetails.Name
    }
}
export const dbMasterGenderToResp = (objEmployeeDetails: any): MasterGenderResp => {
    if(objEmployeeDetails == undefined)
    {
        return objEmployeeDetails;
    }
    return {
        MasterGenderId:objEmployeeDetails.MasterGenderId,
        Gender:objEmployeeDetails.Gender

    }
}
export const dbMasterEmployeeTypeToResp = (objEmployeeDetails: any): MasterEmployeeTypeResp => {
    if(objEmployeeDetails == undefined)
    {
        return objEmployeeDetails;
    }
    return {
    
        EmployeeTypeId:objEmployeeDetails.EmployeeTypeId,
        EmployeeTypeName:objEmployeeDetails.EmployeeTypeName
    }
}
export const dbMasterProjectTypeToResp = (objMasterProjectType: any): MasterProjectTypeResp => {
    if(objMasterProjectType == undefined)
    {
        return objMasterProjectType;
    }
    return {
    
        MasterProjectTypeId:objMasterProjectType.MasterProjectTypeId,
        ProjectTypeName:objMasterProjectType.ProjectTypeName
    }
}


