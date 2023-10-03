import type { Sequelize } from "sequelize";
import { AppraisalDurationMaster as _AppraisalDurationMaster } from "./AppraisalDurationMaster";
import type { AppraisalDurationMasterAttributes, AppraisalDurationMasterCreationAttributes } from "./AppraisalDurationMaster";
import { AppraisalFinalCalculation as _AppraisalFinalCalculation } from "./AppraisalFinalCalculation";
import type { AppraisalFinalCalculationAttributes, AppraisalFinalCalculationCreationAttributes } from "./AppraisalFinalCalculation";
import { AppraisalPhaseDurationMaster as _AppraisalPhaseDurationMaster } from "./AppraisalPhaseDurationMaster";
import type { AppraisalPhaseDurationMasterAttributes, AppraisalPhaseDurationMasterCreationAttributes } from "./AppraisalPhaseDurationMaster";
import { AppraisalPhaseMaster as _AppraisalPhaseMaster } from "./AppraisalPhaseMaster";
import type { AppraisalPhaseMasterAttributes, AppraisalPhaseMasterCreationAttributes } from "./AppraisalPhaseMaster";

import { BankDetails as _BankDetails } from "./BankDetails";
import type { BankDetailsAttributes, BankDetailsCreationAttributes } from "./BankDetails";
import { BikeCarDetails as _BikeCarDetails } from "./BikeCarDetails";
import type { BikeCarDetailsAttributes, BikeCarDetailsCreationAttributes } from "./BikeCarDetails";
import { CompanyAsset as _CompanyAsset } from "./CompanyAsset";
import type { CompanyAssetAttributes, CompanyAssetCreationAttributes } from "./CompanyAsset";

import { Clients as _Clients } from "./Clients";
import type { ClientAttributes, ClientCreationAttributes } from "./Clients";

import { CompanyProject as _CompanyProject } from "./CompanyProject";
import type { CompanyProjectAttributes, CompanyProjectCreationAttributes } from "./CompanyProject";

import { CurrentCompanyDetails as _CurrentCompanyDetails } from "./CurrentCompanyDetails";
import type { CurrentCompanyDetailsAttributes, CurrentCompanyDetailsCreationAttributes } from "./CurrentCompanyDetails";
import { DailyAttendance as _DailyAttendance } from "./DailyAttendance";
import type { DailyAttendanceAttributes, DailyAttendanceCreationAttributes } from "./DailyAttendance";
import { DailyAttendanceRegularize as _DailyAttendanceRegularize } from "./DailyAttendanceRegularize";
import type { DailyAttendanceRegularizeAttributes, DailyAttendanceRegularizeCreationAttributes } from "./DailyAttendanceRegularize";
import { DailyAttendanceRegularizeLeaders as _DailyAttendanceRegularizeLeaders } from "./DailyAttendanceRegularizeLeaders";
import type { DailyAttendanceRegularizeLeadersAttributes, DailyAttendanceRegularizeLeadersCreationAttributes } from "./DailyAttendanceRegularizeLeaders";
import { DailyTask as _DailyTask } from "./DailyTask";
import type { DailyTaskAttributes, DailyTaskCreationAttributes } from "./DailyTask";
import { DepartmentMaster as _DepartmentMaster } from "./DepartmentMaster";
import type { DepartmentMasterAttributes, DepartmentMasterCreationAttributes } from "./DepartmentMaster";
import { DesignationKRA as _DesignationKRA } from "./DesignationKRA";
import type { DesignationKRAAttributes, DesignationKRACreationAttributes } from "./DesignationKRA";
import { DesignationKRACount as _DesignationKRACount } from "./DesignationKRACount";
import type { DesignationKRACountAttributes, DesignationKRACountCreationAttributes } from "./DesignationKRACount";
import { DesignationMaster as _DesignationMaster } from "./DesignationMaster";
import type { DesignationMasterAttributes, DesignationMasterCreationAttributes } from "./DesignationMaster";
import { EducationalDetails as _EducationalDetails } from "./EducationalDetails";
import type { EducationalDetailsAttributes, EducationalDetailsCreationAttributes } from "./EducationalDetails";
import { EmergencyDetails as _EmergencyDetails } from "./EmergencyDetails";
import type { EmergencyDetailsAttributes, EmergencyDetailsCreationAttributes } from "./EmergencyDetails";
import { EmployeeAppraisalStatus as _EmployeeAppraisalStatus } from "./EmployeeAppraisalStatus";
import type { EmployeeAppraisalStatusAttributes, EmployeeAppraisalStatusCreationAttributes } from "./EmployeeAppraisalStatus";
import { EmployeeDetailRole as _EmployeeDetailRole } from "./EmployeeDetailRole";
import type { EmployeeDetailRoleAttributes, EmployeeDetailRoleCreationAttributes } from "./EmployeeDetailRole";

