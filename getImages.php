<?php 
$site_number = $_GET['siteId'];
//$site_number = '001';  

?>
<style>
#thumbnail img
{
margin-right:10px;
margin-bottom:10px;
}
</style>
<script type="text/javascript">
		$(function(){
				$('#box a').lightBox();			
			});
</script>  
<style>
	#box a
	{
		border:0;
	}
</style>
<div id="box">
<?php
$path= "images/media/".$site_number."/500/";
$thumbnail = "images/media/".$site_number."/90";
// change the path here related to this page
$handle=opendir($path);

echo "<div id='thumbnail' style='width:300px;'>";
while (($file = readdir($handle))!==false) {
if(strlen($file)>3){echo "<a href='$path$file' rel='lightbox'><img src='".$thumbnail."/".$file."' border='0'  /></a>";;}
}
closedir($handle);
echo "&nbsp;</div>";
?>	
</div>
