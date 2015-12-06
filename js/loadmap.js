var customIcons = {
      not_started: {
        icon: 'images/red.png'
      },
      survey_completed: {
        icon: 'images/orange.png'
      },
	  structuralDesign_completed: {
        icon: 'images/blue.png'
      },
	  groundingDesign_completed: {
        icon: 'images/magenta.png'
      },
	  ESR_completed: {
        icon: 'images/purple.png'
      },
	  all_completed: {
        icon: 'images/green.png'
      },
	  inactive: {
        icon: 'images/white.png'
      }
    };
	
	
    function load() {
      var map = new google.maps.Map(document.getElementById("map_canvas"), {
        center: new google.maps.LatLng(-6.27866, 106.7244),
        zoom: 10,
        mapTypeId: 'roadmap'
      });
      var infoWindow = new google.maps.InfoWindow;

      // Change this depending on the name of your PHP file
      downloadUrl("phpsqlajax_genxml2.php", function(data) {
        var xml = data.responseXML;
        var markers = xml.documentElement.getElementsByTagName("marker");
        for (var i = 0; i < markers.length; i++) {
          var name = markers[i].getAttribute("name");
          var siteId = markers[i].getAttribute("siteId");

          var address = markers[i].getAttribute("address");
          var type = markers[i].getAttribute("type");
          var region = markers[i].getAttribute("region");
          var siteStatus = markers[i].getAttribute("siteStatus");
          
		  var lat = parseFloat(markers[i].getAttribute("lat"));
		  var lng = parseFloat(markers[i].getAttribute("long"));
		  
          var point = new google.maps.LatLng(lat, lng);
			  
          var html = "<b>"+ siteId +"</b><br /><b>" + name + "</b> <br/>" + address + "<br /><b>" + point + "<br/>" + region + "</b>";
          var icon = customIcons[siteStatus] || {};
          var marker = new google.maps.Marker({
            map: map,
            position: point,
            icon: icon.icon
          });
          bindInfoWindow(marker, map, infoWindow, html, siteId);
		  
        }
      });
	  
	  //set legend
	  var legendDiv = document.createElement('DIV');
	  var legend = new Legend(legendDiv, map);
	  legendDiv.index = 1;
	  map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legendDiv);
	  
    }

    function bindInfoWindow(marker, map, infoWindow, html, siteId) {
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
		
			generalInformation.getForm().load({
			url:'ambil_data.php?siteId='+siteId
		  });
		  loadAuditReport(siteId);
		  loadMedia(siteId);
      });
    }

    function downloadUrl(url, callback) {
      var request = window.ActiveXObject ?
          new ActiveXObject('Microsoft.XMLHTTP') :
          new XMLHttpRequest;

      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          request.onreadystatechange = doNothing;
          callback(request, request.status);
        }
      };

      request.open('GET', url, true);
      request.send(null);
    }

    function doNothing() {}