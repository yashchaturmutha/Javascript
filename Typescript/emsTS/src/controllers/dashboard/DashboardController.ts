
import { Response, NextFunction } from "express"
import { CustomRequest } from "../../common/auth.middleware";
import { DashboardService } from "../../services/dashboard/DashboardService";

class DashboardController {
    constructor() { }
    async getBUSummary(req: any, res: Response, next: NextFunction) {
        try {
            const params = req.query;
            let payload: any = {};
            for (let key in params) {
                payload[key.toLowerCase()] = params[key];
            }
            const objDashboardService = new DashboardService();
            const result2 = await objDashboardService.getBUSummary((req as CustomRequest).tokenData);
            return res.status(200).send(result2);
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    }
}
export default new DashboardController()