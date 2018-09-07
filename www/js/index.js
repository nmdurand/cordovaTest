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


		var myButton = document.getElementById('myButton0');
		myButton.addEventListener('click', app.startAndroid1);

		var myButton = document.getElementById('myButton1');
		myButton.addEventListener('click', app.startAndroid2);

		var myButton2 = document.getElementById('myButton2');
		myButton2.addEventListener('click', app.startAndroid3);
		//
		var myButton3 = document.getElementById('myButton3');
		myButton3.addEventListener('click', app.startAndroid4);

		console.log("Cordova file object:",cordova.file);
		console.log("Local storage:",cordova.file.applicationDirectory);

	},

	// Update DOM on a Received Event
	receivedEvent: function(id) {
		console.log('Received Event: ' + id);
	},



	startIOS1: function() {
		console.log("Let's play with AR!");

		var options = {
			vuforiaLicense: vuforiaLicenseKey,
			databaseXmlFile: cordova.file.applicationDirectory+'www/vuforia/happiVumark.xml',
			// globalOverlay: cordova.file.applicationDirectory+'www/img/overlay-VVV.png',
			// globalOverlay: '',
			// globalOverlayMode:'stretch',
			// globalOverlayMode:'stretch',
			// closeButtonMode:'',
			overlayImageFolder:  cordova.file.applicationDirectory+'www/vuforia/overlays/happiVumark/',
			targetList:[
				"vumark-0",
				"vumark-13",
				"vumark-28",
				"vumark-39"
			],
			maxSimultaneousTargets:2
		};
		console.log('Launching camera with options:', options);
		VuforiaAR.openFinder(options, app.viewSuccess, app.viewFailure);
	},


	startIOS2: function() {
		console.log("Let's play with AR!");

		var options = {
			vuforiaLicense: vuforiaLicenseKey,
			databaseXmlFile: cordova.file.applicationDirectory+'www/vuforia/happinovTestAR.xml',
			// globalOverlay: cordova.file.applicationDirectory+'www/img/overlay-VVV.png',
			// globalOverlay: '',
			// globalOverlayMode:'stretch',
			// closeButtonMode:'',
			overlayImageFolder:  cordova.file.applicationDirectory+'www/vuforia/overlays/happinovTestAR/',
			// hideCloseButton:false
			targetList:[
				"Es11BondJamesBond",
				"Es12Identification",
				"Es20FemmesFatales",
				"EsAgent2",
				"EsAgent3"
			],
			maxSimultaneousTargets:2
		};
		console.log('Launching camera with options:', options);
		VuforiaAR.openFinder(options, app.viewSuccess, app.viewFailure);
	},


	startIOS3: function() {
		console.log("Let's play with AR!");

		var options = {
			vuforiaLicense: vuforiaLicenseKey,
			databaseXmlFile: cordova.file.applicationDirectory+'www/vuforia/MortonTuxedos.xml',
			// globalOverlay: '',
			// globalOverlayMode:'',
			// closeButtonMode:'invisible',
			// globalOverlay: cordova.file.applicationDirectory+'www/img/overlay-HHH.png',
			// globalOverlayMode:'cover',
			// hideCloseButton:false,
			overlayImageFolder:  cordova.file.applicationDirectory+'www/vuforia/overlays/mortonTux/',
			targetList:[
				"vumark-0000",
				"vumark-1111",
				"vumark-2222",
				"vumark-3333",
				"vumark-4444",
				"vumark-5555",
				"vumark-6666",
				"vumark-7777",
				"vumark-8888",
				"vumark-9999",
				"vumark-aaaa",
				"vumark-bubu",
				"vumark-caca",
				"vumark-coco",
				"vumark-dada",
				"vumark-eeee",
				"vumark-iiii",
				"vumark-mama",
				"vumark-mamy",
				"vumark-mimi",
				"vumark-oooo",
				"vumark-papa",
				"vumark-papy",
				"vumark-pipi",
				"vumark-popo"
			]
			// ],
			// maxSimultaneousTargets:10
		};
		console.log('Launching camera with options:', options);
		VuforiaAR.openFinder(options, app.viewSuccess, app.viewFailure);
	},
	startIOS4: function() {
		console.log("Let's play with AR!");

		var options = {
			vuforiaLicense: vuforiaLicenseKey,
			databaseXmlFile: cordova.file.applicationDirectory+'www/vuforia/MortonTuxedos.xml',
			// globalOverlay: cordova.file.applicationDirectory+'www/img/overlay-HHH.png',
			// globalOverlayMode:'contain',
			// closeButtonMode:'invisible',
			// hideCloseButton:false,
			// overlayImageFolder:  cordova.file.applicationDirectory+'www/vuforia/overlays/',
			targetList:[
				"vumark-0000",
				"vumark-1111",
				"vumark-2222",
				"vumark-3333",
				"vumark-4444",
				"vumark-5555",
				"vumark-6666",
				"vumark-7777",
				"vumark-8888",
				"vumark-9999",
				"vumark-aaaa",
				"vumark-bubu",
				"vumark-caca",
				"vumark-coco",
				"vumark-dada",
				"vumark-eeee",
				"vumark-iiii",
				"vumark-mama",
				"vumark-mamy",
				"vumark-mimi",
				"vumark-oooo",
				"vumark-papa",
				"vumark-papy",
				"vumark-pipi",
				"vumark-popo"
			],
			maxSimultaneousTargets:2
		};
		console.log('Launching camera with options:', options);
		VuforiaAR.openIRFinder(options, app.viewSuccess, app.viewFailure);
	},





	startAndroid1: function() {
		console.log("Let's start this overlayed view!");

		var viewOptions = {
			vuforiaLicense: vuforiaLicenseKey,
			// databaseXmlFile: cordova.file.applicationStorageDirectory+'vuforia/Vuforia.xml',
			databaseXmlFile: cordova.file.externalApplicationStorageDirectory+'files/happiVumark.xml',
			// globalOverlay: cordova.file.externalApplicationStorageDirectory+'files/overlay-VVV.png',
			// globalOverlayMode:'stretch',
			// closeButtonMode:'',
			overlayImageFolder:  cordova.file.externalApplicationStorageDirectory+'files/overlays/happiVumark/',
			targetList:[
				"vumark-0",
				"vumark-13",
				"vumark-28",
				"vumark-39"
			],
			maxSimultaneousTargets:2
		};
		VuforiaAR.openFinder(viewOptions, app.viewSuccess, app.viewFailure);
	},
	startAndroid2: function() {
		console.log("Let's start this overlayed view!");

		var viewOptions = {
			vuforiaLicense: vuforiaLicenseKey,
			databaseXmlFile: cordova.file.externalApplicationStorageDirectory+'files/happinovTestAR.xml',
			// globalOverlay: cordova.file.externalApplicationStorageDirectory+'files/overlay-VVV.png',
			overlayImageFolder:  cordova.file.externalApplicationStorageDirectory+'files/overlays/happinovTestAR/',
			// globalOverlayMode:'cover',
			// closeButtonMode:'transparent',
			targetList:[
				"Es11BondJamesBond",
				"Es12Identification",
				"Es20FemmesFatales",
				"EsAgent2",
				"EsAgent3"
			],
			maxSimultaneousTargets:2
		};
		VuforiaAR.openFinder(viewOptions, app.viewSuccess, app.viewFailure);
	},
	startAndroid3: function() {
		console.log("Let's start this overlayed view!");

		var viewOptions = {
			vuforiaLicense: vuforiaLicenseKey,
			databaseXmlFile: cordova.file.externalApplicationStorageDirectory+'files/MortonTuxedos.xml',
			// globalOverlay: cordova.file.externalApplicationStorageDirectory+'files/overlay-HHH.png',
			// globalOverlay:'',
			// globalOverlayMode:'',
			// closeButtonMode:'',
			overlayImageFolder:  cordova.file.externalApplicationStorageDirectory+'files/overlays/mortonTux/',
			targetList:[
				"vumark-0000",
				"vumark-1111",
				"vumark-2222",
				"vumark-3333",
				"vumark-4444",
				"vumark-5555",
				"vumark-6666",
				"vumark-7777",
				"vumark-8888",
				"vumark-9999",
				"vumark-aaaa",
				"vumark-bubu",
				"vumark-caca",
				"vumark-coco",
				"vumark-dada",
				"vumark-eeee",
				"vumark-iiii",
				"vumark-mama",
				"vumark-mamy",
				"vumark-mimi",
				"vumark-oooo",
				"vumark-papa",
				"vumark-papy",
				"vumark-pipi",
				"vumark-popo"
			]
			// ],
			// maxSimultaneousTargets:2
		};
		VuforiaAR.openFinder(viewOptions, app.viewSuccess, app.viewFailure);
	},
	startAndroid4: function() {
		console.log("Let's start this overlayed view!");

		var viewOptions = {
			vuforiaLicense: vuforiaLicenseKey,
			databaseXmlFile: cordova.file.externalApplicationStorageDirectory+'files/MortonTuxedos.xml',
			// globalOverlay: cordova.file.externalApplicationStorageDirectory+'files/overlay-HHH.png',
			// globalOverlayMode:'contain',
			// closeButtonMode:'invisible',
			targetList:[
				"vumark-0000",
				"vumark-1111",
				"vumark-2222",
				"vumark-3333",
				"vumark-4444",
				"vumark-5555",
				"vumark-6666",
				"vumark-7777",
				"vumark-8888",
				"vumark-9999",
				"vumark-aaaa",
				"vumark-bubu",
				"vumark-caca",
				"vumark-coco",
				"vumark-dada",
				"vumark-eeee",
				"vumark-iiii",
				"vumark-mama",
				"vumark-mamy",
				"vumark-mimi",
				"vumark-oooo",
				"vumark-papa",
				"vumark-papy",
				"vumark-pipi",
				"vumark-popo"
			],
			maxSimultaneousTargets:2
		};
		VuforiaAR.openIRFinder(viewOptions, app.viewSuccess, app.viewFailure);
	},


	viewSuccess: function(result) {
		console.log('View success!',result);
	},

	viewFailure: function(err) {
		console.log('View failure', err);
	}

};

app.initialize();
