<?php
require_once('database.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $eventName = $_POST['eventName'];
    $eventDescription = $_POST['eventDescription'];

    // Insert data into the events table
    $sql = "INSERT INTO events (event_name, event_description) VALUES ('$eventName', '$eventDescription')";
    if ($conn->query($sql) === TRUE) {
        echo "Data added successfully!";
        header("Location: ../index(3).php");
        exit();
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