import { EmployeeView as _EmployeeView, EmployeeViewAttributes } from "./EmployeeView";
import { EmployeeDetails as _EmployeeDetails } from "./EmployeeDetails";

import type { EmployeeDetailsAttributes, EmployeeDetailsCreationAttributes } from "./EmployeeDetails";

import { EmployeeDocuments as _EmployeeDocuments } from "./EmployeeDocuments";
import type { EmployeeDocumentsAttributes, EmployeeDocumentsCreationAttributes } from "./EmployeeDocuments";
import { EmployeeKRA as _EmployeeKRA } from "./EmployeeKRA";
import type { EmployeeKRAAttributes, EmployeeKRACreationAttributes } from "./EmployeeKRA";
import { EmployeeManager as _EmployeeManager } from "./EmployeeManager";
import type { EmployeeManagerAttributes, EmployeeManagerCreationAttributes } from "./EmployeeManager";
import { EmployeeResume as _EmployeeResume } from "./EmployeeResume";
import type { EmployeeResumeAttributes, EmployeeResumeCreationAttributes } from "./EmployeeResume";
import { FileUpdateDetails as _FileUpdateDetails } from "./FileUpdateDetails";
import type { FileUpdateDetailsAttributes, FileUpdateDetailsCreationAttributes } from "./FileUpdateDetails";
import { KRAMaster as _KRAMaster } from "./KRAMaster";
import type { KRAMasterAttributes, KRAMasterCreationAttributes } from "./KRAMaster";
import { KRAMasterTypes as _KRAMasterTypes } from "./KRAMasterTypes";
import type { KRAMasterTypesAttributes, KRAMasterTypesCreationAttributes } from "./KRAMasterTypes";


import { LoginDetails as _LoginDetails } from "./LoginDetails";
import type { LoginDetailsAttributes, LoginDetailsCreationAttributes } from "./LoginDetails";
import { MasterBusinessUnit as _MasterBusinessUnit } from "./MasterBusinessUnit";
import type { MasterBusinessUnitAttributes, MasterBusinessUnitCreationAttributes } from "./MasterBusinessUnit";
import { MasterCompanyLocation as _MasterCompanyLocation } from "./MasterCompanyLocation";
import type { MasterCompanyLocationAttributes, MasterCompanyLocationCreationAttributes } from "./MasterCompanyLocation";
import { MasterEmployeeType as _MasterEmployeeType } from "./MasterEmployeeType";
import { MasterProjectType as _MasterProjectType } from "./MasterProjectType";

import type { MasterEmployeeTypeAttributes, MasterEmployeeTypeCreationAttributes } from "./MasterEmployeeType";
import { MasterGender as _MasterGender } from "./MasterGender";
import type { MasterGenderAttributes, MasterGenderCreationAttributes } from "./MasterGender";
import { MasterRoles as _MasterRoles } from "./MasterRoles";
import type { MasterRolesAttributes, MasterRolesCreationAttributes } from "./MasterRoles";
import { MenuPagesRoles as _MenuPagesRoles } from "./MenuPagesRoles";
import type { MenuPagesRolesAttributes, MenuPagesRolesCreationAttributes } from "./MenuPagesRoles";
import { MessageDetails as _MessageDetails } from "./MessageDetails";
import type { MessageDetailsAttributes, MessageDetailsCreationAttributes } from "./MessageDetails";
import { OfficeHoliday as _OfficeHoliday } from "./OfficeHoliday";
import type { OfficeHolidayAttributes, OfficeHolidayCreationAttributes } from "./OfficeHoliday";
import { PreviousCompanyDetails as _PreviousCompanyDetails } from "./PreviousCompanyDetails";
import type { PreviousCompanyDetailsAttributes, PreviousCompanyDetailsCreationAttributes } from "./PreviousCompanyDetails";
import { ProjectPhase as _ProjectPhase } from "./ProjectPhase";
import type { ProjectPhaseAttributes, ProjectPhaseCreationAttributes } from "./ProjectPhase";
import { SOWDetails as _SOWDetails } from "./SOWDetails";
import type { SOWDetailsAttributes, SOWDetailsCreationAttributes } from "./SOWDetails";
import { SecurityQuetion as _SecurityQuetion } from "./SecurityQuetion";
import type { SecurityQuetionAttributes, SecurityQuetionCreationAttributes } from "./SecurityQuetion";
import { TaskDetails as _TaskDetails } from "./TaskDetails";
import type { TaskDetailsAttributes, TaskDetailsCreationAttributes } from "./TaskDetails";

