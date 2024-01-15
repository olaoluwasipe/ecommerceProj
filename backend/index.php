<?php

// index.php
require 'classes/Route.php';

require 'cors.php';

// Define routes
Route::get('/', 'HomeController@home');
Route::get('/about', 'HomeController@about');
Route::post('/contact', 'ContactController@submit');
Route::post('/products', 'ProductController@index');

// Dispatch the request
Route::dispatch();
