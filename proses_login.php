<?php

	require "global.php";
	include "koneksi.php";

	$user_username = $_POST['txt_username'];
	$user_password = $_POST['txt_password'];

	$user_username = stripslashes($user_username);
	$user_password = stripslashes($user_password);
	$user_username = mysql_real_escape_string($user_username);
	$user_password = mysql_real_escape_string($user_password);

	$query = "select * from pengguna where username = '".$user_username."' and password = '".$user_password."'";
	$hasil = mysql_query($query);
	$data = mysql_fetch_object($hasil);

	$user_name = $data->name;
	$level = $data->administrator;
	
	$count = mysql_num_rows($hasil);

	if($count == 1)
	{		
		session_start();
		//session_register("user_username");		
		//session_register("level");
		$_SESSION["user_username"] = $user_username;
		$_SESSION["level"] = $level;
		echo "{success: true}";
	}
	else
	{
		echo "{success: false, errors: { reason: 'Login failed. Try again.' }}";
	}	

?>
