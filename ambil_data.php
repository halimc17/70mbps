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

	
	$arr = array('siteId'=>$siteId, 
				 'region'=>$region, 
				 'siteName'=>$siteName,
				 'lat'=>$latitude,
				 'long'=>$longitude,
				 'address'=>$address,
				 'ownersName'=>$ownersName,
				 'siteLocation'=>$siteLocation,
				 'siteStatus'=>$siteStatus,
				 
				 'towerType'=>$towerType,			 
				 'height'=>$height,			 
				 'towerDesign'=>$towerDesign	 
				 );
	echo '{success: true, data:'.json_encode($arr).'}';
	
	

	
?>


