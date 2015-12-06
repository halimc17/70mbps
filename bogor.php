<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
<meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
<link href="http://code.google.com/apis/maps/documentation/javascript/examples/default.css" rel="stylesheet" type="text/css" />
<title>Bogor Sites + Indosat</title>
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
<script type="text/javascript" id="script">
var map, info_window, layer_1, layer_2, layer_3;
var tableid_1 = 1155491;
var tableid_2 = 1098608;
var tableid_3 = 1143124;
var zoom = 11;
var center = new google.maps.LatLng(-6.5947222,106.80565833);
 
function initialize() {
  map = new google.maps.Map(document.getElementById('map_canvas'), {
    center: center,
    zoom: zoom,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  info_window = new google.maps.InfoWindow();

  layer_1 = new google.maps.FusionTablesLayer({
    query: {
      select: 'lat',
      from: tableid_1
    },
    map: map,
    suppressInfoWindows: true
  });
  google.maps.event.addListener(layer_1, 'click', windowControl);

  layer_2 = new google.maps.FusionTablesLayer({
    query: {
      select: 'lat',
      from: tableid_2
    },
    map: map,
    suppressInfoWindows: true
  });
  google.maps.event.addListener(layer_2, 'click', windowControl);

  layer_3 = new google.maps.FusionTablesLayer({
    query: {
      select: 'lat',
      from: tableid_3
    }, styles: [{markerOptions:{iconName: "placemark_circle_highlight"}}],
    map: map,
    suppressInfoWindows: true
  });
  google.maps.event.addListener(layer_3, 'click', windowControl);

}

function windowControl(event) {
  info_window.setOptions({
    content: event.infoWindowHtml,
    position: event.latLng,
    pixelOffset: event.pixelOffset
  });
  info_window.open(map);
}
</script> 
</head>
<body onload="initialize()">
  <div id="map_canvas"></div>
</body>

</html>

