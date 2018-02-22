const router = require('express').Router();
console.log('request reach to router of Booking detail');
console.log('new update');
 const BookingController = require('./Booking.controller.js');
// router.post('/',roleSettingController.createRole);
 //router.get('/',BookingController.getBookingData);
// router.get('/:city/:office/:tower', Booking.getLot);
router.post('/',Booking.postBooking);
// router.put('/',jobController.updatestatus);
// router.delete('/:_id',roleSettingController.removeRole);

exports = module.exports = router;
