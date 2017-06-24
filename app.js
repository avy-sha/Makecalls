let cron = require('node-cron');
let Client = require('node-rest-client').Client;
let client = new Client();
let port = 1337;
let path = '/prod_data/';
//let host ="http://lowcost-env.c3yd3p36gm.us-west-2.elasticbeanstalk.com/deviceData/sa";
let host = "http://localhost:1337/deviceData/save";

//let auth ="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFtaXRwaHVsZXJhIiwiaWF0IjoxNDk1NTMyNzE4LCJleHAiOjE0OTU1MzYzMTh9.b6jQzwKeeoGcUDmqDD6zOZ04IhrMvd9pZxJCMuU3k74";
var siteId=["ssh","ssh","ssh"];
var ts = Date.now();
//cron.schedule('* * * * * *',function(){

let noofdevices = 0;
let siteid = Math.floor((Math.random()) * 3);
let ltPanel = "12,87,56";
var mainarray1 = [];
var mainarray3 = [];
var mainarray2 = [];
var mainarray4 = [];
var mainarray5 = [];
var mainarray6 = [];
var mainarray7 = [];
var mainarray8 = [];
var mainarray9 = [];
var mainarray10 = [];


console.log(noofdevices);

for (var i = 1; i < 30; i++) {
	let deviceID = 34;
	let no = Math.floor((Math.random()) * 3);
	let value1 = Math.floor((Math.random()) * 100 + 1);
	let value2 = Math.floor((Math.random()) * 100 + 1);
	let value3 = Math.floor((Math.random()) * 100 + 1);
	let value4 = Math.floor((Math.random()) * 100 + 1);
	let value5 = Math.floor((Math.random()) * 100 + 1);
	let timestamp = ts;
/*	var obj = [{
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
	}];*/
	var obj={"chilledwatersetpoint":value1,"chilledwaterpumpvfdfrequency":value2,"condensorwaterpumpvfdfrequency":value3,"coolingtowerfanvfdfrequency":value4,"ahusetpoint":value5}
	var innerdata = {
		"deviceId": deviceID.toString(),
		"siteId": siteId[siteid],
		"timestamp": timestamp.toString(),
		"data": obj
	};
	mainarray1.push(innerdata);
	ts++;
}
for (var i = 150; i < 300; i++) {
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
		"siteId": siteId[siteid],
		"timestamp": timestamp.toString(),
		"data": obj[no]
	};
	mainarray2.push(innerdata);
	ts++;
}
for (var i = 300; i < 450; i++) {
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
		"siteId": siteId[siteid],
		"timestamp": timestamp.toString(),
		"data": obj[no]
	};
	mainarray3.push(innerdata);
	ts++;
}
for (var i = 450; i < 600; i++) {
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
		"siteId": siteId[siteid],
		"timestamp": timestamp.toString(),
		"data": obj[no]
	};
	mainarray4.push(innerdata);
	ts++;
}
for (var i = 600; i < 750; i++) {
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
		"siteId": siteId[siteid],
		"timestamp": timestamp.toString(),
		"data": obj[no]
	};
	mainarray5.push(innerdata);
	ts++;
}
for (var i = 750; i < 900; i++) {
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
		"siteId": siteId[siteid],
		"timestamp": timestamp.toString(),
		"data": obj[no]
	};
	mainarray6.push(innerdata);
	ts++;
}
for (var i = 900; i < 1150; i++) {
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
		"siteId": siteId[siteid],
		"timestamp": timestamp.toString(),
		"data": obj[no]
	};
	mainarray7.push(innerdata);
	ts++;
}
for (var i = 1150; i < 1300; i++) {
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
		"siteId": siteId[siteid],
		"timestamp": timestamp.toString(),
		"data": obj[no]
	};
	mainarray8.push(innerdata);
	ts++;
}
for (var i = 1300; i < 1450; i++) {
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
		"siteId": siteId[siteid],
		"timestamp": timestamp.toString(),
		"data": obj[no]
	};
	mainarray9.push(innerdata);
	ts++;
}
for (var i = 1450; i < 1600; i++) {
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
		"siteId": siteId[siteid],
		"timestamp": timestamp.toString(),
		"data": obj[no]
	};
	mainarray10.push(innerdata);
	ts++;
}