import type { TicketsAttributes, TicketsCreationAttributes } from "./Tickets";
import { UserProjectMaster as _UserProjectMaster } from "./UserProjectMaster";
import { ProjectMilestone as _ProjectMilestone, ProjectMilestoneAttributes } from "./ProjectMilestone";
import type { UserProjectMasterAttributes, UserProjectMasterCreationAttributes } from "./UserProjectMaster";


export type {
  AppraisalDurationMasterAttributes,
  AppraisalDurationMasterCreationAttributes,
  AppraisalFinalCalculationAttributes,
  AppraisalFinalCalculationCreationAttributes,
  AppraisalPhaseDurationMasterAttributes,
  AppraisalPhaseDurationMasterCreationAttributes,
  AppraisalPhaseMasterAttributes,
  AppraisalPhaseMasterCreationAttributes,
  BankDetailsAttributes,
  BankDetailsCreationAttributes,
  BikeCarDetailsAttributes,
  BikeCarDetailsCreationAttributes,
  CompanyAssetAttributes,
  CompanyAssetCreationAttributes,
  CompanyProjectAttributes,
  CompanyProjectCreationAttributes,
  CurrentCompanyDetailsAttributes,
  CurrentCompanyDetailsCreationAttributes,
  DailyAttendanceAttributes,
  DailyAttendanceCreationAttributes,
  DailyAttendanceRegularizeAttributes,
  DailyAttendanceRegularizeCreationAttributes,
  DailyAttendanceRegularizeLeadersAttributes,
  DailyAttendanceRegularizeLeadersCreationAttributes,
  DailyTaskAttributes,
  DailyTaskCreationAttributes,
  DepartmentMasterAttributes,
  DepartmentMasterCreationAttributes,
  DesignationKRAAttributes,
  DesignationKRACreationAttributes,
  DesignationKRACountAttributes,
  DesignationKRACountCreationAttributes,
  DesignationMasterAttributes,
  DesignationMasterCreationAttributes,
  EducationalDetailsAttributes,
  EducationalDetailsCreationAttributes,
  EmergencyDetailsAttributes,
  EmergencyDetailsCreationAttributes,
  EmployeeAppraisalStatusAttributes,
  EmployeeAppraisalStatusCreationAttributes,
  EmployeeDetailRoleAttributes,
  EmployeeDetailRoleCreationAttributes,
  EmployeeViewAttributes,
  EmployeeDetailsAttributes,
  EmployeeDetailsCreationAttributes,
  EmployeeDocumentsAttributes,
  EmployeeDocumentsCreationAttributes,
  EmployeeKRAAttributes,
  EmployeeKRACreationAttributes,
  EmployeeManagerAttributes,
  EmployeeManagerCreationAttributes,
  EmployeeResumeAttributes,
  EmployeeResumeCreationAttributes,
  FileUpdateDetailsAttributes,
  FileUpdateDetailsCreationAttributes,
  KRAMasterAttributes,
  KRAMasterCreationAttributes,
  KRAMasterTypesAttributes,
  KRAMasterTypesCreationAttributes,
  LoginDetailsAttributes,
  LoginDetailsCreationAttributes,
  MasterBusinessUnitAttributes,
  MasterBusinessUnitCreationAttributes,
  MasterCompanyLocationAttributes,
  MasterCompanyLocationCreationAttributes,
  MasterEmployeeTypeAttributes,
  MasterEmployeeTypeCreationAttributes,
  MasterGenderAttributes,
  MasterGenderCreationAttributes,
  MasterRolesAttributes,
  MasterRolesCreationAttributes,
  MenuPagesRolesAttributes,
  MenuPagesRolesCreationAttributes,
  MessageDetailsAttributes,
  MessageDetailsCreationAttributes,
  OfficeHolidayAttributes,
  OfficeHolidayCreationAttributes,
  PreviousCompanyDetailsAttributes,
  PreviousCompanyDetailsCreationAttributes,
  ProjectPhaseAttributes,
  ProjectPhaseCreationAttributes,

  SOWDetailsAttributes,
  SOWDetailsCreationAttributes,
  SecurityQuetionAttributes,
  SecurityQuetionCreationAttributes,
  TaskDetailsAttributes,
  TaskDetailsCreationAttributes,
  TicketsAttributes,
  TicketsCreationAttributes,
  UserProjectMasterAttributes,
  UserProjectMasterCreationAttributes,
  ProjectMilestoneAttributes
};

