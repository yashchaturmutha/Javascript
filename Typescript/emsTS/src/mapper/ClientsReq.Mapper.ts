import {ClientsReq} from '../interfaces/requests/ClientsReq.interface'

export const dbClientsReqToModel = (objClients: Partial<ClientsReq>): any => {
    return {
        ClientName:objClients.ClientName,
        ClientStatus:objClients.ClientStatus,
    }
}


