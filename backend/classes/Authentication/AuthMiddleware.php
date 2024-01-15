<?php

class AuthMiddleware {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function checkLoggedIn() {
        return isset($_SESSION['user_id']);
    }

    public function checkBearerToken() {
        $headers = getallheaders();
        if (isset($headers['Authorization']) && strpos($headers['Authorization'], 'Bearer ') === 0) {
            $token = substr($headers['Authorization'], 7);
            // Validate the token (you can implement your token validation logic here)
            return $this->validateToken($token);
        }
        return false;
    }

    private function validateToken($token) {
        // Implement your token validation logic here (e.g., check against a database)
        // Return true if the token is valid, false otherwise
        // Example: $query = $this->db->prepare("SELECT * FROM tokens WHERE token = :token");
        // ...
        return true; // Replace this with your actual validation logic
    }
}
