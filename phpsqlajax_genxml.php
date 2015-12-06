<?php
if (PHP_VERSION>='5') require_once('domxml-php4-to-php5.php');
require("global.php");

// Start XML file, create parent node
$doc = domxml_new_doc("1.0");
$node = $doc->create_element("markers");
$parnode = $doc->append_child($node);

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
//$query = "SELECT * FROM sites WHERE 1";
$query = "SELECT * FROM sites2 WHERE audit = 1";
$result = mysql_query($query);
if (!$result) {
  die('Invalid query: ' . mysql_error());
}


/*if ($handle = opendir('documents/audit_report/'.$siteId)) {
    while (false !== ($file = readdir($handle))) {
        if ($file != "." && $file != "..") {
            echo "<document>";
	    echo "<id>".$counter."</id>";
	    echo "<fileTitle>".$file."</fileTitle>";
	    echo "<fileName>".$siteId."/".$file."</fileName>";
	    echo "</document>";
	    $counter++;
	    //echo "<a href='docs/".$file."'>".$file."</a><br />";
        }
    }
    closedir($handle);
}*/








header("Content-type: text/xml");
// Iterate through the rows, adding XML nodes for each
while ($row = @mysql_fetch_assoc($result)){
  
  	//cek apakah sudah terdapat report didalam folder
	if ($handle = opendir('documents/audit_report/'.$row['siteId'])) {
	    while (false !== ($file = readdir($handle))) {
	        if ($file != "." && $file != "..") {
	            $status = 1;		    
	        }else{
		    $status = 0;
		}
	    }
	closedir($handle);
	}
  
  // ADD TO XML DOCUMENT NODE
  $node = $doc->create_element("marker");
  $newnode = $parnode->append_child($node);

  $newnode->set_attribute("siteId", $row['siteId']);
  $newnode->set_attribute("siteName", $row['siteName']);
  $newnode->set_attribute("address", $row['address']);
  $newnode->set_attribute("lat", $row['lat']);
  $newnode->set_attribute("lng", $row['lng']);
  $newnode->set_attribute("status", $status);
}

$xmlfile = $doc->dump_mem();
echo $xmlfile;

?>
