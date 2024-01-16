-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2024 at 09:47 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `images` text NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` double NOT NULL,
  `discount_price` double DEFAULT NULL,
  `long_description` text DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `sku` varchar(255) NOT NULL,
  `stock` int(20) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `rating` float NOT NULL,
  `category` int(11) NOT NULL,
  `featured` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `images`, `name`, `description`, `price`, `discount_price`, `long_description`, `slug`, `sku`, `stock`, `brand`, `rating`, `category`, `featured`) VALUES
(1, '[\"https://uomo-html.flexkitux.com/images/home/demo3/product-5.jpg\", \"https://uomo-html.flexkitux.com/images/home/demo3/product-6.jpg\"]', 'Product 1', 'Description for Product 1', 49.99, NULL, 'Long description for Product 1', 'product-1', 'SKU001', 100, 'Brand A', 4.5, 1, 1),
(2, '[\"https://uomo-html.flexkitux.com/images/home/demo3/product-6.jpg\", \"https://uomo-html.flexkitux.com/images/home/demo3/product-7.jpg\"]', 'Product 2', 'Description for Product 2', 79.99, 59.99, 'Long description for Product 2', 'product-2', 'SKU002', 50, 'Brand B', 3.8, 2, 0),
(3, '[\"https://uomo-html.flexkitux.com/images/home/demo3/product-7.jpg\", \"https://uomo-html.flexkitux.com/images/home/demo3/product-4.jpg\"]', 'Product 3', 'Description for Product 3', 29.99, NULL, 'Long description for Product 3', 'product-3', 'SKU003', 200, 'Brand C', 4.2, 1, 1),
(4, '[\"https://uomo-html.flexkitux.com/images/home/demo3/product-9.jpg\", \"https://uomo-html.flexkitux.com/images/home/demo3/product-11.jpg\"]', 'Product 4', 'Description for Product 4', 99.99, 79.99, 'Long description for Product 4', 'product-4', 'SKU004', 75, 'Brand A', 4.8, 2, 0),
(5, '[\"https://uomo-html.flexkitux.com/images/home/demo3/product-11.jpg\", \"https://uomo-html.flexkitux.com/images/home/demo3/product-11.jpg\"]', 'Product 5', 'Description for Product 5', 39.99, NULL, 'Long description for Product 5', 'product-5', 'SKU005', 120, 'Brand B', 3.5, 1, 1),
(6, '[\"https://uomo-html.flexkitux.com/images/home/demo3/product-9.jpg\", \"https://uomo-html.flexkitux.com/images/home/demo3/product-10.jpg\"]', 'Product 6', 'Description for Product 6', 89.99, 69.99, 'Long description for Product 6', 'product-6', 'SKU006', 90, 'Brand C', 4, 2, 0),
(7, '[\"https://uomo-html.flexkitux.com/images/home/demo3/product-10.jpg\", \"https://uomo-html.flexkitux.com/images/home/demo3/product-1-2.jpg\"]', 'Product 7', 'Description for Product 7', 49.99, NULL, 'Long description for Product 7', 'product-7', 'SKU007', 150, 'Brand A', 4.6, 1, 1),
(8, '[\"https://uomo-html.flexkitux.com/images/home/demo3/product-0-2.jpg\", \"https://uomo-html.flexkitux.com/images/home/demo3/product-2-2.jpg\"]', 'Product 8', 'Description for Product 8', 69.99, 49.99, 'Long description for Product 8', 'product-8', 'SKU008', 60, 'Brand B', 3.9, 2, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
