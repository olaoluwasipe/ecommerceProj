<?php 

require 'models/Product.php';
require 'classes/DatabaseConnection.php';
require_once 'functions/conn.php';

class ProductController  {
    private $db;

    public function __construct() {
        $host = 'localhost';
        $username = 'root';
        $password = '';
        $database = 'ecommerce';
        $this->db = new DatabaseConnection($host, $username, $password, $database);
    }

    public function index () {
        $product = new Product($this->db);
        echo json_encode($product->getAllProducts());
    }
}