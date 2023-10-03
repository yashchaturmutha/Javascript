import {kebabCase} from 'lodash'
import { EmployeeDetailsDal } from '../../db/dal/EmployeeDetailsDal';
import { EmployeeDetailsReq } from '../../interfaces/requests/EmployeeDetailsReq.interface';
import { EmployeeDetailsResp } from '../../interfaces/responses/EmployeeDetailsResp';
import { LoginDetailsResp } from '../../interfaces/responses/LoginDetailsResp';

export class EmployeeDetailsService
{
    private objEmployeeDetailsDal:EmployeeDetailsDal = new EmployeeDetailsDal();
    public getById = (id: number, tokenData:LoginDetailsResp): Promise<EmployeeDetailsResp> => {
        return this.objEmployeeDetailsDal.getById(id, tokenData);
    }
     public getAll = (payload: EmployeeDetailsReq, tokenData:LoginDetailsResp): Promise<EmployeeDetailsResp[]> => {
        return this.objEmployeeDetailsDal.getAll(payload, tokenData);
    }
    // public create = async (payload: EmployeeDetailsReq): Promise<EmployeeDetailsResp> => {
    //     return this.objEmployeeDetailsDal.create(payload)
    // }
    // public update = async (id: number, payload: Partial<EmployeeDetailsReq>): Promise<EmployeeDetailsResp> => {
    //     return this.objEmployeeDetailsDal.update(id, payload)
    // }
}
