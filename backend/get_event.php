<?php
require_once("database.php");

$sql = "SELECT event_name FROM `events`";
$query = mysqli_query($conn, $sql);

$eventNames = array();

while ($row = mysqli_fetch_assoc($query)) {
    $eventNames[] = $row['event_name'];
}

$jsonResult = json_encode($eventNames);
echo $jsonResult;
?>
