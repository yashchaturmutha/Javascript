import { ProjectMilestoneResp } from "../interfaces/responses/ProjectMilestoneResp.interface"
import { UserProjectMasterResp } from "../interfaces/responses/UserProjectMasterResp.interface";
import { dbUserProjectMasterModelToResp } from "./UserProjectMasterResp.Mapper";

export const dbProjectMilestoneModelToResp = (objProjectMilestone: any): ProjectMilestoneResp => {

    let userProjectMastersResps: UserProjectMasterResp[] = [];;
    if (objProjectMilestone.UserProjectMasters !== undefined) {
        userProjectMastersResps = objProjectMilestone.UserProjectMasters.map(dbUserProjectMasterModelToResp);
    } else if (objProjectMilestone.upm !== undefined) {
        userProjectMastersResps = objProjectMilestone.upm.map(dbUserProjectMasterModelToResp);
    }
    return {

        ProjectMilestoneId: objProjectMilestone.ProjectMilestoneId,
        CompanyProjectId: objProjectMilestone.CompanyProjectId,
        MilestoneName: objProjectMilestone.MilestoneName,
        MilestoneDesc: objProjectMilestone.MilestoneDesc,
        Amount: objProjectMilestone.Amount,
        StartDate: objProjectMilestone.StartDate,
        EndDate: objProjectMilestone.EndDate,
        Employees: userProjectMastersResps
    }
}
