var controller={};
var employees=require('./Employee.Model');

controller.GetData=function(req,res){
  employees.find({}, function(err, data) {
    if (!err){
      res.send(data);
    } else {throw err;}
});
  }

  controller.LoginData=function(req,res){
    var d= req.body.empID;
    var e=req.body.password;
    console.log(req.body.empID);
    //var flag=0;
    employees.findOne({Employee_ID:d,password:e}).exec(function(err,data){
             if(data){
               if(data.Role == "Admin")
                {
               res.send({message:'Admin'});
                }
               else {
                 res.send({message:'Employee'});
               }
             }
             else{
             res.send({message:'fail'});
             }

         });
    }

    controller.GetDataByEmployeeID=function(req,res){
      console.log('into GetDataByEmployeeID')
      var d= req.params.empID;
      employees.findOne({Employee_ID:d}).exec(function(err,data){
               if(data){
                 res.send(data);
               }
               else{
               res.send({message:'fail'});
               }
      });
    }

    controller.GetDataByvehNo=function(req,res){
      console.log('into GetDataByVehID')
      var d= req.params.vehNo;
      console.log(d);
      employees.findOne({"Vehicle_Info.Vehicle_Number":d}).exec(function(err,data){
               if(data){
                 res.send(data);
               }
               else{
               res.send({message:'fail'});
               }
      });
    }
    controller.GetDataBySlotNo=function(req,res){
      console.log('into GetDataBySlotNo')
      const {City,Office,Tower,Slot_Name} = req.params;
      // console.log(d);
      employees.findOne({"Slot_Info.City":City,"Slot_Info.Office":Office,"Slot_Info.Tower":Tower,"Slot_Info.Slot_Name":Slot_Name,}).exec(function(err,data){
               if(data){
                 res.send(data);
               }
               else{
               res.send({message:'fail'});
               }
      });
    }
    controller.updateData = function functionName(req, res) {
      employees.findOneAndUpdate({Employee_ID: req.body.empID}, {$set:{
        Booking_Count: req.body.bookingCount,
        'Vehicle_Info.Vehicle_Number': req.body.vehNo,
        'Vehicle_Info.Vehicle_Type': req.body.vehType,
        'Slot_Info.City': req.body.city,
        'Slot_Info.Office': req.body.office,
        'Slot_Info.Tower': req.body.tower,
        'Slot_Info.Slot_Name': req.body.slotName
      }}, {new: true}, function(err, doc){
          if(err){
                console.log("Something wrong when updating data!");
          }
                console.log(doc);
        });
    }
exports = module.exports = controller;

// db.empdetails.insert({
//   "Employee_ID":'1234',
//   "Employee_Name":'Naresh',
//   "Employee_Email":'naresh.n63@wipro.com',
//   "Role":'User',
//   "password":'naresh@123',
//   "Booking_Count": 0,
//   "Vehicle_Info": {
//     "Vehicle_Number": 'KA123',
//     "Vehicle_Type": 'two'
//   },
//   "Slot_Info": {
//     "City":'Bangalore',
//     "Office":'EC',
//     "Tower":'EC3_t8',
//     "Slot_Name" : '1'
//   }
// })




//
// // controller.postEmployeeData=function(req,res){
// //
// //
// //   var data= req.body;
// //   console.log('post data react to server');
// //   console.log(data);
// //
// //   res.send({message:'Hi data is received on server'});
// //
// //
// // };
//
//
//
// controller.getEmployeeData=function(req,res){
//
//   console.log('Emp  api connected for get emp data');
//   var data=mainData;
//   // var data= req.body;
//   // console.log('post data react to server');
//   // console.log(data);
//
//   res.send({message:data});
//
//   //  roleSetting.find({}).exec(function(err,data){
//   //         if(err) { console.log('server error in get'+err); }
//   //         else{
//   //          res.json({message:data});
//   //         }
//   //       });
// };
//
// // controller.getallEmp=function(req,res){
// //   console.log('filter parameter');
// //   console.log(req.params.parameter);
// //   var par=req.params.parameter;
// //
// //
// //
// // if(mainData.Designation='CEOT'){
// //   res.send({message:mainData})
// // }
// //
// // }
//
//
// exports = module.exports = controller;

// var controller={};
//
// var mainData=[{
//   Id:1001,
//   Name:'Mark',
//   Designation:'CEOT',
//   ContactNo:'+61 491 570 156',
//   Image:'url',
//   password:'1'
// },{
//   Id:1002,
//   Name:'jack',
//   Designation:'CEOT',
//   ContactNo:'+61 491 570 156',
//   Image:'url',
//   password:'2'
// },{
//   Id:1003,
//   Name:'alice',
//   Designation:'CEOT',
//   ContactNo:'+61 491 570 156',
//   Image:'url',
//   password:'3'
// },
// {
//   Id:1004,
//   Name:'katty',
//   Designation:'CEOT',
//   ContactNo:'+61 491 570 156',
//   Image:'url',
//   password:'4'
//   //   res.send({message:'Hi data is received on server'});
// }
// ];
//
// // controller.postEmployeeData=function(req,res){
// //
// //
// //   var data= req.body;
// //   console.log('post data react to server');
// //   console.log(data);
// //
// //
// //i
// // };
//
//
//
// controller.LoginData=function(req,res){
//   var d= req.body.Id;
//   var e=req.body.pwd;
//   var flag=0;
//
//
// console.log('userId: '+d+ '' +' password: '+ e);
//
//
// let authentication;
//   for(var n=0;n<mainData.length;n++){
//     console.log(mainData[n].Id);
//      if(mainData[n].Id==d && mainData[n].password==e){
//        authentication={result:'succes',username:d}
//        res.send({message:authentication});
//
//      }
//
//      else{
//        authentication={result:'fail',username:d}
//           res.send({message:authentication});
//            }
// //     for (var i = 0; i <= 6; i++) {
// //
// // console.log(mainData[n][i].Id+"----------");
// //     if(mainData[n][i].Id==d && mainData[n][i].password==e){
// //       res.send({message:'succes'});
// //       console.log(mainData[n][i].Id+"-----------------------"+mainData[n][i].password);
// //     }
// //     else{
// //         res.send({message:'fail'});
// //       }
// //
// //   }
//   }
//   if(flag==1)
//   {
//
//   }
//   else {
//
//   }
//
// }
//
//
//
//
//
//
//
//
// exports = module.exports = controller;
