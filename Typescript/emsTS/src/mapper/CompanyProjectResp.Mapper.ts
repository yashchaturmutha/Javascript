import { CompanyProjectResp } from '../interfaces/responses/CompanyProjectResp.interface'
import { UserProjectMasterResp } from '../interfaces/responses/UserProjectMasterResp.interface';
import {SOWDetailsResp} from '../interfaces/responses/SOWDetailsResp.interface'
import { dbSOWDetailsModelToResp } from './SOWDetailsResp.Mapper';
import { dbUserProjectMasterModelToResp } from './UserProjectMasterResp.Mapper'
import { ProjectMilestoneResp } from '../interfaces/responses/ProjectMilestoneResp.interface';
import { MasterBusinessUnitResp } from '../interfaces/responses/MasterBusinessUnitResp.interface';
import { dbProjectMilestoneModelToResp } from './ProjectMilestoneResp.Mapper';
import { dbMasterBusinessUnitToResp } from './MasterMapper';
import { CompanyProjectLookupResp } from '../interfaces/responses/CompanyProjectResp.interface';
import { ClientsResp } from '../interfaces/responses/ClientsResp.interface';
import { dbClientsToResp } from './ClientsResp.Mapper';

export const dbCompanyProjectToResp = (objCompanyProject: any): CompanyProjectResp => {

    let userProjectMastersResps: UserProjectMasterResp[] = [];
    if (objCompanyProject.UserProjectMasters !== undefined) {
        userProjectMastersResps = objCompanyProject.UserProjectMasters.map(dbUserProjectMasterModelToResp);
    } else if (objCompanyProject.upm !== undefined) {
        userProjectMastersResps = objCompanyProject.upm.map(dbUserProjectMasterModelToResp);
    }
    const billableEmployees =userProjectMastersResps.filter((data: any) => { if(data.IsBillable) return data});
    const nonBillableEmployees =userProjectMastersResps.filter((data: any) => { if(!data.IsBillable) return data});

    let sOWDetails: SOWDetailsResp[] = [];
    if (objCompanyProject.sd !== undefined) {
        sOWDetails = objCompanyProject.sd.map(dbSOWDetailsModelToResp);
    }
    
    let projectMilestones: ProjectMilestoneResp[] = [];
    if (objCompanyProject.pm !== undefined) {
        projectMilestones = objCompanyProject.pm.map(dbProjectMilestoneModelToResp);
    }
    
    let masterBusinessUnit : MasterBusinessUnitResp;
    let businessUnitName : string = "";
    if( objCompanyProject.mbu && objCompanyProject.mbu.length > 0 ) {
        masterBusinessUnit = dbMasterBusinessUnitToResp(objCompanyProject.mbu[0]);
        businessUnitName = masterBusinessUnit.BusinessUnitName;
    }

    let projectClient : ClientsResp;
    let ClientName : string = "";
    if( objCompanyProject.cli !== undefined) {
        projectClient = dbClientsToResp(objCompanyProject.cli);
        ClientName = projectClient.ClientName;
    }

    return {
        CompanyProjectId: objCompanyProject.CompanyProjectId,
        ProjectName: objCompanyProject.ProjectName,
        ProjectTechnology: objCompanyProject.ProjectTechnology,
        ProjectPhaseId: objCompanyProject.ProjectPhaseId,
        ProjectStartDate: objCompanyProject.ProjectStartDate,
        ProjectEndDate: objCompanyProject.ProjectEndDate,
        projectstatus: objCompanyProject.projectstatus,
        ClientName: ClientName,
        MasterBusinessUnit: objCompanyProject.MasterBusinessUnit,
        MasterBusinessUnitName: businessUnitName,
        ProjectType: objCompanyProject.ProjectType,
        ClientId: objCompanyProject.ClientId,
        TeamSize: objCompanyProject.TeamSize,
        Currency: objCompanyProject.Currency,
        BillingType: objCompanyProject.BillingType,
        SOWDetails: sOWDetails,
        ProjectMilestones: projectMilestones,
        BillableEmployees: billableEmployees,
        NonBillableEmployees: nonBillableEmployees
    }
}


export const dbToCompanyProjectLookupResp = (objCompanyProject: any): CompanyProjectLookupResp => {
    return {
        CompanyProjectId: objCompanyProject.CompanyProjectId,
        ProjectName: objCompanyProject.ProjectName
    }
}