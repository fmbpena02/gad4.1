<?php
require_once('database.php');

// Function to get events data from the database
function getEventsData()
{
    global $conn; // Access the global connection variable from database.php
    $eventsData = array();

    // Fetch data from the events table (adjust the query according to your database structure)
    $query = "SELECT event_name, event_description FROM events";
    $result = mysqli_query($conn, $query);

    if ($result) {
        // Fetch associative array
        while ($row = mysqli_fetch_assoc($result)) {
            $eventsData[] = $row;
        }
        // Free result set
        mysqli_free_result($result);
    } else {
        // Handle errors if needed
        echo "Error: " . mysqli_error($conn);
    }

    return $eventsData;
}
?>
