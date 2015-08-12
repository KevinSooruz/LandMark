<?php session_start();

include_once "../models/connexionSql.php";
include_once "../models/loadClass.php";

// Permet de définir méthode serveur (POST / GET)
$method = $_SERVER["REQUEST_METHOD"];

// Objet User
$user = new User($bdd);
$email = $_SESSION["email"];

switch($method){
    
    case "GET":
    
        // Récupération des informations utilisateur
        if(isset($_GET["user"]) && $_GET["user"] === "informations"){
            
            $result = $user->read();
            
            echo $result;
            
        }
            
        break;
    
    case "POST":
        break;
    
}