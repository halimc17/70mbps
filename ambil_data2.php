<?php
	require "global.php";
	include "koneksi.php";
	
	$siteId = $_GET['siteId'];
	
	$query = "select * from site_information where siteId = '".$siteId."'";
	$hasil = mysql_query($query);
	$data = mysql_fetch_object($hasil);
	
	$siteId = $data->siteId;
	$region = $data->region;	
	$siteName = $data->siteName;
	$latitude = $data->lat;
	$longitude = $data->long;
	$address = $data->address;
	$ownersName = $data->ownersName;
	$siteLocation = $data->siteLocation;
	$siteStatus = $data->siteStatus;
	$towerType = $data->towerType;
	$height = $data->height;
	$towerDesign = $data->towerDesign;

	
	$arr = array('siteId2'=>$siteId, 
				 'region2'=>$region, 
				 'siteName2'=>$siteName,
				 'lat2'=>$latitude,
				 'long2'=>$longitude,
				 'address2'=>$address,
				 'ownersName2'=>$ownersName,
				 'siteLocation2'=>$siteLocation,
				 'siteStatus2'=>$siteStatus,
				 
				 'towerType2'=>$towerType,			 
				 'height2'=>$height,			 
				 'towerDesign2'=>$towerDesign	 
				 );
	echo '{success: true, data:'.json_encode($arr).'}';
	
	

	
?>