export function initModels(sequelize: Sequelize) {
  const AppraisalDurationMaster = _AppraisalDurationMaster.initModel(sequelize);
  const AppraisalFinalCalculation = _AppraisalFinalCalculation.initModel(sequelize);
  const AppraisalPhaseDurationMaster = _AppraisalPhaseDurationMaster.initModel(sequelize);
  const AppraisalPhaseMaster = _AppraisalPhaseMaster.initModel(sequelize);
  const BankDetails = _BankDetails.initModel(sequelize);
  const BikeCarDetails = _BikeCarDetails.initModel(sequelize);
  const Clients = _Clients.initModel(sequelize);
  const CompanyAsset = _CompanyAsset.initModel(sequelize);
  const CompanyProject = _CompanyProject.initModel(sequelize);
  const CurrentCompanyDetails = _CurrentCompanyDetails.initModel(sequelize);
  const DailyAttendance = _DailyAttendance.initModel(sequelize);
  const DailyAttendanceRegularize = _DailyAttendanceRegularize.initModel(sequelize);
  const DailyAttendanceRegularizeLeaders = _DailyAttendanceRegularizeLeaders.initModel(sequelize);
  const DailyTask = _DailyTask.initModel(sequelize);
  const DepartmentMaster = _DepartmentMaster.initModel(sequelize);
  const DesignationKRA = _DesignationKRA.initModel(sequelize);
  const DesignationKRACount = _DesignationKRACount.initModel(sequelize);
  const DesignationMaster = _DesignationMaster.initModel(sequelize);
  const EducationalDetails = _EducationalDetails.initModel(sequelize);
  const EmergencyDetails = _EmergencyDetails.initModel(sequelize);
  const EmployeeAppraisalStatus = _EmployeeAppraisalStatus.initModel(sequelize);
  const EmployeeDetailRole = _EmployeeDetailRole.initModel(sequelize);
  const EmployeeDetails = _EmployeeDetails.initModel(sequelize);
  const EmployeeView = _EmployeeView.initModel(sequelize);
  const EmployeeDocuments = _EmployeeDocuments.initModel(sequelize);
  const EmployeeKRA = _EmployeeKRA.initModel(sequelize);
  const EmployeeManager = _EmployeeManager.initModel(sequelize);
  const EmployeeResume = _EmployeeResume.initModel(sequelize);
  const FileUpdateDetails = _FileUpdateDetails.initModel(sequelize);
  const KRAMaster = _KRAMaster.initModel(sequelize);
  const KRAMasterTypes = _KRAMasterTypes.initModel(sequelize);
  const LoginDetails = _LoginDetails.initModel(sequelize);
  const MasterBusinessUnit = _MasterBusinessUnit.initModel(sequelize);
  const MasterCompanyLocation = _MasterCompanyLocation.initModel(sequelize);
  const MasterEmployeeType = _MasterEmployeeType.initModel(sequelize);
  const MasterProjectType = _MasterProjectType.initModel(sequelize);
  
  const MasterGender = _MasterGender.initModel(sequelize);
  const MasterRoles = _MasterRoles.initModel(sequelize);
  const MenuPagesRoles = _MenuPagesRoles.initModel(sequelize);
  const MessageDetails = _MessageDetails.initModel(sequelize);
  const OfficeHoliday = _OfficeHoliday.initModel(sequelize);
  const PreviousCompanyDetails = _PreviousCompanyDetails.initModel(sequelize);
  const ProjectPhase = _ProjectPhase.initModel(sequelize);
  const SOWDetails = _SOWDetails.initModel(sequelize);
  const SecurityQuetion = _SecurityQuetion.initModel(sequelize);
  const TaskDetails = _TaskDetails.initModel(sequelize);
  const UserProjectMaster = _UserProjectMaster.initModel(sequelize);
  const ProjectMilestone = _ProjectMilestone.initModel(sequelize);

  AppraisalPhaseDurationMaster.belongsTo(AppraisalDurationMaster, { as: "AppraisalDuration", foreignKey: "AppraisalDurationId" });
  AppraisalDurationMaster.hasMany(AppraisalPhaseDurationMaster, { as: "AppraisalPhaseDurationMasters", foreignKey: "AppraisalDurationId" });
  EmployeeKRA.belongsTo(AppraisalDurationMaster, { as: "AppraisalDuration", foreignKey: "AppraisalDurationId" });
  AppraisalDurationMaster.hasMany(EmployeeKRA, { as: "EmployeeKRAs", foreignKey: "AppraisalDurationId" });
  AppraisalPhaseDurationMaster.belongsTo(AppraisalPhaseMaster, { as: "AppraisalPhase", foreignKey: "AppraisalPhaseId" });
  AppraisalPhaseMaster.hasMany(AppraisalPhaseDurationMaster, { as: "AppraisalPhaseDurationMasters", foreignKey: "AppraisalPhaseId" });
  EmployeeAppraisalStatus.belongsTo(AppraisalPhaseMaster, { as: "AppraisalPhase", foreignKey: "AppraisalPhaseId" });
  AppraisalPhaseMaster.hasMany(EmployeeAppraisalStatus, { as: "EmployeeAppraisalStatuses", foreignKey: "AppraisalPhaseId" });
  EmployeeKRA.belongsTo(AppraisalPhaseMaster, { as: "AppraisalPhaseDuration", foreignKey: "AppraisalPhaseDurationId" });
  AppraisalPhaseMaster.hasMany(EmployeeKRA, { as: "EmployeeKRAs", foreignKey: "AppraisalPhaseDurationId" });
  CurrentCompanyDetails.belongsTo(DesignationMaster, { as: "DesignationMaster", foreignKey: "DesignationMasterId" });
  DesignationMaster.hasMany(CurrentCompanyDetails, { as: "CurrentCompanyDetails", foreignKey: "DesignationMasterId" });
  DesignationKRA.belongsTo(DesignationMaster, { as: "Designation", foreignKey: "DesignationId" });
  DesignationMaster.hasMany(DesignationKRA, { as: "DesignationKRAs", foreignKey: "DesignationId" });

  // EmployeeDetails relation mapping
  BankDetails.belongsTo(EmployeeDetails, { as: "EmployeeDetail", foreignKey: "EmployeeDetailsId" });
  EmployeeDetails.hasMany(BankDetails, { as: "BankDetails", foreignKey: "EmployeeDetailsId" });
  BikeCarDetails.belongsTo(EmployeeDetails, { as: "EmployeeDetail", foreignKey: "EmployeeDetailsId" });
  EmployeeDetails.hasMany(BikeCarDetails, { as: "BikeCarDetails", foreignKey: "EmployeeDetailsId" });
  CurrentCompanyDetails.belongsTo(EmployeeDetails, { as: "EmployeeDetail", foreignKey: "EmployeeDetailsId" });
  EmployeeDetails.hasMany(CurrentCompanyDetails, { as: "CurrentCompanyDetails", foreignKey: "EmployeeDetailsId" });


  EducationalDetails.belongsTo(EmployeeDetails, { as: "EmployeeDetail", foreignKey: "EmployeeDetailsId" });
  EmployeeDetails.hasMany(EducationalDetails, { as: "EducationalDetails", foreignKey: "EmployeeDetailsId" });
  EmergencyDetails.belongsTo(EmployeeDetails, { as: "EmployeeDetail", foreignKey: "EmployeeDetailsId" });
  EmployeeDetails.hasMany(EmergencyDetails, { as: "EmergencyDetails", foreignKey: "EmployeeDetailsId" });
  EmployeeAppraisalStatus.belongsTo(EmployeeDetails, { as: "EmployeeDetail", foreignKey: "EmployeeDetailsId" });
  EmployeeDetails.hasMany(EmployeeAppraisalStatus, { as: "EmployeeAppraisalStatuses", foreignKey: "EmployeeDetailsId" });
  EmployeeKRA.belongsTo(EmployeeDetails, { as: "Emaployeedetail", foreignKey: "EmaployeedetailsId" });
  EmployeeDetails.hasMany(EmployeeKRA, { as: "EmployeeKRAs", foreignKey: "EmaployeedetailsId" });
  EmployeeManager.belongsTo(EmployeeDetails, { as: "EmployeeDetail", foreignKey: "EmployeeDetailsID" });
  EmployeeDetails.hasMany(EmployeeManager, { as: "EmployeeManagers", foreignKey: "EmployeeDetailsID" });
  EmployeeManager.belongsTo(EmployeeDetails, { as: "Manager", foreignKey: "ManagerID" });
  EmployeeDetails.hasMany(EmployeeManager, { as: "Manager_EmployeeManagers", foreignKey: "ManagerID" });

  LoginDetails.belongsTo(EmployeeDetails, { as: "ed", foreignKey: "EmployeeDetailsId" });
  EmployeeDetails.hasMany(LoginDetails, { as: "ld", foreignKey: "EmployeeDetailsId" });

  EmployeeDetails.hasMany(EmployeeDetailRole, { as: "edr", foreignKey: "EmployeeDetailsId" });
  EmployeeDetailRole.belongsTo(EmployeeDetails, { as: "ed", foreignKey: "EmployeeDetailsId" });

  EmployeeView.hasMany(UserProjectMaster, { as: "upm", foreignKey: "EmployeeDetailsId" });
  UserProjectMaster.belongsTo(EmployeeView, { as: "ev", foreignKey: "EmployeeDetailsId" });
  

  // projects
  CompanyProject.hasMany(UserProjectMaster, { as: "upm", foreignKey: 'CompanyProjectId', sourceKey: 'CompanyProjectId' });
  UserProjectMaster.belongsTo(CompanyProject, { as: "cp", foreignKey: 'CompanyProjectId', targetKey: 'CompanyProjectId' });

  CompanyProject.hasMany(SOWDetails, { as: "sd", foreignKey: 'CompanyProjectId', sourceKey: 'CompanyProjectId' });
  SOWDetails.belongsTo(CompanyProject, { as: 'cp', foreignKey: 'CompanyProjectId', targetKey: 'CompanyProjectId' });

  CompanyProject.hasMany(ProjectMilestone, { as: "pm", foreignKey: 'CompanyProjectId', sourceKey: 'CompanyProjectId' });
  ProjectMilestone.belongsTo(CompanyProject, { as: 'cp', foreignKey: 'CompanyProjectId', targetKey: 'CompanyProjectId' });

  SOWDetails.hasMany(UserProjectMaster, { as: "upm", foreignKey: 'SOWMasterId', sourceKey: 'SOWMasterId' });
  UserProjectMaster.belongsTo(SOWDetails, { as: 'sd', foreignKey: 'SOWMasterId', targetKey: 'SOWMasterId' });

  CompanyProject.hasMany(MasterBusinessUnit, { as: "mbu", foreignKey: 'MasterBusinessUnitId', sourceKey: 'MasterBusinessUnit' });
  MasterBusinessUnit.belongsTo(CompanyProject, { as: 'cp', foreignKey: 'MasterBusinessUnitId', targetKey: 'MasterBusinessUnit' });

  Clients.hasMany(CompanyProject, { as: "cp", foreignKey: 'ClientId', sourceKey: 'ClientId' });
  CompanyProject.belongsTo(Clients, { as: 'cli', foreignKey: 'ClientId', targetKey: 'ClientId' });

  // UserProjectMaster.hasOne(SOWDetails, { as: "sd", foreignKey: 'SOWMasterId', sourceKey: 'SOWMasterId' });
  // SOWDetails.belongsTo(UserProjectMaster, { as: 'upm', foreignKey: 'SOWMasterId', targetKey: 'SOWMasterId' });

  ProjectMilestone.hasMany(UserProjectMaster, { as: "upm", foreignKey: 'CompanyProjectId', sourceKey: 'CompanyProjectId' });
  UserProjectMaster.belongsTo(ProjectMilestone, { as: 'pm', foreignKey: 'CompanyProjectId', targetKey: 'CompanyProjectId' });

  UserProjectMaster.hasOne(EmployeeDetails, { as: "ed", foreignKey: 'EmployeeDetailsId', sourceKey: 'EmployeeDetailsId' });
  EmployeeDetails.belongsTo(UserProjectMaster, { as: "upm", foreignKey: 'EmployeeDetailsId', targetKey: 'EmployeeDetailsId' });


  MasterBusinessUnit.belongsTo(EmployeeDetails, { as: "hed", foreignKey: "HeadEmployeeId" });
  EmployeeDetails.hasMany(MasterBusinessUnit, { as: "hmbu", foreignKey: "HeadEmployeeId" });

  PreviousCompanyDetails.belongsTo(EmployeeDetails, { as: "EmployeeDetail", foreignKey: "EmployeeDetailsId" });
  EmployeeDetails.hasMany(PreviousCompanyDetails, { as: "PreviousCompanyDetails", foreignKey: "EmployeeDetailsId" });

  EmployeeKRA.belongsTo(EmployeeKRA, { as: "EmployeeKRA", foreignKey: "EmployeeKRAId" });
  EmployeeKRA.hasOne(EmployeeKRA, { as: "EmployeeKRA_EmployeeKRA", foreignKey: "EmployeeKRAId" });
  DesignationKRA.belongsTo(KRAMaster, { as: "KRAMaster", foreignKey: "KRAMasterId" });
  KRAMaster.hasMany(DesignationKRA, { as: "DesignationKRAs", foreignKey: "KRAMasterId" });
  EmployeeKRA.belongsTo(KRAMaster, { as: "KRAMaster", foreignKey: "KRAMasterId" });
  KRAMaster.hasMany(EmployeeKRA, { as: "EmployeeKRAs", foreignKey: "KRAMasterId" });
  KRAMaster.belongsTo(KRAMasterTypes, { as: "KRAMasterType", foreignKey: "KRAMasterTypeId" });
  KRAMasterTypes.hasMany(KRAMaster, { as: "KRAMasters", foreignKey: "KRAMasterTypeId" });

  LoginDetails.belongsTo(SecurityQuetion, { as: "SecurityQuetion", foreignKey: "SecurityQuetionId" });
  SecurityQuetion.hasMany(LoginDetails, { as: "LoginDetails", foreignKey: "SecurityQuetionId" });

  return {
    AppraisalDurationMaster: AppraisalDurationMaster,
    AppraisalFinalCalculation: AppraisalFinalCalculation,
    AppraisalPhaseDurationMaster: AppraisalPhaseDurationMaster,
    AppraisalPhaseMaster: AppraisalPhaseMaster,
    BankDetails: BankDetails,
    BikeCarDetails: BikeCarDetails,
    Clients: Clients,
    CompanyAsset: CompanyAsset,
    CompanyProject: CompanyProject,
    CurrentCompanyDetails: CurrentCompanyDetails,
    DailyAttendance: DailyAttendance,
    DailyAttendanceRegularize: DailyAttendanceRegularize,
    DailyAttendanceRegularizeLeaders: DailyAttendanceRegularizeLeaders,
    DailyTask: DailyTask,
    DepartmentMaster: DepartmentMaster,
    DesignationKRA: DesignationKRA,
    DesignationKRACount: DesignationKRACount,
    DesignationMaster: DesignationMaster,
    EducationalDetails: EducationalDetails,
    EmergencyDetails: EmergencyDetails,
    EmployeeAppraisalStatus: EmployeeAppraisalStatus,
    EmployeeDetailRole: EmployeeDetailRole,
    EmployeeDetails: EmployeeDetails,
    EmployeeView: EmployeeView,
    EmployeeDocuments: EmployeeDocuments,
    EmployeeKRA: EmployeeKRA,
    EmployeeManager: EmployeeManager,
    EmployeeResume: EmployeeResume,
    FileUpdateDetails: FileUpdateDetails,
    KRAMaster: KRAMaster,
    KRAMasterTypes: KRAMasterTypes,
    LoginDetails: LoginDetails,
    MasterBusinessUnit: MasterBusinessUnit,
    MasterCompanyLocation: MasterCompanyLocation,
    MasterEmployeeType: MasterEmployeeType,
    MasterProjectType: MasterProjectType,
    MasterGender: MasterGender,
    MasterRoles: MasterRoles,
    MenuPagesRoles: MenuPagesRoles,
    MessageDetails: MessageDetails,
    OfficeHoliday: OfficeHoliday,
    PreviousCompanyDetails: PreviousCompanyDetails,
    ProjectPhase: ProjectPhase,
    SOWDetails: SOWDetails,
    SecurityQuetion: SecurityQuetion,
    TaskDetails: TaskDetails,
    UserProjectMaster: UserProjectMaster,
    ProjectMilestone: ProjectMilestone
  };
}


