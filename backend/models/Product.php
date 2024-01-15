<?php

// models/Product.php
class Product {
    private $db;

    public function __construct($db) {
        $this->db = $db;
    }

    public function getAllProducts() {
        // Example: Fetch all products from the database
        // Replace this with your actual database interaction logic
        $query = $this->db->query("SELECT * FROM products");
        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getProductById($productId) {
        // Example: Fetch a product by ID from the database
        // Replace this with your actual database interaction logic
        $query = $this->db->prepare("SELECT * FROM products WHERE id = :id");
        $query->bindParam(':id', $productId);
        $query->execute();

        return $query->fetch(PDO::FETCH_ASSOC);
    }

    public function createProduct($productData) {
        // Example: Insert a new product into the database
        // Replace this with your actual database interaction logic
        $query = $this->db->prepare("INSERT INTO products (images, name, description, price, discount_price, long_description, slug, sku, stock, brand, rating, category, featured) 
                                     VALUES (:images, :name, :description, :price, :discount_price, :long_description, :slug, :sku, :stock, :brand, :rating, :category, :featured)");
        $query->bindParam(':images', json_encode($productData['images']));
        $query->bindParam(':name', $productData['name']);
        $query->bindParam(':description', $productData['description']);
        $query->bindParam(':price', $productData['price']);
        $query->bindParam(':discount_price', $productData['discount_price']);
        $query->bindParam(':long_description', $productData['long_description']);
        $query->bindParam(':slug', $productData['slug']);
        $query->bindParam(':sku', $productData['sku']);
        $query->bindParam(':stock', $productData['stock']);
        $query->bindParam(':brand', $productData['brand']);
        $query->bindParam(':rating', $productData['rating']);
        $query->bindParam(':category', $productData['category']);
        $query->bindParam(':featured', $productData['featured']);
        $query->execute();

        return $this->db->lastInsertId();
    }

    // You can add more methods based on your application needs
}
