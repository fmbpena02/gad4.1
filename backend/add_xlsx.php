<?php
require_once('database.php');

// Check if the request is a POST request
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the form data
    $eventName = isset($_POST['eventName']) ? $_POST['eventName'] : 'walay';
    $eventFile = isset($_POST['eventFile']) ? $_POST['eventFile'] : [];
    $eventDate = isset($_POST['eventDate']) ? $_POST['eventDate'] : date('Y-m-d');

    // Check if eventFile is an array before encoding to JSON
    if (is_array($eventFile)) {
        foreach ($eventFile as $item) {
            // Assuming 'sex' is a key in each item of the array
            $sex = isset($item['sex']) ? $item['sex'] : '';

                // Echo for indication
                echo $sex . '<br>';
            // $sex = isset($item['sex']) ? $item['sex'] : '';
            
            // $sql = "INSERT INTO attendance (sex, event_name, event_date) VALUES ('$sex', '$eventName', '$eventDate')";
            // $result = mysqli_query($conn, $sql);
            
            // if ($result) {
            //     echo "Data inserted successfully!";
            // } else {
            //     echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            // }
        }

        // Close the database connection
        $conn->close();
    } else {
        echo "Event File is not an array.";
    }
} else {
    // If the request is not a POST request, echo an error message
    echo "Invalid request method. Please use POST.";
}
?>
