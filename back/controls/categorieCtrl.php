<?php session_start();

include_once "../models/connexionSql.php";
include_once "../models/loadClass.php";

// Permet de définir méthode serveur (POST / GET)
$method = $_SERVER["REQUEST_METHOD"];

// Objet User
$categorie = new Categorie($bdd);

// Objet adresse
$address = new Address($bdd);

switch($method){
    
    case "GET":
    
        if(isset($_GET["categorie"]) && $_GET["categorie"] === "true"){
            
            $categorie->read();
            
        }else{
            
            echo "categorieProblem";
            
        }
    
        break;
    
    case "POST":
        break;
}