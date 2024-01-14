<?php 

// models/User.php
class User {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllUsers() {
        // Example: Fetch all users from the database
        // Replace this with your actual database interaction logic
        $query = $this->db->query("SELECT * FROM users");
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function findUserByEmail($email) {
        // Example: Fetch user by email from the database
        // Replace this with your actual database interaction logic
        $query = $this->db->prepare("SELECT * FROM users WHERE email = :email");
        $query->bindParam(':email', $email);
        $query->execute();

        return $query->fetch(PDO::FETCH_ASSOC);
    }

    public function createUser($name, $email, $password) {
        // Example: Insert a new user into the database
        // Replace this with your actual database interaction logic
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $query = $this->db->prepare("INSERT INTO users (name, email, password) VALUES (:name, :email, :password)");
        $query->bindParam(':name', $name);
        $query->bindParam(':email', $email);
        $query->bindParam(':password', $hashedPassword);
        $query->execute();

        return $this->db->lastInsertId();
    }

    // You can add more methods based on your application needs
}
