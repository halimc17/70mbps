<?php  
require("global.php"); 


$connection=mysql_connect ('localhost', $dbusername, $dbpassword);
if (!$connection) {  die('Not connected : ' . mysql_error());} 

$db_selected = mysql_select_db($dbname, $connection);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysql_error());
} 

$query = "SELECT * FROM generalDocuments";
$result = mysql_query($query);
if (!$result) {  
  die('Invalid query: ' . mysql_error());
} 

header("Content-type: text/xml"); 


echo "<documents>";

while($data = mysql_fetch_object($result)){
  echo "<document>";
    echo "<id>".$data->id."</id>";
  	echo "<fileTitle>".$data->fileTitle."</fileTitle>";
  	echo "<fileName>".$data->fileName."</fileName>";
  	echo "<tgl>".$data->tgl."</tgl>";
  	echo "<admin>".$data->admin."</admin>";
  echo "</document>";
  
} 
echo "</documents>";
?>



