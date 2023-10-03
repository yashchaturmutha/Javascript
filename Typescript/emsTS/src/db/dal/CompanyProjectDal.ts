import { Op, Sequelize } from 'sequelize'
import { isEmpty } from 'lodash'


import { CompanyProjectBillableReqtoDB, CompanyProjectNonBillableReqtoDB, dbCompanyProjectReqToModel } from '../../mapper/CompanyProjectReq.Mapper'
import { dbCompanyProjectToResp, dbToCompanyProjectLookupResp } from '../../mapper/CompanyProjectResp.Mapper'
import { CompanyProjectLookupResp, CompanyProjectResp } from '../../interfaces/responses/CompanyProjectResp.interface';
import { CompanyProjectMilestoneReq, CompanyProjectNonBillableReq, CompanyProjectReq } from '../../interfaces/requests/CompanyProjectReq.interface';
import { ClientsModel, CompanyProjectModel, EmployeeDetailsModel, EmployeeViewModel, MasterBusinessUnitModel, ProjectMilestoneModel, SOWDetailsModel, UserProjectMasterModel } from '../models/init-models';
import { sequelize } from '..';
import { UserProjectMasterReq } from '../../interfaces/requests/UserProjectMasterReq.interface';
import { dbUserProjectMasterReqToModel } from '../../mapper/UserProjectMasterReq.Mapper';
import { SOWDetailsReq } from '../../interfaces/requests/SOWDetailsReq.interface';
import { dbSOWDetailsReqToModel } from '../../mapper/SOWDetailsReq.Mapper';
import { ProjectMilestoneReq } from '../../interfaces/requests/ProjectMilestoneReq.interface';
import { dbProjectMilestoneReqToModel } from '../../mapper/ProjectMilestoneReq.Mapper';
import { SOWDetailsDal } from './SOWDetailsDal';
import { ProjectMilestoneDal } from './ProjectMilestoneDal';
import { SOWDetailsResp } from '../../interfaces/responses/SOWDetailsResp.interface';
import { LoginDetailsResp } from '../../interfaces/responses/LoginDetailsResp';
import { RoleBUHead, RoleFinance } from '../../common/constants';
import { EmployeeDetailsDal } from './EmployeeDetailsDal';
import { Helpers } from '../../common/Helpers';
import { UserProjectMasterDal } from './UserProjectMasterDal';
import { UserProjectMasterSowEmployeeResp } from '../../interfaces/responses/UserProjectMasterResp.interface';
import _ from 'lodash';

export class CompanyProjectDal {

