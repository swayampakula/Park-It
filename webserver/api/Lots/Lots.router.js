const router = require('express').Router();
console.log('request reach to router of Lots detail');
console.log('new update');
 const LotsController = require('./Lots.controller.js');
// router.post('/',roleSettingController.createRole);
 //router.get('/',LotsController.getLotsData);
router.get('/:city/:office/:tower/:vehicleType', LotsController.getLot);
router.get('/', LotsController.getCities);
router.get('/', LotsController.addLots);
router.get('/:city', LotsController.getOffices);
router.get('/:city/:office', LotsController.getTowers);
router.put('/', LotsController.updateOldLots);
router.put('/', LotsController.updateNewLots);

// router.put('/:SlotName', LotsController.updateLots);



exports = module.exports = router;
