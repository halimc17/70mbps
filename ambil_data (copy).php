<?php
	require "global.php";
	include "koneksi.php";
	
	$siteId = $_GET['siteId'];
	
	$query = "select * from sites where siteId = '".$siteId."'";
	$hasil = mysql_query($query);
	$data = mysql_fetch_object($hasil);	
	
	//echo $query;
	//include "general_information.php";
	
?>
<table cellspacing="0" cellpadding="1">
	<tr>
		<td width="32%"><b>Site ID</b></td>
		<td><?php echo $data->siteId; ?></td>
	</tr>
	<tr>
		<td><b>Area Code</b></td>
		<td><?php echo $data->areaCode; ?></td>
	</tr>
	<tr>
		<td><b>Site Name</b></td>
		<td><?php echo $data->siteName; ?></td>
	</tr>
	<tr>
		<td><b>Area Name</b></td>
		<td><?php echo $data->areaName; ?></td>
	</tr>
	<tr>
		<td><b>Latitude</b></td>
		<td><?php echo $data->lat; ?></td>
	</tr>
	<tr>
		<td><b>Longitude</b></td>
		<td><?php echo $data->lng; ?></td>
	</tr>
	<tr>
		<td><b>Address</b></td>
		<td><?php echo $data->address; ?></td>
	</tr>
	<tr>
		<td><b>City</b></td>
		<td><?php echo $data->city; ?></td>
	</tr>
	<tr>
		<td><b>Site Type</b></td>
		<td><?php echo $data->siteType; ?></td>
	</tr>
	<tr>
		<td><b>Building Height</b></td>
		<td><?php echo $data->heightBuilding; ?></td>
	</tr>
	<tr>
		<td><b>Tower Height</b></td>
		<td><?php echo $data->heightTower; ?> m</td>
	</tr>
	<tr>
		<td><b>Tower Type</b></td>
		<td><?php echo $data->towerType; ?></td>
	</tr>
	<tr>
		<td><b>System Co Location</b></td>
		<td><?php echo $data->systemColo; ?></td>
	</tr>
	<tr>
		<td><b>Shelter Dimension</b></td>
		<td><?php echo $data->shelterDimension; ?></td>
	</tr>
	<tr>
		<td><b>Shelter Position</b></td>
		<td><?php echo $data->shelterPosition; ?></td>
	</tr>
</table>

