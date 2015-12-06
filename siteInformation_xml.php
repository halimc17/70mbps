<?php
require("global.php");

function parseToXML($htmlStr)
{
$xmlStr=str_replace('<','&lt;',$htmlStr);
$xmlStr=str_replace('>','&gt;',$xmlStr);
$xmlStr=str_replace('"','&quot;',$xmlStr);
$xmlStr=str_replace("'",'&#39;',$xmlStr);
$xmlStr=str_replace("&",'&amp;',$xmlStr);
return $xmlStr;
}

// Opens a connection to a MySQL server
$connection=mysql_connect ('localhost', $dbusername, $dbpassword);
if (!$connection) {
  die('Not connected : ' . mysql_error());
}

// Set the active MySQL database
$db_selected = mysql_select_db($dbname, $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysql_error());
}

// Select all the rows in the markers table
$query = "SELECT * FROM site_information WHERE 1";
$result = mysql_query($query);
if (!$result) {
  die('Invalid query: ' . mysql_error());
}

header("Content-type: text/xml");

// Start XML file, echo parent node
echo "<sites>";

// Iterate through the rows, printing XML nodes for each
while ($row = @mysql_fetch_assoc($result)){
  $lat = str_replace(",",".",$row['lat']);
  $long = str_replace(",",".",$row['long']);
  // ADD TO XML DOCUMENT NODE
  echo "<site>";
	  echo "<siteId>".$row['siteId']."</siteId>";
	  echo "<siteName>".$row['siteName']."</siteName>";
	  echo "<region>".$row['region']."</region>";
	  echo "<address>".$row['address']."</address>";
	  echo "<siteCategory>".$row['siteCategory']."</siteCategory>";
	  echo "<ownersName>".$row['ownersName']."</ownersName>";
	  echo "<siteLocation>".$row['siteLocation']."</siteLocation>";
	  echo "<height>".$row['height']."</height>";
	  echo "<towerDesign>".$row['towerDesign']."</towerDesign>";
	  echo "<analysisType>".$row['analysisType']."</analysisType>";
	  echo "<surveyType>".$row['surveyType']."</surveyType>";
	  echo "<lat>".$row['lat']."</lat>";
	  echo "<long>".$row['long']."</long>";
  echo "</site>";
  
}

// End XML file
echo "</sites>";

?>