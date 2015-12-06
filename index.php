<?php
include "periksa_session.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<title>TIMS - 70 MBPS</title>
	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
	
	<link rel="stylesheet" type="text/css" href="jslib/ext4/resources/css/ext-all.css" />	
	<link rel="stylesheet" type="text/css" href="css/style.css" />
	<link rel="stylesheet" href="css/lightbox.css" type="text/css" media="screen" />
		
	<script type="text/javascript" src="js/function.js"></script>
	<script type="text/javascript" src="jslib/ext4/bootstrap.js"></script>
	<script type="text/javascript" src="js/layout.js"></script>
	<script type="text/javascript" src="js/var.js"></script>
	<script type="text/javascript" src="js/loadmap.js"></script>
	
	<script type="text/javascript" src="js/lightbox/prototype.js"></script>
	<script type="text/javascript" src="js/lightbox/scriptaculous.js?load=effects,builder"></script>
	<script type="text/javascript" src="js/lightbox/lightbox.js"></script>  	
	
</head>
<body>
	    <!-- use class="x-hide-display" to prevent a brief flicker of the content -->
	    <div id="west" class="x-hide-display">
	        <div id="side_bar" style="padding:3px;"><!--<p>Please Select site on the map</p>-->&nbsp;</div>
	    </div>
	    <div id="center2" class="x-hide-display">
			<p><a id="hideit" href="#">Toggle the west region</a></p>
			<p>This is Administrator area</p>	        
	    </div>
	    <div id="map_canvas" class="x-hide-display" style=" overflow:visible; z-index: 0; width:100%; height:100%;">
	        <p><b>If you can read this that mean the map does not working, call me :P</b></p>	        
	    </div>
		
	    <div id="props-panel" class="x-hide-display" style="width:200px;height:200px;overflow:hidden;">
	    </div>
	    <div id="south" class="x-hide-display">
	        <p>Copyright @ PT. Teleconsult Nusantara 2011</p>
	    </div>
</body>
</html>
