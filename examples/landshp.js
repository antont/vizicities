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
		
		parsedShp = null;
		SHPParser.load('shp.js/110m_land.shp', function(res) {
          console.log('ok', res);
          parsedShp = res;
          var loader = new THREE.SHPLoader();
          /*var m = loader.createModel(parsedShp, false);
          m.scale.set(1.01, 1.01, 1.01);
          console.log('created model', m);*/
          var compressed = loader.compress(parsedShp);
          land = loader.loadCompressed(compressed, false);
          /*s.add(new THREE.Mesh(
            new THREE.SphereGeometry(88,64, 64),
            new THREE.MeshBasicMaterial({color: 0x0000FF, opacity: 0.3, depthWrite:false})
          ));*/
          //s.add(m);
		  
		  land.scale.set(100, 100, 1);
		  land.position.y = -0.2;
		  land.rotation.x = - 90 * Math.PI / 180;
		  city.webgl.scene.scene.add(land);
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