    async create(payload: CompanyProjectReq, tokenData: LoginDetailsResp): Promise<CompanyProjectResp> {
        if(payload.ProjectEndDate === undefined || payload.ProjectEndDate === null )
        {
            payload.ProjectEndDate = null;
        }
        let oCompanyProject = dbCompanyProjectReqToModel(payload);
        const objCompanyProject = await CompanyProjectModel.create(oCompanyProject);
        let retCompanyProject = dbCompanyProjectToResp(objCompanyProject);
        
        //let userProjectMastersResps!: UserProjectMasterReq[];
       
        if (payload.SOWDetails !== undefined) {
            let objSOWDetailsDal:SOWDetailsDal = new SOWDetailsDal();
            for (let index = 0; index < payload.SOWDetails.length; index++) {
                payload.SOWDetails[index].CompanyProjectId = retCompanyProject.CompanyProjectId;
                let sowDetail = dbSOWDetailsReqToModel(payload.SOWDetails[index]);
                if(sowDetail.SOWName === undefined
                    || sowDetail.SOWName === null
                    || sowDetail.SOWName === '')
                    {
                        continue;
                    }
                const retSowDetail:SOWDetailsResp = await objSOWDetailsDal.create(sowDetail, tokenData);
                retCompanyProject.SOWDetails?.push(retSowDetail);
            }
        }
        if (payload.BillableEmployees !== undefined) {
            let objUserProjectMasterDal: UserProjectMasterDal = new UserProjectMasterDal();
            for (let index = 0; index < payload.BillableEmployees.length; index++) {
                payload.BillableEmployees[index].CompanyProjectId = retCompanyProject.CompanyProjectId;
                //payload.BillableEmployees[index].SOWMasterId = retSOWDetails.SOWMasterId;
                payload.BillableEmployees[index].IsBillable = 1;
                let userproj = dbUserProjectMasterReqToModel(payload.BillableEmployees[index]);
                if(userproj.EmployeeDetailsId === undefined
                    || userproj.EmployeeDetailsId === null
                    || userproj.EmployeeDetailsId === 0
                    || userproj.EmployeeDetailsId === '')
                    {
                        continue;
                    }
                userproj.UserProjectMasterId = null;
                let retuserproj: UserProjectMasterSowEmployeeResp = await objUserProjectMasterDal.create(userproj);
                retCompanyProject.BillableEmployees?.push(retuserproj);
            }
        }
        if (payload.NonBillableEmployees !== undefined) {
            let objUserProjectMasterDal: UserProjectMasterDal = new UserProjectMasterDal();
            for (let index = 0; index < payload.NonBillableEmployees.length; index++) {
                payload.NonBillableEmployees[index].CompanyProjectId = retCompanyProject.CompanyProjectId;
                //payload.BillableEmployees[index].SOWMasterId = retSOWDetails.SOWMasterId;
                payload.NonBillableEmployees[index].IsBillable = 0;
                let userproj = dbUserProjectMasterReqToModel(payload.NonBillableEmployees[index]);
                if(userproj.EmployeeDetailsId === undefined
                    || userproj.EmployeeDetailsId === null
                    || userproj.EmployeeDetailsId === 0
                    || userproj.EmployeeDetailsId === '')
                    {
                        continue;
                    }
                userproj.UserProjectMasterId = null;
                let retuserproj: UserProjectMasterSowEmployeeResp = await objUserProjectMasterDal.create(userproj);
                retCompanyProject.BillableEmployees?.push(retuserproj);
            }
        }
        //let projectMilestones!: ProjectMilestoneReq[];
        if (payload.ProjectMilestones !== undefined) {
            let objProjectMilestoneDal:ProjectMilestoneDal = new ProjectMilestoneDal();
            for (let index = 0; index < payload.ProjectMilestones.length; index++) {
                if(payload.ProjectMilestones[index].MilestoneName === undefined
                    || payload.ProjectMilestones[index].MilestoneName === null
                    || payload.ProjectMilestones[index].MilestoneName === '')
                    {
                        continue;
                    }
                payload.ProjectMilestones[index].ProjectMilestoneId = undefined;
                payload.ProjectMilestones[index].CompanyProjectId = retCompanyProject.CompanyProjectId;
                let projectMilestone = dbProjectMilestoneReqToModel(payload.ProjectMilestones[index]);
                const retProjectMilestone = await objProjectMilestoneDal.create(projectMilestone);
                retCompanyProject.ProjectMilestones?.push(retProjectMilestone);
            }
        }
        return retCompanyProject;
    }

    async findOrCreate(payload: CompanyProjectReq): Promise<CompanyProjectResp> {
        let oCompanyProject = dbCompanyProjectReqToModel(payload);
        const objCompanyProject = await CompanyProjectModel.findOrCreate({
            where: {
                CompanyProjectId: oCompanyProject.CompanyProjectId
            },
            defaults: oCompanyProject
        });
        let retCompanyProject = dbCompanyProjectToResp(objCompanyProject);
        return retCompanyProject;
    }

    async update(id: number, payload: Partial<CompanyProjectReq>, tokenData:LoginDetailsResp): Promise<CompanyProjectResp> {
        const objCompanyProject = await CompanyProjectModel.findByPk(id)

        if (!objCompanyProject) {
            // @todo throw custom error
            throw new Error('not found');
        }
        let oCompanyProject = dbCompanyProjectReqToModel(payload);
        if(oCompanyProject.ProjectEndDate === undefined || oCompanyProject.ProjectEndDate === '')
        {
            oCompanyProject.ProjectEndDate = null;
        }
        
        const updatedCompanyProject = await objCompanyProject.update(oCompanyProject);
        let retCompanyProject = dbCompanyProjectToResp(updatedCompanyProject);
        return retCompanyProject;
    }

    // async addNonBillable(id: number, payload: Partial<CompanyProjectNonBillableReq>, tokenData:LoginDetailsResp): Promise<CompanyProjectResp|null> {

    //     const objCompanyProject = await CompanyProjectModel.findByPk(id);

    //     if (!objCompanyProject) {
    //         // @todo throw custom error
    //         throw new Error('not found');
    //     }
        
