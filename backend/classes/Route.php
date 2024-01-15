<?php

class Route
{
    private static $routes = [];

    public static function get($uri, $action)
    {
        self::$routes[] = ['GET', $uri, $action];
    }

    public static function post($uri, $action)
    {
        self::$routes[] = ['POST', $uri, $action];
    }

    public static function dispatch()
    {
        $uri = $_SERVER['REQUEST_URI'];
        $method = $_SERVER['REQUEST_METHOD'];

        foreach (self::$routes as $route) {
            list($routeMethod, $routeUri, $action) = $route;

            if ($method == $routeMethod && self::matchUri($uri, $routeUri)) {
                self::executeAction($action);
                return;
            }
        }

        // Handle 404 Not Found
        require 'views/404.php';
    }

    private static function matchUri($uri, $routeUri)
    {
        // Simple matching for now, you might want to use a more sophisticated approach
        return $uri === $routeUri;
    }

    private static function executeAction($action)
    {
        list($controller, $method) = explode('@', $action);

        // Include the controller file
        require_once 'controllers/' . $controller . '.php';

        // Include the model file
        // require_once 'models/' . $controller . '.php';

        // Create an instance of the controller and call the method
        $controllerInstance = new $controller();
        $controllerInstance->$method();
    }
}
