/**
 * Created by abhinav on 6/12/17.
 */
/**
 * Created by abhinav on 6/12/17.
 */
let cron = require('node-cron');
var moment = require('moment');
let Client = require('node-rest-client').Client;
let client = new Client();
let port = 80;
let path = '/prod_data/';
//let host ="http://sample-env.688iathgkb.us-west-2.elasticbeanstalk.com";
let host ="http://localhost:1337/site/baseline/add";
//let auth ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFtaXRwaHVsZXJhIiwiaWF0IjoxNDk1NTMyNzE4LCJleHAiOjE0OTU1MzYzMTh9.b6jQzwKeeoGcUDmqDD6zOZ04IhrMvd9pZxJCMuU3k74";
var siteId=["sph","trh","ssh"];
cron.schedule('* * * * * *',function(){

    let siteid=Math.floor((Math.random()) * 3);
    let no = Math.floor((Math.random()) * 3);
    let value1 = Math.floor((Math.random()) * 100 + 1);
    let value2 = Math.floor((Math.random()) * 100 + 1);
    let value3 = Math.floor((Math.random()) * 100 + 1);
    let timestamp = Date.now();
    let timestamp2=timestamp+2592000000+19800000;
    console.log(timestamp,timestamp2);
    var t = new Date( timestamp );
    var start =t.toISOString();
    var t1=new Date( timestamp2);
    var end = t1.toISOString();
    var obj={
        "siteId":siteId[siteid],
        "startDate": start,
        "timestamp":timestamp,
        "endDate": end,
        "consumptionValue": value1,
        "target": "80"};


    // console.log(obj);
    var args={

        data:{baselineobj:obj},

        headers:{ "Content-Type": "application/json"},
        responseConfig:{timeout:5000}
    };
    //console.log(args.JBData.data);
    client.post(host,args,function(data,response){
        //console.log(response);
    });
});
