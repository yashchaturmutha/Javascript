import { CompanyProjectResp } from '../interfaces/responses/CompanyProjectResp.interface';
import { SOWDetailsResp } from '../interfaces/responses/SOWDetailsResp.interface';
import { UserProjectMasterSowEmployeeResp } from '../interfaces/responses/UserProjectMasterResp.interface';
import { dbCompanyProjectToResp } from './CompanyProjectResp.Mapper';
import { dbUserProjectMasterModelToResp } from './UserProjectMasterResp.Mapper';

export const dbSOWDetailsModelToResp = (objSOWDetails: any): SOWDetailsResp => {
    if(objSOWDetails == undefined)
    {
        return objSOWDetails;
    }
    let _CompanyProjectResp!: CompanyProjectResp;
    if (objSOWDetails.CompanyProject !== undefined) {
        _CompanyProjectResp = dbCompanyProjectToResp(objSOWDetails.CompanyProject);
    } else if (objSOWDetails.cp !== undefined) {
        _CompanyProjectResp = dbCompanyProjectToResp(objSOWDetails.cp);
    }

    
    // let userProjectMastersResps: UserProjectMasterSowEmployeeResp[] = [];;
    // if (objSOWDetails.UserProjectMasters !== undefined) {
    //     userProjectMastersResps = objSOWDetails.UserProjectMasters.map(dbUserProjectMasterModelToResp);
    // } else if (objSOWDetails.upm !== undefined) {
    //     userProjectMastersResps = objSOWDetails.upm.map(dbUserProjectMasterModelToResp);
    // }
    return {
        
        SOWMasterId:objSOWDetails.SOWMasterId,
        SOWName:objSOWDetails.SOWName,
        SOWSerialNumber:objSOWDetails.SOWSerialNumber,
        IsAutoRenewal:objSOWDetails.IsAutoRenewal,
        ParentSOWId:objSOWDetails.ParentSOWId,
        StartDate:objSOWDetails.StartDate,
        EndDate:objSOWDetails.EndDate,
        MaxBillableHours:objSOWDetails.MaxBillableHours,
        MaxBillingAmount:objSOWDetails.MaxBillingAmount,
        CompanyProjectId:objSOWDetails.CompanyProjectId,
        MasterRateTypeId:objSOWDetails.MasterRateTypeId,
        Rate:objSOWDetails.Rate,
        IsActive:objSOWDetails.IsActive,
        SOWFile:objSOWDetails.SOWFile,
        CompanyProject: _CompanyProjectResp
        //BillableEmployees: userProjectMastersResps
    }
}
