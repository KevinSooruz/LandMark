<?php

include_once "../models/connexionSql.php";
include_once "../models/loadClass.php";

// Permet de définir méthode serveur (POST / GET)
$method = $_SERVER["REQUEST_METHOD"];

// Objet User
$authUser = new AuthUser($bdd);

switch($method){
    
    case "GET":
        break;
    
    case "POST":
        
        if(isset($_POST["surname"]) && isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["password"])){
            
            $surname = strip_tags($_POST["surname"]);
            $name = strip_tags($_POST["name"]);
            $email = strip_tags($_POST["email"]);
            $password = strip_tags(sha1($_POST["password"]));
            
            $authUser->inscription($surname, $name, $email, $password);
            
        }
        
        break;
    
}