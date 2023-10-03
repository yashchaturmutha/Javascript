import { Op } from 'sequelize'
import { isEmpty } from 'lodash'

import { CompanyProjectModel, EmployeeViewModel, MasterBusinessUnitModel, SOWDetailsModel, UserProjectMasterModel } from '../models/init-models';

import { SOWDetailsResp } from '../../interfaces/responses/SOWDetailsResp.interface'
import { SOWDetailsFilterReq, SOWDetailsReq } from '../../interfaces/requests/SOWDetailsReq.interface'
import { dbSOWDetailsReqToModel } from '../../mapper/SOWDetailsReq.Mapper'
import { dbSOWDetailsModelToResp } from '../../mapper/SOWDetailsResp.Mapper'
import { dbUserProjectMasterReqToModel } from '../../mapper/UserProjectMasterReq.Mapper';
import { UserProjectMasterDal } from './UserProjectMasterDal';
import { UserProjectMasterSowEmployeeResp } from '../../interfaces/responses/UserProjectMasterResp.interface';
import { LoginDetailsResp } from '../../interfaces/responses/LoginDetailsResp';
import { RoleBUHead } from '../../common/constants';
import { sequelize } from '..';
import { Helpers } from '../../common/Helpers';
import { UserProjectMaster } from '../models/UserProjectMaster';

export class SOWDetailsDal {

    async create(payload: SOWDetailsReq, tokenData: LoginDetailsResp): Promise<SOWDetailsResp> {
        let oSOWDetails = dbSOWDetailsReqToModel(payload);
        const objSOWDetails = await SOWDetailsModel.create(oSOWDetails);
        let retSOWDetails = dbSOWDetailsModelToResp(objSOWDetails);

        // if (payload.BillableEmployees !== undefined) {
        //     let objUserProjectMasterDal: UserProjectMasterDal = new UserProjectMasterDal();
        //     for (let index = 0; index < payload.BillableEmployees.length; index++) {
        //         payload.BillableEmployees[index].CompanyProjectId = payload.CompanyProjectId;
        //         payload.BillableEmployees[index].SOWMasterId = retSOWDetails.SOWMasterId;
        //         payload.BillableEmployees[index].IsBillable = 1;
        //         let userproj = dbUserProjectMasterReqToModel(payload.BillableEmployees[index]);
        //         let retuserproj: UserProjectMasterSowEmployeeResp = await objUserProjectMasterDal.create(userproj);
        //         retSOWDetails.BillableEmployees?.push(retuserproj);
        //     }
        // }
        return retSOWDetails;
    }

    async findOrCreate(payload: SOWDetailsReq, tokenData: LoginDetailsResp): Promise<SOWDetailsResp> {
        let oSOWDetails = dbSOWDetailsReqToModel(payload);
        const objSOWDetails = await SOWDetailsModel.findOrCreate({
            where: {
                SOWMasterId: oSOWDetails.SOWMasterId
            },
            defaults: oSOWDetails
        });
        let retSOWDetails = dbSOWDetailsModelToResp(objSOWDetails);
        return retSOWDetails;
    }

