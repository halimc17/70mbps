var tableid = "14LPKpEhh-ZYkuxd6ZhrvLHzkhgDvcXTYe9mazhI3"; //70 MBPS

var zoom = 9;
var center = new google.maps.LatLng( -6.35702,106.8085);

function initialize() {
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
    center: center,
    zoom: zoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  //map.addMapType(G_SATELLITE_3D_MAP);

  //layer.setMap(map);
 
	
   layer = new google.maps.FusionTablesLayer({
		query : {select: 'lat', from: tableid},
		map:map
	});  

  //set legend
  var legendDiv = document.createElement('DIV');
  var legend = new Legend(legendDiv, map);
  legendDiv.index = 1;
  //map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legendDiv);

  
  //add a click listener to the layer
  google.maps.event.addListener(layer, 'click', function(e) {  
  siteId = e.row['siteId'].value;//passing parameter
	  generalInformation.getForm().load({
	  	url:'ambil_data.php?siteId='+siteId
	  });	  
	  //loadMedia(siteId);
	  loadAuditReport(siteId);
	  //loadStrengtheningReport(siteId);
  });


  } 
  
function doNothing(){}
