<?php
include "global.php";
include "koneksi.php";

$query = "select heightTower from sites group by heightTower";
$hasil = mysql_query($query);

while($data = mysql_fetch_object($hasil))
{
	echo json_encode($data->heightTower);
}
?>
