import {kebabCase} from 'lodash'
import { ClientsDal } from '../../db/dal/ClientsDal';
import { ClientsReq } from '../../interfaces/requests/ClientsReq.interface';
import { ClientsResp } from '../../interfaces/responses/ClientsResp.interface';
import { LoginDetailsResp } from '../../interfaces/responses/LoginDetailsResp';

export class ClientsService
{
    private objClientsDal:ClientsDal = new ClientsDal();
    public getById = (id: number, tokenData: LoginDetailsResp): Promise<ClientsResp|null> => {
        return this.objClientsDal.getById(id)
    }
     public getAll = (payload: ClientsReq, tokenData: LoginDetailsResp): Promise<ClientsResp[]> => {
        return this.objClientsDal.getAll(payload)
    }
    public create = async (payload: ClientsReq, tokenData: LoginDetailsResp): Promise<ClientsResp> => {
        return this.objClientsDal.create(payload)
    }
    public update = async (id: number, payload: Partial<ClientsReq>, tokenData: LoginDetailsResp): Promise<ClientsResp> => {
        return this.objClientsDal.update(id, payload)
    }
}