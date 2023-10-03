import {kebabCase} from 'lodash'
import { EmployeeDetailsDal } from '../../db/dal/EmployeeDetailsDal';
import { MasterDal } from '../../db/dal/MasterDal';
import { EmployeeDetailsReq } from '../../interfaces/requests/EmployeeDetailsReq.interface';
import { MasterReq } from '../../interfaces/requests/MasterReq.interface';
import { EmployeeDetailsResp } from '../../interfaces/responses/EmployeeDetailsResp';
import { LoginDetailsResp } from '../../interfaces/responses/LoginDetailsResp';
import { MasterResp } from '../../interfaces/responses/MasterResp.interface';

export class MasterService
{
    private objEmployeeDetailsDal:MasterDal = new MasterDal();
   
     public getAll = (payload: MasterReq, tokenData:LoginDetailsResp): Promise<MasterResp> => {
        return this.objEmployeeDetailsDal.getAll(payload, tokenData);
    }
}
