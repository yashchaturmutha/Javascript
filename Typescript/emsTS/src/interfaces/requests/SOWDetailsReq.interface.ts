import Joi from 'joi';
import { UserProjectMasterReq } from './UserProjectMasterReq.interface';

export interface SOWDetailsReq {
    SOWMasterId: number;
    SOWName: string;
    SOWSerialNumber: string;
    IsAutoRenewal: string;
    ParentSOWId: number;
    StartDate: Date;
    EndDate: Date;
    MaxBillableHours: number;
    MaxBillingAmount: string;
    CompanyProjectId: number;
    MasterRateTypeId: number;
    Rate: string;
    IsActive: boolean;
    SOWFile: string;
    //BillableEmployees?: UserProjectMasterReq[];
}


export interface SOWDetailsFilterReq {
    status: number; // 0: all, 1: valid, 2: expired 
    cpid?: number|null;
    buid?: number|null;
}

// add validation based on above request 
export const SOWDetailsValidation = Joi.object({
    //  name: Joi.string().required(),
});