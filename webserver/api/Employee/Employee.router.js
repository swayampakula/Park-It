const router = require('express').Router();
console.log('request reach to router of Employee detail');
console.log('new update');
 const EmployeeController = require('./Employee.controller.js');
// // router.post('/',roleSettingController.createRole);
 //router.get('/',EmployeeController.getEmployeeData);
// router.get('/:parameter', EmployeeController.getallEmp);
router.post('/login',EmployeeController.LoginData);
router.get('/',EmployeeController.GetData);
router.put('/',EmployeeController.updateData);
router.get('/search/:empID',EmployeeController.GetDataByEmployeeID)
router.get('/vehSearch/:vehNo',EmployeeController.GetDataByvehNo)
router.get('/slotSearch/:City/:Office/:Tower/:Slot_Name',EmployeeController.GetDataBySlotNo)

// put(BCount, vInfo, slotInfo)
// router.put('/',jobController.updatestatus);
// router.delete('/:_id',roleSettingController.removeRole);

exports = module.exports = router;
