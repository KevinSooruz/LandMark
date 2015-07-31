<?php

include_once "../models/connexionSql.php";
include_once "../models/loadClass.php";

// Permet de définir méthode serveur (POST / GET)
$method = $_SERVER["REQUEST_METHOD"];

// Objet User
$user = new User($bdd);
$userActif = $user->read();

// Objet adresse
$address = new Address($bdd);

switch($method){
    
    case "GET":
    
        if(isset($_GET["getaddresses"]) && $_GET["getaddresses"] === "all"){
            
            echo "yes";
            
        }
    
        break;
    
    case "POST":
    
        if(isset($_POST["categorie"]) && isset($_POST["location"]) && isset($_POST["name"])){
            
            $categorie = strip_tags($_POST["categorie"]);
            $location = strip_tags($_POST["location"]);
            $name = strip_tags($_POST["name"]);
            $list = "";
            $lat = "";
            $lng = "";
            
            if(isset($_POST["list"])){
                
                $list = strip_tags($_POST["list"]);
                
            }
            
            if(isset($_POST["lat"]) && isset($_POST["lng"])){
                
                $lat = $_POST["lat"];
                $lng = $_POST["lng"];
                
            }
            
            $address->create($categorie, $location, $name, $list, $lat, $lng, $userActif);
            
        }else{
            
            echo "lowData";    
            
        }
    
        break;

}