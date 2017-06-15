let cron = require('node-cron');
let Client = require('node-rest-client').Client;
let client = new Client();
let port = 80; 
let path = '/prod_data/';
//let host ="http://sample-env.688iathgkb.us-west-2.elasticbeanstalk.com";
let host ="http://lowcost-env.c3yd3p36gm.us-west-2.elasticbeanstalk.com/deviceData/save";

//let auth ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFtaXRwaHVsZXJhIiwiaWF0IjoxNDk1NTMyNzE4LCJleHAiOjE0OTU1MzYzMTh9.b6jQzwKeeoGcUDmqDD6zOZ04IhrMvd9pZxJCMuU3k74";
var siteId=["sph","trh","ssh"];
var ts=Date.now();
cron.schedule('* * * * * *',function(){

    let noofdevices=150;
    let siteid=Math.floor((Math.random()) * 3);
    let ltPanel="12,87,56";
    var mainarray=[];
    console.log(noofdevices);

    for(var i=1;i<noofdevices;i++) {
        let deviceID = i;
        let no = Math.floor((Math.random()) * 3);
        let value1 = Math.floor((Math.random()) * 100 + 1);
        let value2 = Math.floor((Math.random()) * 100 + 1);
        let value3 = Math.floor((Math.random()) * 100 + 1);
        let timestamp = ts;
        var obj = [{
            kvah: {
                unit: "Active Energy",
                value: value1
            }
        }, {
            kvah: {
                unit: "Active Energy",
                value: value1
            }, kw: {
                unit: "Average Active Power",
                value: value2
            }
        }, {
            kvah: {
                unit: "Active Energy",
                value: value1
            }, kw: {
                unit: "Average Active Power",
                value: value2
            }, kva: {
                unit: "Average Apparent Power",
                value: value3
            }
        }];

        var innerdata = {
            "deviceId": deviceID.toString(),
            "siteId":siteId[siteid],
            "timestamp": timestamp.toString(),
            "data": obj[no]
        };
        mainarray.push(innerdata);
        ts++;
    }

   // console.log(mainarray);
    var args={

       data:{JBData:{
           "siteId":siteId[siteid],
           "ltPanel":ltPanel,
		   "data":mainarray
        }},

        headers:{ "Content-Type": "application/json"},
        responseConfig:{timeout:5000}
	};
    //console.log(args.JBData.data);
	client.post(host,args,function(data,response){
		//console.log(response);
    });
});