    async update(id: number, payload: Partial<SOWDetailsReq>, tokenData: LoginDetailsResp): Promise<SOWDetailsResp> {
        const objSOWDetails = await SOWDetailsModel.findByPk(id
            // ,
            // {
            //     include: [
            //    {
            //         required: true,
            //         as: 'upm',
            //         model: UserProjectMasterModel,
            //         where: {
            //             IsBillable: 1
            //         }
            //     }
            // ]}
            
            );
        if (!objSOWDetails) {
            // @todo throw custom error
            throw new Error('not found');
        }
        let oSOWDetailInput = dbSOWDetailsReqToModel(payload);
        oSOWDetailInput.SOWMasterId = id;

        // let objUserProjectMasterDal: UserProjectMasterDal = new UserProjectMasterDal();
        // //objSOWDetails.upm?.forEach( async (elementDb: any) => 
        // let upmDb:UserProjectMaster[]|undefined  = objSOWDetails.upm;
        // for (let index = 0; index < oSOWDetailInput.upm.length; index++) {
        //     const elementInput = oSOWDetailInput.upm[index];
        //     let bUpdate = false;
        //     if(upmDb !== undefined)
        //     {
        //         for (let indexInputUserProject = 0; indexInputUserProject < upmDb?.length; indexInputUserProject++) {
        //             const elementDb: any = upmDb[indexInputUserProject];
        //             if(elementDb.UserProjectMasterId == elementInput.UserProjectMasterId)
        //             {
        //                 await elementDb.update(elementInput);
        //                 bUpdate = true;
        //                 break;
        //             }
        //         }
        //     }
        //     if(!bUpdate)
        //     { // its new record
        //         elementInput.CompanyProjectId = payload.CompanyProjectId;
        //         elementInput.SOWMasterId = payload.SOWMasterId;
        //         elementInput.IsBillable = 1;
        //         let userproj = dbUserProjectMasterReqToModel(elementInput);
        //         await objUserProjectMasterDal.create(userproj);
        //     }

        // }

        const updatedSOWDetails = await objSOWDetails.update(oSOWDetailInput);
        //     , {include: [
        //     {
        //          as: 'upm',
        //          model: UserProjectMasterModel
        //      }
        //  ]} 
         
        
         let retSOWDetails = dbSOWDetailsModelToResp(updatedSOWDetails);
        return retSOWDetails;
    }

