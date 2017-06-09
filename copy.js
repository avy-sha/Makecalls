let cron = require('node-cron');
let Client = require('node-rest-client').Client;
let client = new Client();
let port = 80;
let path = '/prod_data/';
//let host ="http://sample-env.688iathgkb.us-west-2.elasticbeanstalk.com";
let host ="http://localhost:1337/deviceData/save";

let auth_path =
//let auth ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFtaXRwaHVsZXJhIiwiaWF0IjoxNDk1NTMyNzE4LCJleHAiOjE0OTU1MzYzMTh9.b6jQzwKeeoGcUDmqDD6zOZ04IhrMvd9pZxJCMuU3k74";

    cron.schedule('* * * * * *',function(){
        let siteId=Math.floor((Math.random())*4+4);
        let deviceID=Math.floor((Math.random())*4+10);
        let no=Math.floor((Math.random())*3);
        //  let value=Math.floor((Math.random())*100+1);
        let value1=Math.floor((Math.random())*100+1);
        let value2=Math.floor((Math.random())*100+1);
        let value3=Math.floor((Math.random())*100+1);

        let timestamp=Date.now();
        var obj=[{kvah:{
            unit:"Active Energy",
            value: value1
        }},{kvah:{
            unit:"Active Energy",
            value: value1
        },kw:{
            unit:"Average Active Power",
            value: value2
        }},{kvah:{
            unit:"Active Energy",
            value: value1
        },kw:{
            unit:"Average Active Power",
            value: value2
        },kva:{
            unit:"Average Apparent Power",
            value: value3
        }}];

        let args={

            " JBData":{
                siteId:siteId.toString(),
                data:{"deviceId":deviceID.toString(),
                    "siteId":siteId.toString(),
                    "timestamp":timestamp.toString(),
                    "data":obj[no]}
            },

            headers:{ "Content-Type": "application/json"}
        };
        //console.log(args.JBData.data);
        client.post(host,args,function(data,response){
            console.log(data);
        });
    });
