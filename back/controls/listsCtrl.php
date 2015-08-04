<?php session_start();

include_once "../models/connexionSql.php";
include_once "../models/loadClass.php";

// Permet de définir méthode serveur (POST / GET)
$method = $_SERVER["REQUEST_METHOD"];

// Objet list
$lists = new Lists($bdd);

switch($method){
    
    case "GET":
    
        // Récupération des listes utilisateur
        if(isset($_GET["user"]) && $_GET["user"] === "lists"){
                
            $lists->read();
                
        }
    
        break;
    
    case "POST":
        break;

}