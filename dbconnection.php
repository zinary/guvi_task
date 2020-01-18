<?php
$servername = "localhost";
$username = "id12285584_root";
$password = "password";
$dbname = "id12285584_userdata";

$connection = new mysqli($servername, $username, $password, $dbname);
if ($connection->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