export {
  _AppraisalDurationMaster as AppraisalDurationMasterModel,
  _AppraisalFinalCalculation as AppraisalFinalCalculationModel,
  _AppraisalPhaseDurationMaster as AppraisalPhaseDurationMasterModel,
  _AppraisalPhaseMaster as AppraisalPhaseMasterModel,
  _BankDetails as BankDetailsModel,
  _BikeCarDetails as BikeCarDetailsModel,
  _Clients as ClientsModel,
  _CompanyAsset as CompanyAssetModel,
  _CompanyProject as CompanyProjectModel,
  _CurrentCompanyDetails as CurrentCompanyDetailsModel,
  _DailyAttendance as DailyAttendanceModel,
  _DailyAttendanceRegularize as DailyAttendanceRegularizeModel,
  _DailyAttendanceRegularizeLeaders as DailyAttendanceRegularizeLeadersModel,
  _DailyTask as DailyTaskModel,
  _DepartmentMaster as DepartmentMasterModel,
  _DesignationKRA as DesignationKRAModel,
  _DesignationKRACount as DesignationKRACountModel,
  _DesignationMaster as DesignationMasterModel,
  _EducationalDetails as EducationalDetailsModel,
  _EmergencyDetails as EmergencyDetailsModel,
  _EmployeeAppraisalStatus as EmployeeAppraisalStatusModel,
  _EmployeeDetailRole as EmployeeDetailRoleModel,
  _EmployeeDetails as EmployeeDetailsModel,
  _EmployeeView as EmployeeViewModel,
  _EmployeeDocuments as EmployeeDocumentsModel,
  _EmployeeKRA as EmployeeKRAModel,
  _EmployeeManager as EmployeeManagerModel,
  _EmployeeResume as EmployeeResumeModel,
  _FileUpdateDetails as FileUpdateDetailsModel,
  _KRAMaster as KRAMasterModel,
  _KRAMasterTypes as KRAMasterTypesModel,
  _LoginDetails as LoginDetailsModel,
  _MasterBusinessUnit as MasterBusinessUnitModel,
  _MasterCompanyLocation as MasterCompanyLocationModel,
  _MasterEmployeeType as MasterEmployeeTypeModel,
  _MasterProjectType as MasterProjectTypeModel,
  _MasterGender as MasterGenderModel,
  _MasterRoles as MasterRolesModel,
  _MenuPagesRoles as MenuPagesRolesModel,
  _MessageDetails as MessageDetailsModel,
  _OfficeHoliday as OfficeHolidayModel,
  _PreviousCompanyDetails as PreviousCompanyDetailsModel,
  _ProjectPhase as ProjectPhaseModel,
  _SOWDetails as SOWDetailsModel,
  _SecurityQuetion as SecurityQuetionModel,
  _TaskDetails as TaskDetailsModel,
  _UserProjectMaster as UserProjectMasterModel,
  _ProjectMilestone as ProjectMilestoneModel
};
