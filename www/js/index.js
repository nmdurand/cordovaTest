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

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', app.onDeviceReady.bind(app), false);
		console.log("Finished Initializing...");
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		console.log('Preparing everything');

		var testButton = document.getElementById('testButton');
		testButton.addEventListener('click', app.startOverlayedPhoto);

    	console.log("Cordova file object:",cordova.file);
    	console.log("Local storage:",cordova.file.applicationDirectory);
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },

	startOverlayedPhoto: function() {
		console.log("Let's start this selfie capture!");
		// console.log("applicationDirectory fin:",cordova.file.applicationDirectory+"/img/overlayPortrait.png");

		var assetPathIos = cordova.file.applicationDirectory+"/www/img/overlay-Dingo.png";
		// var assetPathIos = 'www/img/overlay-Dingo.png';

		var viewOptions = {
			overlay: assetPathIos,
			useFrontCamera: true,
			saveToAlbum: true
		};
		console.log('Launching camera with viewOptions:', viewOptions);
		OverlayedPhoto.openFinder(viewOptions, app.viewSuccess, app.viewFailure);
	},

	viewSuccess: function(result) {
		console.log('View success!',result);
	},

	viewFailure: function(err) {
		console.log('View failure', err);
 	}

};

app.initialize();
