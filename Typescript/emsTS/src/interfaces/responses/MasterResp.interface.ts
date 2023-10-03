import { DepartmentMasterResp } from "./DepartmentMasterResp.interface";
import { DesignationMasterResp } from "./DesignationMasterResp.interface";
import { MasterBusinessUnitResp } from "./MasterBusinessUnitResp.interface";
import { MasterCompanyLocationResp } from "./MasterCompanyLocationResp.interface";
import { MasterEmployeeTypeResp } from "./MasterEmployeeTypeResp.interface";
import { MasterGenderResp } from "./MasterGenderResp.interface";
import { MasterProjectTypeResp } from "./MasterProjectTypeResp.interface";

export class MasterResp {
    constructor()
    {
        this.DepartmentMaster = [];
        this.DesignationMaster = [];
        this.MasterBusinessUnit = [];
        this.MasterCompanyLocation = [];
        this.MasterEmployeeType = [];
        this.MasterGender = [];
        this.MasterProjectType = [];
    }
    public DepartmentMaster:DepartmentMasterResp[];
    public DesignationMaster:DesignationMasterResp[];
    public MasterBusinessUnit:MasterBusinessUnitResp[];
    public MasterCompanyLocation:MasterCompanyLocationResp[];
    public MasterEmployeeType:MasterEmployeeTypeResp[];
    public MasterGender:MasterGenderResp[];
    public MasterProjectType: MasterProjectTypeResp[];
}
