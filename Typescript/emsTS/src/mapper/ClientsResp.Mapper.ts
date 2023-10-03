import {ClientsResp} from '../interfaces/responses/ClientsResp.interface'

export const dbClientsToResp = (objClients: any): ClientsResp => {
    return {
        
ClientId:objClients.ClientId,
ClientName:objClients.ClientName,
ClientStatus:objClients.ClientStatus,

    }
}
