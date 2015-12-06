
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
  <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
  <title>Google Maps JavaScript API v3 Example: Fusion Tables Layer</title>
  <link href="http://code.google.com/apis/maps/documentation/javascript/examples/default.css" rel="stylesheet" type="text/css" />
  <script type="text/javascript" src="//maps.googleapis.com/maps/api/js?sensor=false"></script>
  <script type="text/javascript">

  function initialize() {

    var indonesia = new google.maps.LatLng(-1.265386,116.8312);

    map = new google.maps.Map(document.getElementById('map_canvas'), {
      center: indonesia,
      zoom: 5,
      mapTypeId: 'roadmap'
    });
 
    layer = new google.maps.FusionTablesLayer({
      query: {
        select: 'lat',
        from: '2529580'
      }
    });
    layer.setMap(map);
  }
  </script>
</head>
<body onload="initialize()">
  <div id="map_canvas"></div>
</body>
</html>

