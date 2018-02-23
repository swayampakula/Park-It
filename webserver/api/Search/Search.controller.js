var controller={};
var search=require('./Search.Model');

controller.GetDataByEmployeeID=function(req,res){
  console.log('into GetDataByEmployeeID')
  var d= req.params.empID;
  search.findOne({Employee_ID:d}).exec(function(err,data){
           if(data){
             res.send({message:'Success'});
           }
           else{
           res.send({message:'fail'});
           }
  });
}

// controller.GetDataByVehicleNo=function(req,res){
//   var d= req.params.Vehicle_Info.Vehicle_Number;
//   search.findOne({Vehicle_Number:d}).exec(function(err,data){
//            if(data){
//              res.send({message:'Success'});
//            }
//            else{
//            res.send({message:'fail'});
//            }
//   });
// }

// controller.GetDataBySlot=function(req,res){
//   var d= req.params.Slot_Info.City;
//   var e= req.params.Slot_Info.Office;
//   var f= req.params.Slot_Info.Tower;
//   var g= req.params.Slot_Info.Slot_Name;
//   search.findOne({Slot_Info.City:d,Slot_Info.Office:e,Slot_Info.Tower:f,Slot_Info.Slot_Name:g}).exec(function(err,data){
//            if(data){
//              res.send({message:'Success'});
//            }
//            else{
//            res.send({message:'fail'});
//            }
//   });
// }




exports = module.exports = controller;

// db.empdetails.insert({
//   "Employee_ID":'353444',
//   "Employee_Name":'Ramesh',
//   "Employee_Email":'ramesh.n63@wipro.com',
//   "Role":'Admin',
//   "password":'ramesh@123',
//   "Booking_Count": 0,
//   "Vehicle_Info": {
//     "Vehicle_Number": '',
//     "Vehicle_Type": ''
//   },
//   "Slot_Info": {
//     "City":'',
//     "Office":'',
//     "Tower":'',
//     "Slot_Name" : ''
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
