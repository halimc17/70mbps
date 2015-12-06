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
echo '<markers>';

// Iterate through the rows, printing XML nodes for each
while ($row = @mysql_fetch_assoc($result)){
  $lat = str_replace(",",".",$row['lat']);
  $long = str_replace(",",".",$row['long']);
  // ADD TO XML DOCUMENT NODE
  echo '<marker ';
  echo 'name="' . parseToXML($row['siteName']) . '" ';
  echo 'address="' . parseToXML($row['address']) . '" ';
  echo 'siteId="' . $row['siteId'] . '" ';
  echo 'lat="' . $lat . '" ';
  echo 'long="' . $long . '" ';
  echo 'region="' . $row['region'] . '" ';
  echo 'siteStatus="' . $row['siteStatus'] . '" ';
  echo '/>';
}

// End XML file
echo '</markers>';

?>