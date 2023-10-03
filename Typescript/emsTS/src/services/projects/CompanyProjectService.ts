import {kebabCase} from 'lodash'
import { CompanyProjectDal } from '../../db/dal/CompanyProjectDal';
import { UserProjectMasterDal } from '../../db/dal/UserProjectMasterDal';
import { CompanyProjectMilestoneReq, CompanyProjectNonBillableReq } from '../../interfaces/requests/CompanyProjectReq.interface';
import { CompanyProjectReq } from '../../interfaces/requests/CompanyProjectReq.interface';
import { UserProjectMasterUtlizationReq } from '../../interfaces/requests/UserProjectMasterReq.interface';
import { CompanyProjectLookupResp } from '../../interfaces/responses/CompanyProjectResp.interface';
import { CompanyProjectResp } from '../../interfaces/responses/CompanyProjectResp.interface';
import { LoginDetailsResp } from '../../interfaces/responses/LoginDetailsResp';
import { UserProjectMasterResp } from '../../interfaces/responses/UserProjectMasterResp.interface';
import { number } from 'joi';



export class CompanyProjectService
{
    private objCompanyProjectDal:CompanyProjectDal = new CompanyProjectDal();
    private objUserProjectMasterDal:UserProjectMasterDal = new UserProjectMasterDal();
    public getById = (id: number, tokenData:LoginDetailsResp): Promise<CompanyProjectResp|null> => {

        // make sure projectid below to that bu

        return this.objCompanyProjectDal.getById(id, tokenData)
    }
     public getAll = (payload: CompanyProjectReq, tokenData: LoginDetailsResp): Promise<CompanyProjectResp[]> => {
        return this.objCompanyProjectDal.getAll(payload, tokenData)
    }
    public create = async (payload: CompanyProjectReq, tokenData: LoginDetailsResp): Promise<CompanyProjectResp> => {
        return this.objCompanyProjectDal.create(payload, tokenData)
    }
    public update = async (id: number, payload: Partial<CompanyProjectReq>, tokenData:LoginDetailsResp): Promise<CompanyProjectResp> => {
        return this.objCompanyProjectDal.update(id, payload, tokenData)
    }
    // public addNonBillable = async (id: number, payload: Partial<CompanyProjectNonBillableReq>, tokenData:LoginDetailsResp): Promise<CompanyProjectResp|null> => {
    //     return this.objCompanyProjectDal.addNonBillable(id, payload, tokenData)
    // }

    // public updateNonBillable = async (id: number, payload: Partial<CompanyProjectNonBillableReq>, tokenData:LoginDetailsResp): Promise<CompanyProjectResp|null> => {
    //     return this.objCompanyProjectDal.updateNonBillable(id, payload, tokenData)
    // }
    
    public UserProjectMasterUtlization = async (id: number, payload: Partial<UserProjectMasterUtlizationReq>, tokenData:LoginDetailsResp): Promise<UserProjectMasterResp> => {
        return this.objUserProjectMasterDal.updateUtlization(id, payload, tokenData)
    }
    
    public lookup = (keyword: string, tokenData: LoginDetailsResp): Promise<CompanyProjectLookupResp[]> => {
        return this.objCompanyProjectDal.lookup(keyword, tokenData)
    }

    public updateProjectById = async (id: number, payload: Partial<CompanyProjectReq>, tokenData:LoginDetailsResp): Promise<CompanyProjectResp|null> => {
        return this.objCompanyProjectDal.updateProjectById(id, payload, tokenData)
    }
    
    
}