<?php
include "global.php";
include "koneksi.php";

$query = "select siteId, siteName from sites2 where audit = 1";
$hasil = mysql_query($query);

$counter = 1;
while($data = mysql_fetch_object($hasil))
{
	if($handle = opendir('images/media/'.$data->siteId))
	{
		echo "<div style='color:blue;'>".$counter.".&nbsp;".$data->siteId."-".$data->siteName."</div>";
		while (false !== ($file = readdir($handle))) {
        		if ($file != "." && $file != "..") {
           	       //echo $file;	    		
		//echo "<br />";	
        }
    }
    closedir($handle);

	}
	else
	{
		echo $counter.".&nbsp;".$data->siteId."-".$data->siteName."<br />";
	}
	
	$counter++;
	echo "<br />";
}
?>