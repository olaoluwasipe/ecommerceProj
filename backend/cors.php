<?php
// Your existing routes

// Allow requests from any origin
header("Access-Control-Allow-Origin: *");

// Allow specific headers
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

// Allow specific HTTP methods
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

// Allow credentials (if needed)
header("Access-Control-Allow-Credentials: true");

// Handle preflight requests (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Respond to preflight requests
    header("HTTP/1.1 200 OK");
    exit;
}

// Your existing routes
// ...

// Example: Return JSON response
$responseData = array('message' => 'Hello, CORS is now allowed!');
header('Content-Type: application/json');
// echo json_encode($responseData);