    //     let oCompanyProject = CompanyProjectNonBillableReqtoDB(payload);

    //     oCompanyProject.upm.forEach(async (element:any) => {
    //         element.CompanyProjectId = id;
    //         element.IsBillable=0;
            
    //         if(element.UserProjectMasterId==undefined)
    //         await UserProjectMasterModel.create(element);
    //     });

    //     return await this.getById(id, tokenData);
    // }
    
    async getById(id: number, tokenData:LoginDetailsResp): Promise<CompanyProjectResp|null> {

        try {

        let whereBu: any = {};
        if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles))
        {
            whereBu = {
                HeadEmployeeId: tokenData.EmployeeDetails.EmployeeDetailsId
            }       

        }
        // const objCompanyProject = await CompanyProjectModel.findByPk(id, {
        //     include: [
        //         {
        //             as: "mbu",
        //             model: MasterBusinessUnitModel,
        //             where:   whereBu     
        //         },
        //         {
        //             required: false,
        //             as: "upm",
        //             model: UserProjectMasterModel,
        //             where: {
        //                 IsBillable: 0
        //             }              
        //         },
        //         {
        //             required: false,
        //             model: SOWDetailsModel,
        //             as: 'sd',
        //             // where: {
        //             //     EndDate : 
        //             //     {
        //             //         [Op.gte]: sequelize.fn('GETDATE')
        //             //     }
        //             // },
        //             include: [
        //                 {
        //                     required: false,
        //                     as: 'upm',
        //                     model: UserProjectMasterModel,
        //                     where: {
        //                         IsBillable: 1
        //                     },
        //                     include: [
        //                         {
        //                             required: false,
        //                             as: 'ev',
        //                             model: EmployeeViewModel
        //                         }
        //                     ]
        //                 }
        //             ]
        //         },
        //         {
        //             required: false,
        //             model: ProjectMilestoneModel,
        //             as: 'pm',
        //             // include: [
        //             //     {
        //             //         required: false,
        //             //         as: 'upm',
        //             //         model: UserProjectMasterModel,
        //             //     }
        //             // ]
        //         }
        //     ],
        //     order: [
        //             [{ model: SOWDetailsModel, as: 'sd'}, 'SOWMasterId', 'asc']
        //     ],
        //     //rejectOnEmpty: true // Specifying true here removes `null` from the return type!
        // });
        const objCompanyProjectSow = await CompanyProjectModel.findByPk(id, {
            include: [
                {
                    as: "mbu",
                    model: MasterBusinessUnitModel,
                    where:   whereBu     
                },
                {
                    required: false,
                    as: 'upm',
                    model: UserProjectMasterModel,
                    where: {
                        IsBillable: 1
                    },
                    include: [
                        {
                            required: true,
                            as: 'ev',
                            model: EmployeeViewModel,
                            attributes:['FirstName', 'MiddleName', 'LastName', 'Designation']
                        }
                    ]
                },
                {
                    required: false,
                    model: SOWDetailsModel,
                    as: 'sd',
                    // where: {
                    //     EndDate : 
                    //     {
                    //         [Op.gte]: sequelize.fn('GETDATE')
                    //     }
                    // },
                    // include: [
                    //     {
                    //         required: false,
                    //         as: 'upm',
                    //         model: UserProjectMasterModel,
                    //         where: {
                    //             IsBillable: 1
                    //         },
                    //         include: [
                    //             {
                    //                 required: true,
                    //                 as: 'ed',
                    //                 model: EmployeeDetailsModel
                    //             }
                    //         ]
                    //     }
                    // ]
                },
                {
                    as: "cli",
                    model: ClientsModel,
                    required:true
                }
            ],
            order: [
                    [{ model: SOWDetailsModel, as: 'sd'}, 'SOWMasterId', 'asc']
            ],
            //rejectOnEmpty: true // Specifying true here removes `null` from the return type!
        });
        
        const objCompanyProjectNonBillable = await CompanyProjectModel.findByPk(id, {
            include: [
                {
                    as: "mbu",
                    model: MasterBusinessUnitModel,
                    where:   whereBu     
                },
                {
                    required: true,
                    as: "upm",
                    model: UserProjectMasterModel,
                    where: {
                        IsBillable: 0
                    },
                    include: [
                        {
                            required: true,
                            as: 'ev',
                            model: EmployeeViewModel,
                            attributes:['FirstName', 'MiddleName', 'LastName', 'Designation']
                        }
                    ]              
                },
            ]
        });

