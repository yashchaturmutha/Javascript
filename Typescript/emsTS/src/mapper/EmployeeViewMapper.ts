import { EmployeeViewResp, EmployeeViewSearchResp } from '../interfaces/responses/EmployeeViewResp';
import { UserProjectMasterCompanyProjectResp } from '../interfaces/responses/UserProjectMasterResp.interface';
import { dbToUserProjectMasterCompanyProjectResp } from './UserProjectMasterResp.Mapper';

export const dbEmployeeViewModelToResp = (objEmployeeView: any): EmployeeViewResp => {

    if (objEmployeeView == undefined) {
        return objEmployeeView;
    }
    let userProjectMastersResps: UserProjectMasterCompanyProjectResp[] = [];
    if (objEmployeeView.UserProjectMasters !== undefined) {
        userProjectMastersResps = objEmployeeView.UserProjectMasters.map(dbToUserProjectMasterCompanyProjectResp);
    } else if (objEmployeeView.upm !== undefined) {
        userProjectMastersResps = objEmployeeView.upm.map(dbToUserProjectMasterCompanyProjectResp);
    }
    return {
        EmployeeDetailsId: objEmployeeView.EmployeeDetailsId,
        EmployeeCodeId: objEmployeeView.EmployeeCodeId,
        FirstName: objEmployeeView.FirstName,
        MiddleName: objEmployeeView.MiddleName,
        LastName: objEmployeeView.LastName,
        MasterGenderId: objEmployeeView.MasterGenderId,
        DOB: objEmployeeView.DOB,
        MobileNo: objEmployeeView.MobileNo,
        LandlineNo: objEmployeeView.LandlineNo,
        EmailId: objEmployeeView.EmailId,
        CurrentAddress: objEmployeeView.CurrentAddress,
        ResidentialAddress: objEmployeeView.ResidentialAddress,
        PassportNo: objEmployeeView.PassportNo,
        PassportValidity: objEmployeeView.PassportValidity,
        BloodGroup: objEmployeeView.BloodGroup,
        Photo: objEmployeeView.Photo,
        Image: objEmployeeView.Image,
        EmpStatus: objEmployeeView.EmpStatus,
        CompanyEmailAddress: objEmployeeView.CompanyEmailAddress,
        Location: objEmployeeView.Location,
        MasterCompanyLocationId: objEmployeeView.MasterCompanyLocationId,
        CurrentCompanyDetailsId: objEmployeeView.CurrentCompanyDetailsId,
        CurrentCTC: objEmployeeView.CurrentCTC,
        JoiningDate: objEmployeeView.JoiningDate,
        DepartmentMasterId: objEmployeeView.DepartmentMasterId,
        DesignationMasterId: objEmployeeView.DesignationMasterId,
        NextRaiseDate: objEmployeeView.NextRaiseDate,
        ReleaseDate: objEmployeeView.ReleaseDate,
        ExperienceSkills: objEmployeeView.ExperienceSkills,
        OtherSkills: objEmployeeView.OtherSkills,
        YearsOfExperience: objEmployeeView.YearsOfExperience,
        YearsOfExperienceDate: objEmployeeView.YearsOfExperienceDate,
        Certifications: objEmployeeView.Certifications,
        ResumeFileName: objEmployeeView.ResumeFileName,
        MasterBusinessUnitId: objEmployeeView.MasterBusinessUnitId,
        EmployeeTypeId: objEmployeeView.EmployeeTypeId,
        EmployeeTypeName: objEmployeeView.EmployeeTypeName,
        BusinessUnitName: objEmployeeView.BusinessUnitName,
        HeadEmployeeId: objEmployeeView.HeadEmployeeId,
        DepartmentName: objEmployeeView.DepartmentName,
        Designation: objEmployeeView.Designation,
        EmployeeCodeIdBu: objEmployeeView.EmployeeCodeIdBu,
        FirstNameBu: objEmployeeView.FirstNameBu,
        MiddleNameBu: objEmployeeView.MiddleNameBu,
        LastNameBu: objEmployeeView.LastNameBu,
        CompanyEmailAddressBu: objEmployeeView.CompanyEmailAddressBu,
        LocationBu: objEmployeeView.LocationBu,
        LocationName: objEmployeeView.LocationName,
        LocationNameBu: objEmployeeView.LocationNameBu,
        UserProjectMasters: userProjectMastersResps
    }
}


export const dbEmployeeViewSearchModelToResp = (objEmployeeView: any): EmployeeViewSearchResp => {

    if (objEmployeeView == undefined) {
        return objEmployeeView;
    }
    return {
        EmployeeDetailsId: objEmployeeView.EmployeeDetailsId,
        EmployeeCodeId: objEmployeeView.EmployeeCodeId,
        FirstName: objEmployeeView.FirstName,
        MiddleName: objEmployeeView.MiddleName,
        LastName: objEmployeeView.LastName,
        CompanyEmailAddress: objEmployeeView.CompanyEmailAddress,
    }
}
