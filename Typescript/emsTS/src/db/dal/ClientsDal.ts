import { Op } from 'sequelize'
import { isEmpty } from 'lodash'


import { ClientsResp } from '../../interfaces/responses/ClientsResp.interface'
import { ClientsReq } from '../../interfaces/requests/ClientsReq.interface'
import { dbClientsReqToModel } from '../../mapper/ClientsReq.Mapper'
import { dbClientsToResp } from '../../mapper/ClientsResp.Mapper'
import { ClientsModel } from '../models/init-models'

export class ClientsDal {

    async create(payload: ClientsReq): Promise<ClientsResp> {
        let oClients = dbClientsReqToModel(payload);
        const objClients = await ClientsModel.create(oClients);
        let retClients = dbClientsToResp(objClients);
        return retClients;
    }

    async findOrCreate(payload: ClientsReq): Promise<ClientsResp> {
        let oClients = dbClientsReqToModel(payload);
        const objClients = await ClientsModel.findOrCreate({
            where: {
                ClientId: oClients.ClientId
            },
            defaults: oClients
        });
        let retClients = dbClientsToResp(objClients);
        return retClients;
    }

    async update(id: number, payload: Partial<ClientsReq>): Promise<ClientsResp> {
        const objClients = await ClientsModel.findByPk(id)

        if (!objClients) {
            // @todo throw custom error
            throw new Error('not found');
        }
        let oClients = dbClientsReqToModel(payload);
        oClients.ClientId = id;
        const updatedClients = await objClients.update(oClients);
        let retClients = dbClientsToResp(updatedClients);
        return retClients;
    }

    async getById(id: number): Promise<ClientsResp|null> {
        const objClients = await ClientsModel.findByPk(id)

        if (!objClients) {
            // @todo throw custom error
            return null;
        }
        let retClients = dbClientsToResp(objClients);
        return retClients;
    }

    // async deleteById (ClientId: number): Promise<boolean> {
    //     const deletedClientsCount = await Clients.destroy({
    //         where: {ClientId}
    //     })

    //     return !!deletedClientsCount;
    // }

    async getAll(filters?: ClientsReq): Promise<ClientsResp[]> {
        let where: any = {};

        /*if(filters?.Id)
        {
            where.Id = filters?.Id;
        }
        if(filters?.Name)
        {
            let temp = '%' + filters?.Name + '%';
            where.Name = { [Op.like] : temp};
        }*/
        {
            if (filters && filters.hasOwnProperty('clientid')) {
                where.ClientId = this.getParameterCaseInsensitive(filters, 'clientid');
            }
            if (filters && filters.hasOwnProperty('clientname')) {
                where.ClientName = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'clientname') + '%' }
            }
            if (filters && filters.hasOwnProperty('clientstatus')) {
                where.ClientStatus = this.getParameterCaseInsensitive(filters, 'clientstatus');
            }
        }

        let objClients = await ClientsModel.findAll({
            where: where
        });
        let retClientsResp!: ClientsResp[];
        retClientsResp = objClients.map(dbClientsToResp);
        return retClientsResp;

    }
    getParameterCaseInsensitive(object: Object, key: string): Object | undefined {
        const asLowercase = key.toLowerCase();
        let keys: string | undefined = Object.keys(object)
            .find(k => k.toLowerCase() === asLowercase);
        if (keys)
            return object[keys as keyof typeof object];
        return undefined;
    }
}