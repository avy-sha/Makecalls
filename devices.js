/**
 * Created by abhinav on 6/12/17.
 */
let cron = require('node-cron');
let Client = require('node-rest-client').Client;
let client = new Client();
let port = 80;
let path = '/prod_data/';
//let host ="http://sample-env.688iathgkb.us-west-2.elasticbeanstalk.com";
let host ="http://localhost:1337/device/adddevice";
var deviceId=4;
var siteId=["sph","trh","ssh"];
var networkId="1";
var regionId="1";
var deviceType=["jouleIO","jouleSense","jouleControl","jouleLogger","pumps","variableFrequencyDrive","chiller","coolingTower","airHandlingUnit"];
var status="1";
var isFunctioning="1";
var serialNo="123459";
var installationDate="01/06/1970 01:01'";
var maintainanceDate="01/06/1970 01:01'"
//let auth ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFtaXRwaHVsZXJhIiwiaWF0IjoxNDk1NTMyNzE4LCJleHAiOjE0OTU1MzYzMTh9.b6jQzwKeeoGcUDmqDD6zOZ04IhrMvd9pZxJCMuU3k74";



for(var i=0;i<deviceType.length;i++){
    for(var j=0;j<siteId.length;j++){
        var obj={
            "deviceId":deviceId,
                "siteId":siteId[j],
                "networkId":"1",
                "regionId":"1",
                "name":siteId[j]+"_"+deviceType[i]+"_1",
                "deviceType":deviceType[i],
                "status":1,
                "isFunctioning":1,
                "serialno":serialNo,
                "installationDate":"01/06/1970 01:01",
                "maintenanceDate":"01/06/1970 01:01"
        };
        deviceId++;
        serialNo++;
        var args={
         data:{deviceData:obj
         },

         headers:{ "Content-Type": "application/json"},
         responseConfig:{timeout:5000}
         };
         //console.log(args.JBData.data);
         client.post(host,args,function(data,response){
         });


    }
}


        // console.log(mainarray);
        /*var args={

            data:{deviceData:obj
            },

            headers:{ "Content-Type": "application/json"},
            responseConfig:{timeout:5000}
        };
        //console.log(args.JBData.data);
        client.post(host,args,function(data,response){
            //console.log(response);
        });*/

