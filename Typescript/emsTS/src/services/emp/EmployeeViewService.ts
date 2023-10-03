import {kebabCase} from 'lodash'
import { EmployeeViewDal } from '../../db/dal/EmployeeViewDal';
import { EmployeeDetailsReq, EmployeeDetailsSearchReq, EmployeeSearchKeywordReq } from '../../interfaces/requests/EmployeeDetailsReq.interface';
import { EmployeeViewResp, EmployeeViewSearchResp } from '../../interfaces/responses/EmployeeViewResp';
import { LoginDetailsResp } from '../../interfaces/responses/LoginDetailsResp';

export class EmployeeViewService
{
    private objEmployeeViewDal:EmployeeViewDal = new EmployeeViewDal();
    public getById = (id: number, tokenData:LoginDetailsResp): Promise<EmployeeViewResp> => {
        return this.objEmployeeViewDal.getById(id, tokenData);
    }
    public getAll = (payload: EmployeeDetailsSearchReq, tokenData:LoginDetailsResp): Promise<EmployeeViewResp[]> => {
        return this.objEmployeeViewDal.getAll(payload, tokenData);
    }
    public searchAll = (payload: EmployeeSearchKeywordReq, tokenData:LoginDetailsResp): Promise<EmployeeViewSearchResp[]> => {
        return this.objEmployeeViewDal.searchAll(payload, tokenData);
    }
    public getAllEmployeesOnBench = (payload: EmployeeDetailsSearchReq, tokenData:LoginDetailsResp): Promise<EmployeeViewResp[]> => {
        return this.objEmployeeViewDal.getAllEmployeesOnBench(payload, tokenData);
    }
    
}
