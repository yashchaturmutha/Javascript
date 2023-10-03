import { Op } from 'sequelize'
import { isEmpty } from 'lodash'

import { ProjectMilestoneModel } from '../models/init-models';
import { ProjectMilestoneResp } from '../../interfaces/responses/ProjectMilestoneResp.interface'
import { ProjectMilestoneReq } from '../../interfaces/requests/ProjectMilestoneReq.interface'
import { dbProjectMilestoneReqToModel } from '../../mapper/ProjectMilestoneReq.Mapper'
import { dbProjectMilestoneModelToResp } from '../../mapper/ProjectMilestoneResp.Mapper'
import { dbUserProjectMasterReqToModel } from '../../mapper/UserProjectMasterReq.Mapper';
import { UserProjectMasterDal } from './UserProjectMasterDal';

export class ProjectMilestoneDal {

    async create(payload: ProjectMilestoneReq): Promise<ProjectMilestoneResp> {
        let oProjectMilestone = dbProjectMilestoneReqToModel(payload);
        const objProjectMilestone = await ProjectMilestoneModel.create(oProjectMilestone);
        let retProjectMilestone = dbProjectMilestoneModelToResp(objProjectMilestone);

        if (payload.BillableEmployees !== undefined) {
            let objUserProjectMasterDal: UserProjectMasterDal = new UserProjectMasterDal();
            for (let index = 0; index < payload.BillableEmployees.length; index++) {
                payload.BillableEmployees[index].CompanyProjectId = payload.CompanyProjectId;
                let userproj = dbUserProjectMasterReqToModel(payload.BillableEmployees[index]);
                const retuserproj = await objUserProjectMasterDal.create(userproj);
                retProjectMilestone.Employees?.push(retuserproj);
            }
        }

        return retProjectMilestone;
    }

    async findOrCreate(payload: ProjectMilestoneReq): Promise<ProjectMilestoneResp> {
        let oProjectMilestone = dbProjectMilestoneReqToModel(payload);
        const objProjectMilestone = await ProjectMilestoneModel.findOrCreate({
            where: {
                ProjectMilestoneId: oProjectMilestone.ProjectMilestoneId
            },
            defaults: oProjectMilestone
        });
        let retProjectMilestone = dbProjectMilestoneModelToResp(objProjectMilestone);
        return retProjectMilestone;
    }

    async update(id: number, payload: Partial<ProjectMilestoneReq>): Promise<ProjectMilestoneResp> {
        const objProjectMilestone = await ProjectMilestoneModel.findByPk(id)

        if (!objProjectMilestone) {
            // @todo throw custom error
            throw new Error('not found');
        }
        let oProjectMilestone = dbProjectMilestoneReqToModel(payload);

        const updatedProjectMilestone = await objProjectMilestone.update(oProjectMilestone);
        let retProjectMilestone = dbProjectMilestoneModelToResp(updatedProjectMilestone);
        return retProjectMilestone;
    }

    async getById(id: number): Promise<ProjectMilestoneResp> {
        const objProjectMilestone = await ProjectMilestoneModel.findByPk(id)

        if (!objProjectMilestone) {
            // @todo throw custom error
            throw new Error('not found');
        }
        let retProjectMilestone = dbProjectMilestoneModelToResp(objProjectMilestone);
        return retProjectMilestone;
    }

    async deleteById(ProjectMilestoneId: number): Promise<boolean> {
        const deletedProjectMilestoneCount = await ProjectMilestoneModel.destroy({
            where: { ProjectMilestoneId }
        })

        return !!deletedProjectMilestoneCount;
    }

    async getAll(filters?: ProjectMilestoneReq): Promise<ProjectMilestoneResp[]> {
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
            if (filters && filters.hasOwnProperty('projectmilestoneid')) {
                where.ProjectMilestoneId = this.getParameterCaseInsensitive(filters, 'projectmilestoneid');
            }
            if (filters && filters.hasOwnProperty('companyprojectid')) {
                where.CompanyProjectId = this.getParameterCaseInsensitive(filters, 'companyprojectid');
            }
            if (filters && filters.hasOwnProperty('milestonename')) {
                where.MilestoneName = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'milestonename') + '%' }
            }
            if (filters && filters.hasOwnProperty('milestonedesc')) {
                where.MilestoneDesc = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'milestonedesc') + '%' }
            }
            if (filters && filters.hasOwnProperty('amount')) {
                where.Amount = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'amount') + '%' }
            }
            if (filters && filters.hasOwnProperty('startdate')) {
                where.StartDate = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'startdate') + '%' }
            }
            if (filters && filters.hasOwnProperty('enddate')) {
                where.EndDate = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'enddate') + '%' }
            }
        }

        let objProjectMilestones = await ProjectMilestoneModel.findAll({
            where: where
        });
        let retProjectMilestoneResp!: ProjectMilestoneResp[];
        retProjectMilestoneResp = objProjectMilestones.map(dbProjectMilestoneModelToResp);
        return retProjectMilestoneResp;

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