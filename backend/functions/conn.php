<?php
require_once 'classes/DatabaseConnection.php';

    $host = 'localhost';
    $username = 'root';
    $password = '';
    $database = 'ecommerce';

$db = new DatabaseConnection($host, $username, $password, $database);

?>