        const objCompanyProjectMilestone = await CompanyProjectModel.findByPk(id, {
            include: [
                {
                    as: "mbu",
                    model: MasterBusinessUnitModel,
                    where:   whereBu     
                },
                {
                    required: true,
                    model: ProjectMilestoneModel,
                    as: 'pm',
                    // include: [
                    //     {
                    //         required: false,
                    //         as: 'upm',
                    //         model: UserProjectMasterModel,
                    //         include:[
                    //             {
                    //                 required: true,
                    //                 as: 'ed',
                    //                 model: EmployeeDetailsModel,
                    //             }
                    //         ]
                    //     }
                    // ]
                }
            ]
        });        

        const merge1 = _.mergeWith(objCompanyProjectSow?.dataValues, objCompanyProjectNonBillable?.dataValues, this.customizer);
        const objCompanyProject = _.mergeWith(merge1, objCompanyProjectMilestone?.dataValues);
        //const objCompanyProject = { ...objCompanyProjectSow?.dataValues, ...objCompanyProjectNonBillable?.dataValues, ...objCompanyProjectMilestone?.dataValues };
        
        let retCompanyProject = dbCompanyProjectToResp(objCompanyProject);

        //let finalCompanyProject:any=retCompanyProject;

        //let objEmployeeDetailsDal=new EmployeeDetailsDal();
        //finalCompanyProject=await objEmployeeDetailsDal.getEmployeeNamesAndDesignation(finalCompanyProject,tokenData);

