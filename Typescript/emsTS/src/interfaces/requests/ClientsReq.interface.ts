import Joi from 'joi';

export interface ClientsReq {
ClientId:number;
ClientName:string;
ClientStatus:number;

}

// add validation based on above request 
export const ClientsValidation = Joi.object({
//  name: Joi.string().required(),
});