<?php 
// controllers/HomeController.php
class HomeController
{
    public function home()
    {
        require 'views/home.php';
    }

    public function about()
    {
        require 'views/about.php';
    }
}
