<?php
header('Content-Type: application/json');

// Function to handle errors
function respond_with_error($message) {
    echo json_encode(["error" => $message]);
    exit;
}

// Fetch access token
$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL => "https://api.baubuddy.de/index.php/login",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => json_encode(["username" => "365", "password" => "1"]),
    CURLOPT_HTTPHEADER => [
        "Authorization: Basic QVBJX0V4cGxvcmVyOjEyMzQ1NmlzQUxhbWVQYXNz",
        "Content-Type: application/json"
    ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);

if ($err) {
    respond_with_error("cURL Error #: " . $err);
}

$response_data = json_decode($response, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    respond_with_error("Error decoding JSON response: " . json_last_error_msg());
}

$access_token = $response_data['oauth']['access_token'] ?? null;
if (!$access_token) {
    respond_with_error("Access Token not found in the response.");
}

// Fetch tasks
$curl = curl_init();
curl_setopt_array($curl, [
    CURLOPT_URL => "https://api.baubuddy.de/dev/index.php/v1/tasks/select",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "GET",
    CURLOPT_HTTPHEADER => [
        "Authorization: Bearer " . $access_token,
        "Content-Type: application/json"
    ],
]);

$secondR = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);

if ($err) {
    respond_with_error("cURL Error #: " . $err);
}

$tasks = json_decode($secondR, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    respond_with_error("Error decoding tasks JSON response: " . json_last_error_msg());
}

echo json_encode($tasks);
?>
