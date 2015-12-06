<?php  
header("Content-type: text/xml"); 

$siteId = $_GET['siteId'];

$counter = 1;
echo "<documents>";
if ($handle = opendir('images/media/'.$siteId.'/document/')) {
    while (false !== ($file = readdir($handle))) {
        if ($file != "." && $file != "..") {
        echo "<document>";
	    echo "<id>".$counter."</id>";
	    echo "<fileTitle>".$file."</fileTitle>";
	    echo "<fileName>images/media/".$siteId."/document/".$file."</fileName>";
	    echo "</document>";
	    $counter++;
	    //echo "<a href='docs/".$file."'>".$file."</a><br />";
        }
    }
    closedir($handle);
}
echo "</documents>";
?>



