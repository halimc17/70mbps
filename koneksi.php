<?php
include "global.php";
mysql_connect("localhost", $dbusername, $dbpassword)or die("Tidak bisa melakukan koneksi ke server database");
mysql_select_db($dbname)or die("Tidak bisa melakukan pemilihan database");
?>
