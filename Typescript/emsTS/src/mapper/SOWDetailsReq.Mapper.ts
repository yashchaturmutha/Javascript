import { SOWDetailsReq } from '../interfaces/requests/SOWDetailsReq.interface'
import { UserProjectMasterReq } from '../interfaces/requests/UserProjectMasterReq.interface';
import { dbUserProjectMasterReqToModel } from './UserProjectMasterReq.Mapper';

export const dbSOWDetailsReqToModel = (objSOWDetails: Partial<SOWDetailsReq>): any => {

    // let BillableEmployees!: UserProjectMasterReq[];
    // if (objSOWDetails.BillableEmployees !== undefined) {
    //     BillableEmployees = objSOWDetails.BillableEmployees.map(dbUserProjectMasterReqToModel);
    // }


    return {

        SOWMasterId: objSOWDetails.SOWMasterId,
        SOWName: objSOWDetails.SOWName,
        SOWSerialNumber: objSOWDetails.SOWSerialNumber,
        IsAutoRenewal: objSOWDetails.IsAutoRenewal,
        ParentSOWId: objSOWDetails.ParentSOWId,
        StartDate: objSOWDetails.StartDate,
        EndDate: objSOWDetails.EndDate,
        MaxBillableHours: objSOWDetails.MaxBillableHours,
        MaxBillingAmount: objSOWDetails.MaxBillingAmount,
        CompanyProjectId: objSOWDetails.CompanyProjectId,
        MasterRateTypeId: objSOWDetails.MasterRateTypeId,
        Rate: objSOWDetails.Rate,
        IsActive: objSOWDetails.IsActive,
        SOWFile: objSOWDetails.SOWFile,
        //upm: BillableEmployees
    }
}


