<?php

// index.php
require 'classes/Route.php';

// Define routes
Route::get('/', 'HomeController@home');
Route::get('/about', 'HomeController@about');
Route::post('/contact', 'ContactController@submit');

// Dispatch the request
Route::dispatch();
