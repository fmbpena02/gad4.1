<?php
require_once('database.php');

// Check if the request is a POST request
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the form data
    $eventName = isset($_POST['eventName']) ? $_POST['eventName'] : 'walay';
    $eventFile = isset($_POST['eventFile']) ? $_POST['eventFile'] : [];
    $eventDate = isset($_POST['eventDate']) ? $_POST['eventDate'] : date('Y-m-d');

    // Check if eventFile is an array before processing
    if (is_array($eventFile) && isset($eventFile['sexColumn']) && is_array($eventFile['sexColumn'])) {
        foreach ($eventFile['sexColumn'] as $sex) {
            // Assuming 'sex' is the key in the array
            // echo $sex . '<br>';

            // Uncomment the following lines when you are ready to insert into the database
            $sql = "INSERT INTO attendance (sex, event_name, event_date) VALUES ('$sex', '$eventName', '$eventDate')";
            $result = mysqli_query($conn, $sql);

            if ($result) {
                echo "Data inserted successfully!";
            } else {
                echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
        }

        // Close the database connection
        $conn->close();
    } else {
        echo "Event File or sexColumn is not in the expected format.";
    }
} else {
    // If the request is not a POST request, echo an error message
    echo "Invalid request method. Please use POST.";
}
?>
