<?php  

//$siteId = $_GET['siteId'];

$counter = 1;

if ($handle = opendir('documents/audit_report/')) {
    while (false !== ($dir = readdir($handle))) {
        if ($dir != "." && $dir != "..") {
	
            //echo "<div style='background-color:#ccc;margin-top:10px;'>";
	    //echo $counter.".&nbsp;";
	    //echo $dir."<br />";

	    if($handle2 = opendir('documents/audit_report/'.$dir)){
	      while(false !== ($file = readdir($handle2))){
		if ($file != "." && $file != "..") 
		   {
			//echo $counter.".&nbsp;";
	    		echo $dir."<br />";		     
			//echo $file."<br />";
		   }
               }
              
	    }
	    $counter++;
            //echo "</div>";
        }
    }
    closedir($handle);
}
?>