    async getById(SOWMasterId: number, tokenData: LoginDetailsResp): Promise<SOWDetailsResp> {
        let whereBu: any = {};
        if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles)) {
            whereBu = {
                HeadEmployeeId: tokenData.EmployeeDetails.EmployeeDetailsId
            }
        }

        const objSOWDetails = await SOWDetailsModel.findByPk(SOWMasterId,
            {include: [
                {
                    required: true,
                    model: CompanyProjectModel,
                    as: 'cp',
                    include: [
                        {
                            as: "mbu",
                            model: MasterBusinessUnitModel,
                            where: whereBu
                        }
                    ],
                }
                // , {
                //     required: true,
                //     as: 'upm',
                //     model: UserProjectMasterModel,
                //     where: {
                //         IsBillable: 1
                //     },
                //     include: [
                //         {
                //             required: true,
                //             as: 'ev',
                //             model: EmployeeViewModel
                //         }
                //     ]
                // }
            ]});

        if (!objSOWDetails) {
            // @todo throw custom error
            throw new Error('not found');
        }
        let retSOWDetails = dbSOWDetailsModelToResp(objSOWDetails);
        return retSOWDetails;
    }

    async getByProjectId(projectId: number, tokenData: LoginDetailsResp): Promise<SOWDetailsResp[]> {
        let objSOWDetailss = await SOWDetailsModel.findAll({
            where: { CompanyProjectId: projectId }
        });
        let retSOWDetailsResp!: SOWDetailsResp[];
        retSOWDetailsResp = objSOWDetailss.map(dbSOWDetailsModelToResp);
        return retSOWDetailsResp;
    }
    // async deleteById (SOWMasterId: number, tokenData: LoginDetailsResp): Promise<boolean> {
    //     const deletedSOWDetailsCount = await SOWDetailsModel.destroy({
    //         where: {SOWMasterId}
    //     })

    //     return !!deletedSOWDetailsCount;
    // }

    async getAll(filters: SOWDetailsFilterReq, tokenData: LoginDetailsResp): Promise<SOWDetailsResp[]> {
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
        // if(filters && filters.hasOwnProperty('sowmasterid') ) 
        // {
        // where.SOWMasterId = this.getParameterCaseInsensitive(filters, 'sowmasterid'); 
        // }
        // if(filters && filters.hasOwnProperty('sowname') ) 
        // {
        // where.SOWName = { [Op.like] : '%' + this.getParameterCaseInsensitive(filters, 'sowname') + '%' } 
        // }
        // if(filters && filters.hasOwnProperty('sowserialnumber') ) 
        // {
        // where.SOWSerialNumber = { [Op.like] : '%' + this.getParameterCaseInsensitive(filters, 'sowserialnumber') + '%' } 
        // }
        // if(filters && filters.hasOwnProperty('isautorenewal') ) 
        // {
        // where.IsAutoRenewal = { [Op.like] : '%' + this.getParameterCaseInsensitive(filters, 'isautorenewal') + '%' } 
        // }
        // if(filters && filters.hasOwnProperty('parentsowid') ) 
        // {
        // where.ParentSOWId = this.getParameterCaseInsensitive(filters, 'parentsowid'); 
        // }
        // if(filters && filters.hasOwnProperty('startdate') ) 
        // {
        // where.StartDate = { [Op.like] : '%' + this.getParameterCaseInsensitive(filters, 'startdate') + '%' } 
        // } 
        // if(filters && filters.hasOwnProperty('enddate') ) 
        // {
        // where.EndDate = { [Op.like] : '%' + this.getParameterCaseInsensitive(filters, 'enddate') + '%' } 
        // } 
        // if(filters && filters.hasOwnProperty('maxbillablehours') ) 
        // {
        // where.MaxBillableHours = this.getParameterCaseInsensitive(filters, 'maxbillablehours'); 
        // }
        // if(filters && filters.hasOwnProperty('maxbillingamount') ) 
        // {
        // where.MaxBillingAmount = { [Op.like] : '%' + this.getParameterCaseInsensitive(filters, 'maxbillingamount') + '%' } 
        // }
        // if(filters && filters.hasOwnProperty('companyprojectid') ) 
        // {
        // where.CompanyProjectId = this.getParameterCaseInsensitive(filters, 'companyprojectid'); 
        // }
        // if(filters && filters.hasOwnProperty('masterratetypeid') ) 
        // {
        // where.MasterRateTypeId = this.getParameterCaseInsensitive(filters, 'masterratetypeid'); 
        // }
        // if(filters && filters.hasOwnProperty('rate') ) 
        // {
        // where.Rate = { [Op.like] : '%' + this.getParameterCaseInsensitive(filters, 'rate') + '%' } 
        // }
        // if(filters && filters.hasOwnProperty('isactive') ) 
        // {
        // where.IsActive = this.getParameterCaseInsensitive(filters, 'isactive'); 
        // }
        // if(filters && filters.hasOwnProperty('sowfile') ) 
        // {
        // where.SOWFile = { [Op.like] : '%' + this.getParameterCaseInsensitive(filters, 'sowfile') + '%' } 
        // }
        if (filters.status !== undefined && filters.status !== 0) { // 0: all, 1: valid, 2: expired
            if (filters.status === 1) {
                where.EndDate = { [Op.gte]: sequelize.fn('GETDATE') }
            } else
                if (filters.status === 2) {
                    where.EndDate = { [Op.lt]: sequelize.fn('GETDATE') }
                }
        }
        let whereBu: any = {};
        if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles)) {
            whereBu = {
                HeadEmployeeId: tokenData.EmployeeDetails.EmployeeDetailsId
            }
        }
        let objSOWDetailss = await SOWDetailsModel.findAll({
            where: where,
            include: [
                {
                    required: true,
                    model: CompanyProjectModel,
                    as: 'cp',
                    include: [
                        {
                            as: "mbu",
                            model: MasterBusinessUnitModel,
                            where: whereBu
                        }
                    ],
                }
                // , {
                //     required: true,
                //     as: 'upm',
                //     model: UserProjectMasterModel,
                //     where: {
                //         IsBillable: 1
                //     },
                //     include: [
                //         {
                //             required: true,
                //             as: 'ev',
                //             model: EmployeeViewModel
                //         }
                //     ]
                // }
            ],
            order: [
                ['EndDate', 'asc']
            ]
        });
        let retSOWDetailsResp!: SOWDetailsResp[];
        retSOWDetailsResp = objSOWDetailss.map(dbSOWDetailsModelToResp);
        return retSOWDetailsResp;

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