import { Op } from 'sequelize'
import { isEmpty } from 'lodash'

import { UserProjectMasterResp, UserProjectMasterSowEmployeeResp } from '../../interfaces/responses/UserProjectMasterResp.interface'
import { UserProjectMasterReq, UserProjectMasterUtlizationReq } from '../../interfaces/requests/UserProjectMasterReq.interface'
import { dbUserProjectMasterReqToModel, UserProjectMasterUtlizationReqToDb } from '../../mapper/UserProjectMasterReq.Mapper'
import { dbToUserProjectMasterResp, dbUserProjectMasterModelToResp } from '../../mapper/UserProjectMasterResp.Mapper'
import { CompanyProjectModel, MasterBusinessUnitModel, UserProjectMasterModel } from '../models/init-models'
import { LoginDetailsResp } from '../../interfaces/responses/LoginDetailsResp'
import { RoleBUHead } from '../../common/constants'
import { Helpers } from '../../common/Helpers'

export class UserProjectMasterDal {

    async create(payload: UserProjectMasterReq): Promise<UserProjectMasterResp> {
        let oUserProjectMaster = dbUserProjectMasterReqToModel(payload);
        const objUserProjectMaster = await UserProjectMasterModel.create(oUserProjectMaster);
        let retUserProjectMaster = dbToUserProjectMasterResp(objUserProjectMaster);
        return retUserProjectMaster;
    }

    async findOrCreate(payload: UserProjectMasterReq): Promise<UserProjectMasterResp> {
        let oUserProjectMaster = dbUserProjectMasterReqToModel(payload);
        const objUserProjectMaster = await UserProjectMasterModel.findOrCreate({
            where: {
                UserProjectMasterId: oUserProjectMaster.UserProjectMasterId
            },
            defaults: oUserProjectMaster
        });
        let retUserProjectMaster = dbToUserProjectMasterResp(objUserProjectMaster);
        return retUserProjectMaster;
    }

    async updateUtlization(id: number, payload: Partial<UserProjectMasterUtlizationReq>, tokenData:LoginDetailsResp): Promise<UserProjectMasterResp> {
        let whereBu: any = {};
        if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles))
        {
            whereBu = {
                HeadEmployeeId: tokenData.EmployeeDetails.EmployeeDetailsId
            }       

        }
        const objUserProjectMaster = await UserProjectMasterModel.findOne( {
            where:   { UserProjectMasterId: id, EmployeeDetailsId: payload.EmployeeDetailsId,
            CompanyProjectId: payload.CompanyProjectId },
            include: [
                {
                    required: true,
                    model: CompanyProjectModel,
                    as: 'cp' ,
                    include: [
                        {
                            required: true,
                            as: "mbu",
                            model: MasterBusinessUnitModel,
                            where:   whereBu     
                        }
                    ]
                }
            ]
        });
        if (!objUserProjectMaster) {
            // @todo throw custom error
            throw new Error('not found');
        }
        // if project below to current BU
        objUserProjectMaster.Utilization = payload.Utilization;
        const updatedUserProjectMaster = await objUserProjectMaster.save();
        let retUserProjectMaster = dbToUserProjectMasterResp(updatedUserProjectMaster);
        return retUserProjectMaster;
    }

    async getById(id: number): Promise<UserProjectMasterResp> {
        const objUserProjectMaster = await UserProjectMasterModel.findByPk(id)

        if (!objUserProjectMaster) {
            // @todo throw custom error
            throw new Error('not found');
        }
        let retUserProjectMaster = dbToUserProjectMasterResp(objUserProjectMaster);
        return retUserProjectMaster;
    }

    async deleteById(UserProjectMasterId: number): Promise<boolean> {
        const deletedUserProjectMasterCount = await UserProjectMasterModel.destroy({
            where: { UserProjectMasterId }
        })

        return !!deletedUserProjectMasterCount;
    }

    async getAll(filters?: UserProjectMasterReq): Promise<UserProjectMasterResp[]> {
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
            if (filters && filters.hasOwnProperty('userprojectmasterid')) {
                where.UserProjectMasterId = this.getParameterCaseInsensitive(filters, 'userprojectmasterid');
            }
            if (filters && filters.hasOwnProperty('employeedetailsid')) {
                where.EmployeeDetailsId = this.getParameterCaseInsensitive(filters, 'employeedetailsid');
            }
            if (filters && filters.hasOwnProperty('companyprojectid')) {
                where.CompanyProjectId = this.getParameterCaseInsensitive(filters, 'companyprojectid');
            }
            if (filters && filters.hasOwnProperty('reporttoemployeeid')) {
                where.ReportToEmployeeId = this.getParameterCaseInsensitive(filters, 'reporttoemployeeid');
            }
            if (filters && filters.hasOwnProperty('lastprojectremark')) {
                where.LastProjectRemark = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'lastprojectremark') + '%' }
            }
            if (filters && filters.hasOwnProperty('assigneddate')) {
                where.AssignedDate = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'assigneddate') + '%' }
            }
            if (filters && filters.hasOwnProperty('unassigneddate')) {
                where.UnAssignedDate = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'unassigneddate') + '%' }
            }
            if (filters && filters.hasOwnProperty('isbillable')) {
                where.IsBillable = this.getParameterCaseInsensitive(filters, 'isbillable');
            }
            if (filters && filters.hasOwnProperty('ratetype')) {
                where.RateType = this.getParameterCaseInsensitive(filters, 'ratetype');
            }
            if (filters && filters.hasOwnProperty('rate')) {
                where.Rate = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'rate') + '%' }
            }
            if (filters && filters.hasOwnProperty('sowmasterid')) {
                where.SOWMasterId = this.getParameterCaseInsensitive(filters, 'sowmasterid');
            }
        }

        let objUserProjectMasters = await UserProjectMasterModel.findAll({
            where: where
        });
        let retUserProjectMasterResp!: UserProjectMasterResp[];
        retUserProjectMasterResp = objUserProjectMasters.map(dbToUserProjectMasterResp);
        return retUserProjectMasterResp;

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