/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
//
var vuforiaLicenseKey = 'AfLI8Qb/////AAAAAFJb+k2ck0oolfb8596q1HuLWZNVTieLTx5YVS6VSGgO50Fj0bG91TnhaIr/WXf0Kb9LVqfgqcNGeWkb32GVXL/D5PcgBAFF2Qh5R8YBEiWE4pj83i2CxWzuFKPg+arr5d2mr4dR9jS0MbaI3K1CpymxGpBF/27HrDWyFUzDBoHBMjRn0A4pXzcGOPCgOvoXTdolwb/2YbS+0hWMoCiYfZolqKqoqO5vuNREeH4DczBtWrz3F1CsdswFgDDI3V4m+1x/EU8ESE1qgH1WsFC1WI/XOOyXZ1k7vYAe31rcc240Ys7vNj2VddK7EKod/k16w0EHLGHOz4nJQHFDk3Jw0vQ5h8NbGwxeN0Yjs3qpv7Cg';

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', app.onDeviceReady.bind(app), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		console.log('Preparing everything');


		var myButton = document.getElementById('myButton');
		myButton.addEventListener('click', app.startCoverIOS);

		// var myButton2 = document.getElementById('myButton2');
		// myButton2.addEventListener('click', app.startContain);

		// var myButton3 = document.getElementById('myButton3');
		// myButton3.addEventListener('click', app.startContain);

    	console.log("Cordova file object:",cordova.file);
    	console.log("Local storage:",cordova.file.applicationDirectory);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },

	// startVuforiaAR: function() {
	// 	console.log("Let's play with AR!");
	//
	// 	var options = {
	// 		databaseXmlFile: '../vuforia/happinovTestAR.xml',
	// 		targetList: [
	// 			"EsAgent3",
	// 			"EsAgent2",
	// 			"Es20FemmesFatales",
	// 			"Es12Identification",
	// 			"Es11BondJamesBond"
	// 		]
	// 		baseUrl: "./"
	// 		overlayMessage: '',
	// 		vuforiaLicense: vuforiaLicenseKey,
	// 		showAndroidCloseButton: true,
	// 		showDevicesIcon: false,
	// 		autostopOnImageFound: false,
	// 		globalOverlay:'img/overlayPortrait.png',
	// 		overlayMode:'stretch'
	// 	};
	// 	console.log('Launching camera with options:', options);
	// 	VuforiaAR.openIRFinder(options, app.viewSuccess, app.viewFailure);
	// },
	// startDefault: function() {
	// 	console.log("Let's start this overlayed view!");
	//
	// 	var viewOptions = {
	// 		overlay: cordova.file.externalApplicationStorageDirectory+'files/overlay-VVV.png',
	// 		// overlayMode: "cover"
	// 	};
	// 	console.log('Launching camera with viewOptions:', viewOptions);
	// 	OverlayedView.openFinder(viewOptions, app.viewSuccess, app.viewFailure);
	// },
	//
	startCoverAndroid: function() {
		console.log("Let's start this overlayed view!");

		var assetPathAndroid = cordova.file.applicationStorageDirectory+'files/overlay-VVV.png';

		var viewOptions = {
			overlay: assetPathAndroid,
			overlayMode: "cover"
		};
		console.log('Launching camera with viewOptions:', viewOptions);
		OverlayedView.openFinder(viewOptions, app.viewSuccess, app.viewFailure);
	},
	startCoverIOS: function() {
		console.log("Let's start this overlayed view!");
		// console.log("applicationDirectory fin:",cordova.file.applicationDirectory+"/img/overlayPortrait.png");

		// var assetPathIos = cordova.file.applicationDirectory+"/www/img/overlayPortrait.png";
		var assetPathIos = 'www/img/overlayPortrait.png';

		var viewOptions = {
			overlay: assetPathIos,
			overlayMode: "cover"
		};
		console.log('Launching camera with viewOptions:', viewOptions);
		OverlayedView.openFinder(viewOptions, app.viewSuccess, app.viewFailure);
	},

	viewSuccess: function(result) {
		console.log('View success!',result);
	},

	viewFailure: function(err) {
		console.log('View failure', err);
 	}

};

app.initialize();
