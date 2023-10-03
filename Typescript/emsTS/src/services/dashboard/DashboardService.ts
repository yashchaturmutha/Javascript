import { DashboardResp } from '../../interfaces/responses/DashboardResp';
import { LoginDetailsResp } from '../../interfaces/responses/LoginDetailsResp';
import { DashboardDal } from '../../db/dal/DashboardDal';

export class DashboardService {
    private objDashboardDal: DashboardDal = new DashboardDal();
    public getBUSummary = (tokenData: LoginDetailsResp): Promise<DashboardResp> => {
        return this.objDashboardDal.getBUSummary(tokenData)
    }
}