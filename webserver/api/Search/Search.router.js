const router = require('express').Router();
const Search = require('./Search.controller.js');
 // router.post('/',roleSettingController.createRole);
 //router.get('/',Search.getEmployeeData);
// router.get('/:parameter', Search.getallEmp);
//router.post('/login',Search.LoginData);
router.get('/',Search.GetDataByEmployeeID);
// router.get('/search',Search.GetDataByVehicleNo);
// router.get('/search',Search.GetDataBySlot);
// put(BCount, vInfo, slotInfo)
// router.put('/',jobController.updatestatus);
// router.delete('/:_id',roleSettingController.removeRole);

exports = module.exports = router;
