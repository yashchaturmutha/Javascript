import { dbSOWDetailsModelToResp } from './SOWDetailsResp.Mapper'
import { dbEmployeeDetailsModelToResp } from './EmployeeDetailsMapper'
import { SOWDetailsResp } from '../interfaces/responses/SOWDetailsResp.interface';
import { EmployeeDetailsResp } from '../interfaces/responses/EmployeeDetailsResp';
import { UserProjectMasterCompanyProjectResp, UserProjectMasterResp, UserProjectMasterSowEmployeeResp } from '../interfaces/responses/UserProjectMasterResp.interface';
import { CompanyProjectResp } from '../interfaces/responses/CompanyProjectResp.interface';
import { dbCompanyProjectToResp } from './CompanyProjectResp.Mapper';
import { dbEmployeeViewModelToResp } from './EmployeeViewMapper';
import { EmployeeViewResp } from '../interfaces/responses/EmployeeViewResp';

export const dbToUserProjectMasterResp = (objUserProjectMaster: any): UserProjectMasterResp => {
    return {

        UserProjectMasterId: objUserProjectMaster.UserProjectMasterId,
        EmployeeDetailsId: objUserProjectMaster.EmployeeDetailsId,
        CompanyProjectId: objUserProjectMaster.CompanyProjectId,
        ReportToEmployeeId: objUserProjectMaster.ReportToEmployeeId,
        LastProjectRemark: objUserProjectMaster.LastProjectRemark,
        AssignedDate: objUserProjectMaster.AssignedDate,
        UnAssignedDate: objUserProjectMaster.UnAssignedDate,
        IsBillable: objUserProjectMaster.IsBillable,
        RateType: objUserProjectMaster.RateType,
        Rate: objUserProjectMaster.Rate,
        SOWMasterId: objUserProjectMaster.SOWMasterId,
        Utilization: objUserProjectMaster.Utilization
    }
}

export const dbUserProjectMasterModelToResp = (objUserProjectMaster: any): UserProjectMasterSowEmployeeResp => {

    let _SOWDetailsResps!: SOWDetailsResp;
    if (objUserProjectMaster.UserProjectMasters !== undefined) {
        _SOWDetailsResps = dbSOWDetailsModelToResp(objUserProjectMaster.SOWDetails);
    } else if (objUserProjectMaster.sd !== undefined) {
        _SOWDetailsResps = dbSOWDetailsModelToResp(objUserProjectMaster.sd);
    }

    let _EmployeeViewResp!: EmployeeViewResp;
    if (objUserProjectMaster.EmployeeView !== undefined) {
        _EmployeeViewResp = dbEmployeeViewModelToResp(objUserProjectMaster.EmployeeView)
    } else if (objUserProjectMaster.ev !== undefined) {
        _EmployeeViewResp = dbEmployeeViewModelToResp(objUserProjectMaster.ev)
    }
    let _EmployeeDetailsResp!: EmployeeDetailsResp;
    if (objUserProjectMaster.EmployeeView !== undefined) {
        _EmployeeDetailsResp = dbEmployeeViewModelToResp(objUserProjectMaster.EmployeeView)
    } else if (objUserProjectMaster.ed !== undefined) {
        _EmployeeDetailsResp = dbEmployeeViewModelToResp(objUserProjectMaster.ed)
    }

    let _CompanyProjectResp!: CompanyProjectResp;
    if (objUserProjectMaster.CompanyProject !== undefined) {
        _CompanyProjectResp = dbCompanyProjectToResp(objUserProjectMaster.CompanyProject)
    } else if (objUserProjectMaster.cp !== undefined) {
        _CompanyProjectResp = dbCompanyProjectToResp(objUserProjectMaster.cp)
    }

    return {

        UserProjectMasterId: objUserProjectMaster.UserProjectMasterId,
        EmployeeDetailsId: objUserProjectMaster.EmployeeDetailsId,
        CompanyProjectId: objUserProjectMaster.CompanyProjectId,
        ReportToEmployeeId: objUserProjectMaster.ReportToEmployeeId,
        LastProjectRemark: objUserProjectMaster.LastProjectRemark,
        AssignedDate: objUserProjectMaster.AssignedDate,
        UnAssignedDate: objUserProjectMaster.UnAssignedDate,
        IsBillable: objUserProjectMaster.IsBillable,
        RateType: objUserProjectMaster.RateType,
        Rate: objUserProjectMaster.Rate,
        SOWMasterId: objUserProjectMaster.SOWMasterId,
        Utilization: objUserProjectMaster.Utilization,
        SOWDetailsResps: _SOWDetailsResps,
        EmployeeViewResp: _EmployeeViewResp,
        CompanyProjectResp: _CompanyProjectResp
        //,EmployeeDetailsResp: _EmployeeDetailsResp
    }
}

export const dbToUserProjectMasterCompanyProjectResp = (objUserProjectMaster: any): UserProjectMasterCompanyProjectResp => {

    let _CompanyProject!: CompanyProjectResp;
    if (objUserProjectMaster.CompanyProject !== undefined) {
        _CompanyProject = dbCompanyProjectToResp(objUserProjectMaster.CompanyProject);
    } else if (objUserProjectMaster.cp !== undefined) {
        _CompanyProject = dbCompanyProjectToResp(objUserProjectMaster.cp);
    }
    return {
        UserProjectMasterId: objUserProjectMaster.UserProjectMasterId,
        EmployeeDetailsId: objUserProjectMaster.EmployeeDetailsId,
        CompanyProjectId: objUserProjectMaster.CompanyProjectId,
        ReportToEmployeeId: objUserProjectMaster.ReportToEmployeeId,
        LastProjectRemark: objUserProjectMaster.LastProjectRemark,
        AssignedDate: objUserProjectMaster.AssignedDate,
        UnAssignedDate: objUserProjectMaster.UnAssignedDate,
        IsBillable: objUserProjectMaster.IsBillable,
        RateType: objUserProjectMaster.RateType,
        Rate: objUserProjectMaster.Rate,
        SOWMasterId: objUserProjectMaster.SOWMasterId,
        Utilization: objUserProjectMaster.Utilization,
        CompanyProject: _CompanyProject,

    }
}
