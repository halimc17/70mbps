<?php
	
	session_start();
	if(isset($_SESSION["user_username"])){
		echo "&nbsp;";
	}else{
		header("location:login.php");
	}

	/*if(!session_is_registered("user_username"))
	{
		header("location:login.php");
		//echo "belum ada session"
	}*/	
	
?>