        return retCompanyProject;
        } catch (error: any) {
            return null;
        }

    }
    customizer(objValue:any, srcValue:any) {
      if (_.isArray(objValue)) {
        return objValue.concat(srcValue);
      }
    }

    async getAll(filters: CompanyProjectReq, tokenData:LoginDetailsResp): Promise<CompanyProjectResp[]> {
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
        // {
            if (filters && filters.hasOwnProperty('companyprojectid')) {
                where.CompanyProjectId = this.getParameterCaseInsensitive(filters, 'companyprojectid');
            }
            if (filters && filters.hasOwnProperty('projectname')) {
                const projectName = this.getParameterCaseInsensitive(filters, 'projectname');
                if ( projectName !== undefined && projectName !== "") {
                    where.ProjectName = { [Op.like]: '%' + projectName + '%' }
                }
            }
            if (filters && filters.hasOwnProperty('projecttechnology')) {
                where.ProjectTechnology = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'projecttechnology') + '%' }
            }
            if (filters && filters.hasOwnProperty('projectphaseid')) {
                where.ProjectPhaseId = this.getParameterCaseInsensitive(filters, 'projectphaseid');
            }
            if (filters && filters.hasOwnProperty('projectstartdate')) {
                where.ProjectStartDate = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'projectstartdate') + '%' }
            }
            if (filters && filters.hasOwnProperty('projectenddate')) {
                where.ProjectEndDate = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'projectenddate') + '%' }
            }

            /*
            project status
            empty string : returns all project
            -1 : return completed project
            other than -1 : return active project
            
            */
            if (filters && filters.hasOwnProperty('projectstatus')) {
                const projectStatus = this.getParameterCaseInsensitive(filters, 'projectstatus');
                if (projectStatus !== ''){
                    where.projectstatus = projectStatus === '-1' ? projectStatus : { [Op.not]: -1};  
                }
            }
            if (filters && filters.hasOwnProperty('clientname')) {
                where.ClientName = { [Op.like]: '%' + this.getParameterCaseInsensitive(filters, 'clientname') + '%' }
            }
           
            if (filters && filters.hasOwnProperty('projecttype')) {
                const projecttype = this.getParameterCaseInsensitive(filters, 'projecttype');
                if(projecttype !== undefined && projecttype !== '')
                {
                    where.ProjectType = projecttype;
                }
            }
            if (filters && filters.hasOwnProperty('clientid')) {
                where.ClientId = this.getParameterCaseInsensitive(filters, 'clientid');
            }
        // }

        let whereBu: any = {};
        if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles))
        {
            // get projects, which belog to employeedetails BU only
            whereBu = {
                HeadEmployeeId: tokenData.EmployeeDetails.EmployeeDetailsId
            }       

        }
        let objCompanyProjects = await CompanyProjectModel.findAll({
            where: where,
            include: [
                {
                    as: "mbu",
                    model: MasterBusinessUnitModel,
                    where:   whereBu     
                },
                {
                    as: "cli",
                    model: ClientsModel,
                    required:true
                }
            ]
        }
        );
        let retCompanyProjectResp!: CompanyProjectResp[];
        retCompanyProjectResp = objCompanyProjects.map(dbCompanyProjectToResp);
        return retCompanyProjectResp;

    }
    async lookup(keyword: string, tokenData:LoginDetailsResp): Promise<CompanyProjectLookupResp[]> {
        let where: any = {};
        if(keyword==='all')
        {
            keyword = '';
        }
        where.ProjectName = { [Op.like]: '%' + keyword + '%' }
        let whereBu: any = {};
        if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles))
        {
            // get projects, which belog to employeedetails BU only
            whereBu = {
                HeadEmployeeId: tokenData.EmployeeDetails.EmployeeDetailsId
            }       

        }
        let bActive = true;
        if(bActive) {
            where.projectstatus =  { [Op.ne] : -1};
        } else {
            where.projectstatus =  -1;
        }
        let objCompanyProjects = await CompanyProjectModel.findAll({
            where: where,
            include: [
                {
                    as: "mbu",
                    model: MasterBusinessUnitModel,
                    where:   whereBu     
                },
            ]
        }
        );
        let retCompanyProjectLookupResp!: CompanyProjectLookupResp[];
        retCompanyProjectLookupResp = objCompanyProjects.map(dbToCompanyProjectLookupResp);
        return retCompanyProjectLookupResp;

    }

    // async updateNonBillable(id: number, payload: Partial<CompanyProjectNonBillableReq>, tokenData:LoginDetailsResp): Promise<CompanyProjectResp|null> {

    //     const objCompanyProject = await CompanyProjectModel.findByPk(id);
    //     if (!objCompanyProject) {
    //         // @todo throw custom error
    //         throw new Error('not found');
    //     }
    //     let oCompanyProject = CompanyProjectNonBillableReqtoDB(payload);
        
    //     oCompanyProject.upm.forEach(async (element:any) => {
    //         element.CompanyProjectId = id;
    //         element.IsBillable=0;

    //         if(element.UserProjectMasterId==undefined){
    //             await UserProjectMasterModel.create(element);
    //         }
    //         else{
    //             await UserProjectMasterModel.update(element, { where: { UserProjectMasterId : element.UserProjectMasterId}});
    //         }
    //     });
    //     return await this.getById(id, tokenData);
    // }
    
    async updateProjectById(id: number, payload: Partial<CompanyProjectReq>, tokenData:LoginDetailsResp): Promise<CompanyProjectResp|null>{

        const objCompanyProject = await CompanyProjectModel.findByPk(id);
        if (!objCompanyProject) {
            // @todo throw custom error
            throw new Error('not found');
        }   

        if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles)
            || Helpers.IsFinance(tokenData.EmployeeDetails.EmployeeDetailRoles)){

            let NonBillableResources = CompanyProjectNonBillableReqtoDB(payload);

            NonBillableResources = NonBillableResources.filter((userproj:any) =>{
                if(userproj !== undefined
                    && (userproj.EmployeeDetailsId !== undefined
                        && userproj.EmployeeDetailsId !== null
                        && userproj.EmployeeDetailsId !== 0
                        && userproj.EmployeeDetailsId !== '')
                    ) {
                  return true;
                }
                return false;
            });

            NonBillableResources.forEach(async (userproj:any) => {
                userproj.CompanyProjectId = id;
                userproj.IsBillable=0;
                if((userproj.EmployeeDetailsId !== undefined
                        && userproj.EmployeeDetailsId !== null
                        && userproj.EmployeeDetailsId !== 0
                        && userproj.EmployeeDetailsId !== '')
                    ) {
                    if(userproj.UserProjectMasterId==undefined){
                        await UserProjectMasterModel.create(userproj);
                    }
                    else{
                        await UserProjectMasterModel.update(userproj, { where: { UserProjectMasterId : userproj.UserProjectMasterId}});
                    }
                }
            });
        }
        if(Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles)
            || Helpers.IsFinance(tokenData.EmployeeDetails.EmployeeDetailRoles)){

            let BillableEmployees = CompanyProjectBillableReqtoDB(payload);

            BillableEmployees = BillableEmployees.filter((userproj:any) =>{
                if(userproj !== undefined
                    && (userproj.EmployeeDetailsId !== undefined
                        && userproj.EmployeeDetailsId !== null
                        && userproj.EmployeeDetailsId !== 0
                        && userproj.EmployeeDetailsId !== '')
                    ) {
                  return true;
                }
                return false;
            });

            BillableEmployees.forEach(async (userproj:any) => {
                userproj.CompanyProjectId = id;
                userproj.IsBillable=1;
                if((userproj.EmployeeDetailsId !== undefined
                    && userproj.EmployeeDetailsId !== null
                    && userproj.EmployeeDetailsId !== 0
                    && userproj.EmployeeDetailsId !== '')
                ) {
                if(userproj.UserProjectMasterId==undefined){
                    await UserProjectMasterModel.create(userproj);
                }
                else{
                    await UserProjectMasterModel.update(userproj, { where: { UserProjectMasterId : userproj.UserProjectMasterId}});
                }
            }
            });
        }
        // Only finance role can edit or add milestone 
        if((Helpers.IsBuHead(tokenData.EmployeeDetails.EmployeeDetailRoles)
        || Helpers.IsFinance(tokenData.EmployeeDetails.EmployeeDetailRoles)) && payload.BillingType == 2){
            let oProjectMilestone = payload.ProjectMilestones?.map(dbProjectMilestoneReqToModel);
            
            oProjectMilestone?.forEach(async (element:any) => {
                element.CompanyProjectId = id;
                if(element.MilestoneName !== undefined
                    && element.MilestoneName !== null
                    && element.MilestoneName !== '')
                    {
                if(element.ProjectMilestoneId==undefined){
                    await ProjectMilestoneModel.create(element);
                }
                else{
                    await ProjectMilestoneModel.update(element,{ where: { ProjectMilestoneId : element.ProjectMilestoneId}});
                }
            }
            });
        }

        if(payload.SOWDetails?.length !== 0 && Helpers.IsFinance(tokenData.EmployeeDetails.EmployeeDetailRoles)){
            let objSOWDetailsDal:SOWDetailsDal = new SOWDetailsDal();
            payload.SOWDetails?.forEach(async(sowDetail:SOWDetailsReq)=>{
                if(sowDetail.SOWName !== undefined
                    && sowDetail.SOWName !== null
                    && sowDetail.SOWName !== '')
                    {
                    if(sowDetail.SOWMasterId === undefined || sowDetail.SOWMasterId <= 0)
                    { // create
                        sowDetail.CompanyProjectId = id;
                        await objSOWDetailsDal.create(sowDetail, tokenData);
                    } else {
                        // update
                        sowDetail.CompanyProjectId = id;
                        await objSOWDetailsDal.update(sowDetail.SOWMasterId, sowDetail, tokenData);
                    }
                }
            });
            // let SOWDetails = payload.SOWDetails?.map(dbSOWDetailsReqToModel);
        
            // SOWDetails?.forEach(async(sowDetail:any)=>{

            //     if(sowDetail.SOWMasterId === undefined || sowDetail.SOWMasterId <= 0)
            //     { // new sow details
                    
            //     } else {

            //     }
            //     sowDetail.upm.forEach(async (element:any) => {
            //         element.CompanyProjectId = id;
            //         element.IsBillable=1;
            //         element.SOWMasterId=milestoneObject.SOWMasterId;
            //         if(element.UserProjectMasterId==undefined){
            //             await UserProjectMasterModel.create(element);
            //         }
            //         else {
            //             await UserProjectMasterModel.update(element,{ where: { UserProjectMasterId : element.UserProjectMasterId}});
            //         }
            //     });
            // })
        }

        let oCompanyProject = dbCompanyProjectReqToModel(payload);
        if(oCompanyProject.ProjectEndDate === undefined || oCompanyProject.ProjectEndDate === '')
        {
            oCompanyProject.ProjectEndDate = null;
        }
        if(oCompanyProject.projectstatus === undefined || oCompanyProject.projectstatus === '')
        {
            oCompanyProject.projectstatus = 1;
        }
        await objCompanyProject.update(oCompanyProject);
        return await this.getById(id, tokenData);

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