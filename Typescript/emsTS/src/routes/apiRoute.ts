import express from "express";
const router = express.Router();
const attendancecontroller = require("../api/controllers/attendanceControllers");

router.post("/login", attendancecontroller.logincontrol);



// const getBirthdayController = require("../api/controllers/getBirthdayControllers");
// const managersController = require("../api/controllers/managersController");
// const detailscontroller = require("../api/controllers/detailsControllers");
// // const attendanceControllers = require("../api/controllers/attendanceControllers");
// const attendancecontroller = require("../api/controllers/attendanceControllers");
// const leareghistorycontroller = require("../api/controllers/leaRegHistoryControllers");
// const monthattcontroller = require("../api/controllers/monthlyAttControllers");

// const taskController = require('../api/controllers/taskController');
// const regularizationController = require('../api/controllers/regularizationController');

// const passwordControllers = require('../api/controllers/passwordControllers');

// const leaveBalanceController = require('../api/controllers/leaveBalanceController');
// const imagePdfService = require('../adminApi/services/imagePdfService');
// const reimbursementController = require('../api/controllers/reimbursementController');
// const testController = require('../api/controllers/testController');

// router.post('/applyreimbursement/:empId', imagePdfService.reimbursementImagePDF);
// router.post('/reviewreimbursement/:empId', reimbursementController.reviewReimbursement);
// router.get('/getreimbursement/:empId', reimbursementController.getReimbursement);
// router.get('/getmanagerreimbursement/:manId', reimbursementController.getManagerReimbursement);
// router.delete('/deletereimbursement', reimbursementController.deleteReimbursement);

// router.get("/getleavebalance", leaveBalanceController.leaveBalance);

// router.get("/getbirthday", getBirthdayController.getBirthday);
// router.post("/sendwish", getBirthdayController.sendWish);

// router.get("/getdetails/:empId", detailscontroller.getDetails);

// router.put("/updatebankdetails/:empId", detailscontroller.updateBankDetails);
// router.put("/updatepersonaldetails/:empId", detailscontroller.updatePersonalDetails);
// router.put("/updateemergencydetails/:empId", detailscontroller.updateEmergencyDetails);
// router.put("/updateeducationaldetails/:empId", detailscontroller.updateEducationalDetails);

// router.get("/getmonthlyatten/:empId/:from/:to", attendancecontroller.updateHolidayAttendance);
// router.post("/applyleave/:empId", attendancecontroller.applyLeave);

// router.get("/getmanagers", managersController.getManagers);
// router.get("/getccs", managersController.getCCs);
// router.get("/getmanageremployee/:empId", managersController.getManagerEmployee)

// router.post("/checkin/:empId", attendancecontroller.checkIn);
// router.post("/checkout/:empId", attendancecontroller.checkOut);
// router.get("/getassignproject", attendancecontroller.getAssignProject);
// router.get("/getcheckin/:empId", attendancecontroller.getCheckIn);
// router.post("/login", attendancecontroller.logincontrol);

// router.get("/getleave/:empId", leareghistorycontroller.leaveHistory);
// router.get("/getreg/:empId", leareghistorycontroller.regHistory);

// router.post("/monatten/:empId", monthattcontroller.showAtten);
// router.post("/monattenUndermanager/:manId", monthattcontroller.showAttenUnderManager);

// router.post('/otpmail', Mail.sendOTPMail);
// router.patch('/updatepassword', passwordControllers.updatePassword);
// router.post('/verifyotp', passwordControllers.verifyOTP);

// // router.get('/createHoliday',attendanceController.monthlyAttendance);

// router.get('/gettask', taskController.getTask);
// router.patch('/edittask', taskController.editTask);
// // router.post('/checkintask',taskController.checkInTask);
// // router.post('/checkouttask',taskController.checkOutTask);
// router.delete('/deletetask', taskController.deleteTask);

// router.get('/getapprovers', regularizationController.getApprovers);
// router.post('/applyregularization', regularizationController.applyRegularization);
// router.post('/reviewleaveregularization', regularizationController.reviewLeaveRegularization);
// router.get('/getmanagerregularization', regularizationController.getManagerRegularization);


// router.get('/managerapproval', regularizationController.managerApproval);
// router.get('/managerhistory', regularizationController.managerHistory);

// router.post("/testfunction", testController.testFunction);

// router.get('/getbucket',s3Bucket.uploadEmailDetails);

module.exports = router;

