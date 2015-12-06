<?php  
header("Content-type: text/xml"); 

//$siteId = $_GET['siteId'];

$counter = 1;
echo "<documents>";
if ($handle = opendir('documents/strengthening_report2')) {
    while (false !== ($file = readdir($handle))) {
        if ($file != "." && $file != "..") {
           echo "<document>";
	    echo "<id>".$counter."</id>";
	    echo "<fileTitle>".$file."</fileTitle>";
	    echo "<fileName>".$file."</fileName>";
	    echo "</document>";
	    $counter++;
	    //echo "<a href='docs/".$file."'>".$file."</a><br />";
        }
    }
    closedir($handle);
}
echo "</documents>";
?>



