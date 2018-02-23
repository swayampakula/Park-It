var controller={};
var lots=require('./Lots.Model');

controller.getLot=function(req,res){
  var d= req.params.city;
  var e=req.params.office;
  var f=req.params.tower;
  lots.findOne({City:d, Office:e, Tower:f}).exec(function(err,data){
          console.log(data);
           if(data){
             res.send(data.Slot);
           }
           else{
           res.send({message:'fail'});
           }
       });
  }
  controller.getCities=function(req,res){
    console.log("inside get");
      lots.find({}, function(err, data) {
        console.log();
        if (!err){
          var cityArr = []
          for (var i = 0; i < data.length; i++) {
            cityArr = data[i].City
          }
          res.send(cityArr);
        } else {throw err;}
    });
  }
  controller.getOffices=function(req,res){
  lots.find({City:req.params.city}).exec(function(err,data){
    console.log(data);
           if(data){
             var offArr = []
             for (var i = 0; i < data.length; i++) {
               offArr.push(data[i].Office)
             }
             res.send(offArr);
           }
           else{
           res.send({message:'fail'});
           }
       });
  }
  controller.getTowers=function(req,res){
  lots.findOne({City:req.params.city, Office:req.params.office}).exec(function(err,data){
          console.log(data);
           if(data){
             towArr = []
             for (var i = 0; i < data.length; i++) {
              towArr = data[i].Tower
             }
             res.send(towArr);
           }
           else{
             res.send({message:'fail'});
           }
       });
  }
  controller.addLots=function(req,res)
  {
    var data =
  {
    "City":"Bangalore",
  "Office": "EC",
  "Tower":"EC3_T8",
  "Slot_Size": 2,
  "Slot_Info":[
    {
      "Slot_Name" : "1",
      "Slot_Status": "Free",
      "Slot_Type": "two"
    },
    {
      "Slot_Name" : "2",
      "Slot_Status": "Free",
      "Slot_Type": "four"
    }
  ]
}
    console.log("In Side");
    var nLot = new lots(data)
    nLot.save(function (err) {
      res.send(err);
    })

}
controller.updateOldLots = function functionName(req, res) {

  lots.findOne({City: req.body.oldcity,Tower: req.body.oldtower,Office: req.body.oldoffice}).exec(function(err,data){
           if(data){
             console.log(data);
             for (var i = 0; i < data.Slot_Info.length; i++) {
               if(data.Slot_Info[i].Slot_Name == req.body.oldslotName){
                 console.log(data.Slot_Info[i]);
                 // res.send(data.Slot_Info[i].Slot_Status);
                 var ob = {}
                 ob['Slot_Info.'+i+'.Slot_Status']="Free"
                 lots.findOneAndUpdate({City: req.body.oldcity,Tower: req.body.oldtower,Office: req.body.oldoffice}, {$set:ob}, {new: true}, function(err, doc){
                     if(err){
                           console.log("Something wrong when updating data!");
                     }
                           console.log(doc);
                   });
               }
             }

           }
           else{
             console.log(data);
             console.log(err);
           res.send({message:'fail'});
           }
  });
}
controller.updateNewLots = function functionName(req, res) {

  lots.findOne({City: req.body.newcity,Tower: req.body.newtower,Office: req.body.newoffice}).exec(function(err,data){
           if(data){
             console.log(data);
             for (var i = 0; i < data.Slot_Info.length; i++) {
               if(data.Slot_Info[i].Slot_Name == req.body.newslotName){
                 console.log(data.Slot_Info[i]);
                 // res.send(data.Slot_Info[i].Slot_Status);
                 var ob = {}
                 ob['Slot_Info.'+i+'.Slot_Status']="Booked"
                 lots.findOneAndUpdate({City: req.body.newcity,Tower: req.body.newtower,Office: req.body.newoffice}, {$set:ob}, {new: true}, function(err, doc){
                     if(err){
                           console.log("Something wrong when updating data!");
                     }
                           console.log(doc);
                   });
               }
             }

           }
           else{
             console.log(data);
             console.log(err);
           res.send({message:'fail'});
           }
  });
}
exports = module.exports = controller;
// db.lotDetails.insert(
// {
// "City":"Bangalore",
// "Office": "EC",
// "Tower":"EC3_T8",
// "Slot_Size": 2,
// "Slot_Info":[
//   {
//     "Slot_Name" : "1",
//     "Slot_Status": "Free",
//     "Slot_Type": "two"
//   },
//   {
//     "Slot_Name" : "2",
//     "Slot_Status": "Free",
//     "Slot_Type": "four"
//   }
// ]
// });






// var controller={};
//
// var mainData=[{
//   Id:1001,
//   Name:'Mark',
//   Designation:'CEOT',
//   ContactNo:'+61 491 570 156',
//   Image:'url',
//   username:'mark01',
//   password:'***********'
// },{
//   Id:1001,
//   Name:'jack',
//   Designation:'operator',
//   ContactNo:'+61 491 570 156',
//   Image:'url',
//   username:'jack02',
//   password:'***********'
// },{
//   Id:1001,
//   Name:'alice',
//   Designation:'operator',
//   ContactNo:'+61 491 570 156',
//   Image:'url',
//   username:'alice03',
//   password:'***********'
// },
// {
//   Id:1001,
//   Name:'katty',
//   Designation:'CEOT',
//   ContactNo:'+61 491 570 156',
//   Image:'url',
//   username:'katty04',
//   password:'***********'
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
