import {kebabCase} from 'lodash'

import { SOWDetailsDal } from '../../db/dal/SOWDetailsDal';
import {SOWDetailsResp} from '../../interfaces/responses/SOWDetailsResp.interface'
import {SOWDetailsReq} from '../../interfaces/requests/SOWDetailsReq.interface'
import { LoginDetailsResp } from '../../interfaces/responses/LoginDetailsResp';
import { SOWDetailsFilterReq } from '../../interfaces/requests/SOWDetailsReq.interface';

export class SOWDetailsService
{
    private objSOWDetailsDal:SOWDetailsDal = new SOWDetailsDal();
    public getById = (id: number, tokenData: LoginDetailsResp): Promise<SOWDetailsResp> => {
        return this.objSOWDetailsDal.getById(id, tokenData)
    }
    public getByProjectId = (projectId: number, tokenData: LoginDetailsResp): Promise<SOWDetailsResp[]> => {
        return this.objSOWDetailsDal.getByProjectId(projectId, tokenData)
    }
     public getAll = (payload: SOWDetailsFilterReq, tokenData: LoginDetailsResp): Promise<SOWDetailsResp[]> => {
        return this.objSOWDetailsDal.getAll(payload, tokenData)
    }
    public create = async (payload: SOWDetailsReq, tokenData: LoginDetailsResp): Promise<SOWDetailsResp> => {
        return this.objSOWDetailsDal.create(payload, tokenData)
    }
    public update = async (id: number, payload: Partial<SOWDetailsReq>, tokenData: LoginDetailsResp): Promise<SOWDetailsResp> => {
        return this.objSOWDetailsDal.update(id, payload, tokenData)
    }
}