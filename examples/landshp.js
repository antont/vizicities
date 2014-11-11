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
		
		function debugObject(lat, lng) {
			var dmat = new THREE.MeshBasicMaterial({color: 0x0000FF});
			var dcubegeom = new THREE.CubeGeometry(3, 8, 3);
			var dcube = new THREE.Mesh(dcubegeom, dmat);
			var dgeocoord = [lng, lat];
			var dscenecoord = city.geo.projection(dgeocoord, city.geo.tileZoom);
			dcube.position.x = dscenecoord[0];
			dcube.position.y = -0.2;
			dcube.position.z = dscenecoord[1];
			dcube.scale.set(10, 100, 10);
			city.webgl.scene.addToScene(dcube);
			return dcube;
		}
		
		var loader = new THREE.JSONLoader();
		loader.load( 'land-oulu.json', function ( geometry, materials ) {
					//color
					/*var material = materials[ 0 ];
					material.color.setHex( 0xffaaaa );
					material.ambient.setHex( 0x222222 );
					*/

					//var faceMaterial = new THREE.MeshFaceMaterial( materials );
					var mat = new THREE.MeshBasicMaterial({color: 0xFF0000}); //, opacity: 1, depthWrite: false})
					var land = new THREE.Mesh(geometry, mat) 
					
					//Oulu library island north-east corner:
					//65.015439, 25.464647
					//Elba southernmost point:
					//65.014217, 25.458059
					//Majakkaniemi south-west:
					//65.032385, 25.405157
					var geocoord = [25.458059, 65.014217];
					var scenecoord = city.geo.projection(geocoord, city.geo.tileZoom);
					land.position.x = scenecoord[0];
					land.position.y = -0.2;
					land.position.z = scenecoord[1];

					city.webgl.scene.addToScene(land);
					city.webgl.scene.scene.add(land)
					THREE.land = land; //for console debug					
					//land.rotation.x = - 90 * Math.PI / 180;
					//land.scale.set(1, 1, 1);

					var citylib = debugObject(65.015439, 25.464647);
					var elba = debugObject(65.014217, 25.458059);
					var majakka = debugObject(65.032385, 25.405157);
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