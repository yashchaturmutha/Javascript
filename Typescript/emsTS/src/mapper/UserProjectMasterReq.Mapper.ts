import { UserProjectMasterUtlizationReq } from '../interfaces/requests/UserProjectMasterReq.interface'
import { UserProjectMasterReq } from '../interfaces/requests/UserProjectMasterReq.interface'

export const dbUserProjectMasterReqToModel = (objUserProjectMaster: Partial<UserProjectMasterReq>): any => {
    return {

        UserProjectMasterId: objUserProjectMaster.UserProjectMasterId,
        EmployeeDetailsId: objUserProjectMaster.EmployeeDetailsId,
        CompanyProjectId: objUserProjectMaster.CompanyProjectId,
        ReportToEmployeeId: objUserProjectMaster.ReportToEmployeeId,
        LastProjectRemark: objUserProjectMaster.LastProjectRemark,
        AssignedDate: objUserProjectMaster.AssignedDate,
        UnAssignedDate: objUserProjectMaster.UnAssignedDate===""?null:objUserProjectMaster.UnAssignedDate,
        IsBillable: objUserProjectMaster.IsBillable,
        RateType: objUserProjectMaster.RateType,
        Rate: objUserProjectMaster.Rate,
        SOWMasterId: objUserProjectMaster.SOWMasterId,
        Utilization: objUserProjectMaster.Utilization

    }
}

export const UserProjectMasterUtlizationReqToDb = (objUserProjectMaster: Partial<UserProjectMasterUtlizationReq>): any => {
    return {

        UserProjectMasterId: objUserProjectMaster.UserProjectMasterId,
        EmployeeDetailsId: objUserProjectMaster.EmployeeDetailsId,
        CompanyProjectId: objUserProjectMaster.CompanyProjectId,
        Utilization: objUserProjectMaster.Utilization

    }
}


