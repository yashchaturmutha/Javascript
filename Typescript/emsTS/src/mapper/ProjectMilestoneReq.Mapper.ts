import {ProjectMilestoneReq} from '../interfaces/requests/ProjectMilestoneReq.interface'

export const dbProjectMilestoneReqToModel = (objProjectMilestone: Partial<ProjectMilestoneReq>): any => {
    return {
        ProjectMilestoneId:objProjectMilestone.ProjectMilestoneId,
        CompanyProjectId:objProjectMilestone.CompanyProjectId,
        MilestoneName:objProjectMilestone.MilestoneName,
        MilestoneDesc:objProjectMilestone.MilestoneDesc,
        Amount:objProjectMilestone.Amount,
        StartDate:objProjectMilestone.StartDate,
        EndDate:objProjectMilestone.EndDate,
    }
}


