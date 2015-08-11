<?php session_start();

include_once "../models/connexionSql.php";
include_once "../models/loadClass.php";

// Permet de définir méthode serveur (POST / GET)
$method = $_SERVER["REQUEST_METHOD"];

// Objet adresse
$address = new Address($bdd);

// Objet list
$lists = new Lists($bdd);

// Objet User
$categorie = new Categorie($bdd);

switch($method){
    
    case "GET":
    
        // Récupération des adresses utilisateur
        if(isset($_GET["user"]) && $_GET["user"] === "addresses"){
                
            if(isset($_GET["nameList"])){
            
                $nameList = strip_tags($_GET["nameList"]);
                $numberResult = $lists->verifListExist($nameList); // Vérifier si le nom de liste existe
                
                if($numberResult === 0){
                    
                    // Si liste n'existe pas car nombre de liste avec ce nom === 0
                    echo "noResult";
                    
                }else{
                    
                    $value = "list";
                    $address->readOne($nameList, $value);
                    
                }
            
            }else if(isset($_GET["nameCategorie"])){
                
                $nameCategorie = strip_tags($_GET["nameCategorie"]);
                $numberResult = $categorie->verifCategorieExist($nameCategorie); // Vérifier si le nom de categorie existe
                
                if($numberResult === 0){
                    
                    // Si liste n'existe pas car nombre de liste avec ce nom === 0
                    echo "noResult";
                    
                }else{
                    
                    $value = "categorie";
                    $address->readOne($nameCategorie, $value);
                    
                }
                
            }else{
                
                $address->read();
                
            }
                
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
            $placeId = "";
            $phone = "";
            
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
                
                if(isset($_POST["placeId"])){
                    
                    $placeId = $_POST["placeId"];
                    
                }
                
                if(isset($_POST["phone"])){
                    
                    $phone = strip_tags($_POST["phone"]);
                    
                }

                $address->create($categorie, $location, $name, $list, $lat, $lng, $phone, $placeId);
                
            }
            
        }
    
        break;
    
}