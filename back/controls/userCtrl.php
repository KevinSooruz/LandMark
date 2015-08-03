<?php session_start();

include_once "../models/connexionSql.php";
include_once "../models/loadClass.php";

// Permet de définir méthode serveur (POST / GET)
$method = $_SERVER["REQUEST_METHOD"];

// Objet User
$user = new User($bdd);
$email = $_SESSION["email"];

// Objet adresse
$address = new Address($bdd);

switch($method){
    
    case "GET":
    
        // Récupération des informations utilisateur
        if(isset($_GET["get"]) && $_GET["get"] === "informations"){
            
            $user->read();
            
        }
    
        // Récupération des adresses utilisateur
        if(isset($_GET["get"]) && $_GET["get"] === "addresses"){
            
            $address->read();
            
        }else{
            
            echo "errorLoadAddresses";
            
        }
    
        break;
    
    case "POST":
    
        // Ajout d'une adresse
        if(isset($_POST["categorie"]) && isset($_POST["location"]) && isset($_POST["name"])){
            
            $categorie = strip_tags($_POST["categorie"]);
            $location = strip_tags($_POST["location"]);
            $name = strip_tags($_POST["name"]);
            $list = "";
            $lat = "";
            $lng = "";
            
            if(empty($_POST["name"]) OR $_POST["name"] === "undefined"){
                
                echo "emptyName";
                
            }else if(empty($_POST["location"])){
                
                echo "emptyLocation";
                
            }else{
                
                if(isset($_POST["list"])){
                
                    $list = strip_tags($_POST["list"]);

                }

                if(isset($_POST["lat"]) && isset($_POST["lng"])){

                    $lat = $_POST["lat"];
                    $lng = $_POST["lng"];

                }

                $address->create($categorie, $location, $name, $list, $lat, $lng);
                
            }
            
        }
    
        break;
    
}