<?php
require_once('table.php');

// Handle delete operation
if (isset($_GET['deleteId'])) {
    $deleteId = $_GET['deleteId'];
    deleteEvent($deleteId);
}

// Handle update operation
if (isset($_POST['btn-update'])) {
    $editEventId = $_POST['editEventId'];
    $editEventName = $_POST['editEventName'];
    $editEventDescription = $_POST['editEventDescription'];

    updateEvent($editEventId, $editEventName, $editEventDescription);
}

// Redirect back to the main page after processing
header("Location: ../index.html");
exit();
?>

<?php
require_once('table.php');

// Handle delete operation
if (isset($_GET['deleteId'])) {
    $deleteId = $_GET['deleteId'];
    deleteEvent($deleteId);
}

// Handle update operation
if (isset($_POST['btn-update'])) {
    $editEventId = $_POST['editEventId'];
    $editEventName = $_POST['editEventName'];
    $editEventDescription = $_POST['editEventDescription'];

    updateEvent($editEventId, $editEventName, $editEventDescription);
}

// Redirect back to the main page after processing
header("Location: ../index.html");
exit();
?>