// console.log(mainarray);
var args1 = {

	data: {
		JBData: {
			"siteId": siteId[siteid],
			"ltPanel": ltPanel,
			"data": mainarray1,
			"timestamp":Date.now()
		}
	},

	headers: {"Content-Type": "application/json"},
	requestConfig: {
		timeout: 60000, //request timeout in milliseconds
		noDelay: true, //Enable/disable the Nagle algorithm
		keepAlive: true, //Enable/disable keep-alive functionalityidle socket.
		keepAliveDelay: 60000 //and optionally set the initial delay before the first keepalive probe is sent
	},
	responseConfig: {timeout: 60000}
};
/*var args2 = {

	data: {
		JBData: {
			"siteId": siteId[siteid],
			"ltPanel": ltPanel,
			"data": mainarray2
		}
	},

	headers: {"Content-Type": "application/json"},
	requestConfig: {
		timeout: 60000, //request timeout in milliseconds
		noDelay: true, //Enable/disable the Nagle algorithm
		keepAlive: true, //Enable/disable keep-alive functionalityidle socket.
		keepAliveDelay: 60000 //and optionally set the initial delay before the first keepalive probe is sent
	},
	responseConfig: {timeout: 60000}
};
var args3 = {

	data: {
		JBData: {
			"siteId": siteId[siteid],
			"ltPanel": ltPanel,
			"data": mainarray3
		}
	},
	requestConfig: {
		timeout: 60000, //request timeout in milliseconds
		noDelay: true, //Enable/disable the Nagle algorithm
		keepAlive: true, //Enable/disable keep-alive functionalityidle socket.
		keepAliveDelay:  60000 //and optionally set the initial delay before the first keepalive probe is sent
	},
	headers: {"Content-Type": "application/json"},
	responseConfig: {timeout: 60000}
};
var args4 = {

	data: {
		JBData: {
			"siteId": siteId[siteid],
			"ltPanel": ltPanel,
			"data": mainarray4
		}
	},
	requestConfig: {
		timeout: 60000, //request timeout in milliseconds
		noDelay: true, //Enable/disable the Nagle algorithm
		keepAlive: true, //Enable/disable keep-alive functionalityidle socket.
		keepAliveDelay:  60000 //and optionally set the initial delay before the first keepalive probe is sent
	},
	headers: {"Content-Type": "application/json"},
	responseConfig: {timeout: 60000}
};
var args5 = {

	data: {
		JBData: {
			"siteId": siteId[siteid],
			"ltPanel": ltPanel,
			"data": mainarray5
		}
	},
	requestConfig: {
		timeout: 60000, //request timeout in milliseconds
		noDelay: true, //Enable/disable the Nagle algorithm
		keepAlive: true, //Enable/disable keep-alive functionalityidle socket.
		keepAliveDelay:  60000 //and optionally set the initial delay before the first keepalive probe is sent
	},
	headers: {"Content-Type": "application/json"},
	responseConfig: {timeout: 60000}
};
var args6 = {

	data: {
		JBData: {
			"siteId": siteId[siteid],
			"ltPanel": ltPanel,
			"data": mainarray6
		}
	},
	requestConfig: {
		timeout: 60000, //request timeout in milliseconds
		noDelay: true, //Enable/disable the Nagle algorithm
		keepAlive: true, //Enable/disable keep-alive functionalityidle socket.
		keepAliveDelay:  60000 //and optionally set the initial delay before the first keepalive probe is sent
	},
	headers: {"Content-Type": "application/json"},
	responseConfig: {timeout: 60000}
};
var args7 = {

	data: {
		JBData: {
			"siteId": siteId[siteid],
			"ltPanel": ltPanel,
			"data": mainarray7
		}
	},
	requestConfig: {
		timeout: 60000, //request timeout in milliseconds
		noDelay: true, //Enable/disable the Nagle algorithm
		keepAlive: true, //Enable/disable keep-alive functionalityidle socket.
		keepAliveDelay:  60000 //and optionally set the initial delay before the first keepalive probe is sent
	},
	headers: {"Content-Type": "application/json"},
	responseConfig: {timeout: 60000}
};
var args8 = {

	data: {
		JBData: {
			"siteId": siteId[siteid],
			"ltPanel": ltPanel,
			"data": mainarray8
		}
	},
	requestConfig: {
		timeout: 60000, //request timeout in milliseconds
		noDelay: true, //Enable/disable the Nagle algorithm
		keepAlive: true, //Enable/disable keep-alive functionalityidle socket.
		keepAliveDelay:  60000 //and optionally set the initial delay before the first keepalive probe is sent
	},
	headers: {"Content-Type": "application/json"},
	responseConfig: {timeout: 60000}
};
var args9 = {

	data: {
		JBData: {
			"siteId": siteId[siteid],
			"ltPanel": ltPanel,
			"data": mainarray9
		}
	},
	requestConfig: {
		timeout: 60000, //request timeout in milliseconds
		noDelay: true, //Enable/disable the Nagle algorithm
		keepAlive: true, //Enable/disable keep-alive functionalityidle socket.
		keepAliveDelay:  60000 //and optionally set the initial delay before the first keepalive probe is sent
	},
	headers: {"Content-Type": "application/json"},
	responseConfig: {timeout: 60000}
};
var args10 = {

	data: {
		JBData: {
			"siteId": siteId[siteid],
			"ltPanel": ltPanel,
			"data": mainarray10
		}
	},
	requestConfig: {
		timeout: 60000, //request timeout in milliseconds
		noDelay: true, //Enable/disable the Nagle algorithm
		keepAlive: true, //Enable/disable keep-alive functionalityidle socket.
		keepAliveDelay:  60000 //and optionally set the initial delay before the first keepalive probe is sent
	},
	headers: {"Content-Type": "application/json"},
	responseConfig: {timeout: 60000}
};*/
//console.log(args.JBData.data);
client.post(host, args1, function (data, response) {
	//console.log(response);
	// });
});
/*client.post(host, args2, function (data, response) {
	//console.log(response);
	// });
});
client.post(host, args3, function (data, response) {
	//console.log(response);
	// });
});
client.post(host, args4, function (data, response) {
	//console.log(response);
	// });
});
client.post(host, args5, function (data, response) {
	//console.log(response);
	// });
});
client.post(host, args6, function (data, response) {
	//console.log(response);
	// });
});
client.post(host, args7, function (data, response) {
	//console.log(response);
	// });
});
client.post(host, args8, function (data, response) {
	//console.log(response);
	// });
});
client.post(host, args9, function (data, response) {
	//console.log(response);
	// });
});
client.post(host, args10, function (data, response) {
	//console.log(response);
	// });
});
*/