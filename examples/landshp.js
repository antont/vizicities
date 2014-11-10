/* globals window, _, VIZI, Q */
/*(function() {
	"use strict";
*/
	VIZI.Land = function() {
		VIZI.Log("Inititialising land");
		
		VIZI.Object.call(this);
		this.object = this.createObject();
	}

	VIZI.Land.prototype = Object.create( VIZI.Object.prototype );

	VIZI.Land.prototype.createObject = function() {
		VIZI.Log("Loading land");
		
		//var landGeom = new THREE.PlaneGeometry(40000, 40000, 4, 4);
		
		/* using SHP for the Oulu export from QGIS was borked (broken geom) so going via Blender & Three.json now
		parsedShp = null;
		SHPParser.load('shp.js/qgis-hietasaari.shp', function(res) {
		//SHPParser.load('shp.js/oulu_land-polygons-split-3857.shp', function(res) {
          console.log('ok', res);
          parsedShp = res;
          var loader = new THREE.SHPLoader();
          //var m = loader.createModel(parsedShp, false);
          //m.scale.set(1.01, 1.01, 1.01);
          //console.log('created model', m);
          var compressed = loader.compress(parsedShp);
          land = loader.loadCompressed(compressed, false);
          //s.add(new THREE.Mesh(
          //  new THREE.SphereGeometry(88,64, 64),
          //  new THREE.MeshBasicMaterial({color: 0x0000FF, opacity: 0.3, depthWrite:false})
          //));
          //s.add(m);
		  
		  //land.scale.set(1, 1, 1);
		  land.position.y = -0.2;
		  land.rotation.x = - 90 * Math.PI / 180;
		  city.webgl.scene.scene.add(land);
		});
		*/
		
		var loader = new THREE.JSONLoader();
		loader.load( 'land-oulu.json', function ( geometry, materials ) {
					//color
					/*var material = materials[ 0 ];
					material.color.setHex( 0xffaaaa );
					material.ambient.setHex( 0x222222 );
					*/

					var faceMaterial = new THREE.MeshFaceMaterial( materials );
					var mat = new THREE.MeshBasicMaterial({color: 0xFF0000}); //, opacity: 1, depthWrite: false})
					var land = new THREE.Mesh(geometry, mat) 
					
					land.position.y = -0.2;
					//land.rotation.x = - 90 * Math.PI / 180;
					//land.scale.set(1, 1, 1);

					city.webgl.scene.scene.add(land);
					console.log("LAND ADDED");
					THREE.land = land; //for console debug
		});		
		
		/*
		var landMat = new THREE.MeshBasicMaterial({color: 0x08f808});
		var land = new THREE.Mesh(landGeom, landMat);
		land.position.y = -0.2;
		land.rotation.x = - 90 * Math.PI / 180;
		*/

		//this.publish("addToScene", land);
		//that was imitated from Floor but apparently the floor doesn't even work
		
		//return land;
	}
/*}
);*/