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

// Objet AddressesList
$addressList = new AddressList($bdd);

switch($method){
    
    case "GET":
    
        // Récupération des adresses utilisateur
        if(isset($_GET["user"]) && $_GET["user"] === "addresses"){
            
            $value = "";
            $name = "";
                
            if(isset($_GET["nameList"])){
            
                $nameList = strip_tags($_GET["nameList"]);
                $numberResult = $lists->verifListExist($nameList); // Vérifier si le nom de liste existe
                
                if($numberResult === 0){
                    
                    // Si liste n'existe pas car nombre de liste avec ce nom === 0
                    echo "noResult";
                    
                }else{
                    
                    $result = $addressList->read($nameList);
                    
                    echo $result;
                    
                }
            
            }else if(isset($_GET["nameCategorie"])){
                
                $nameCategorie = strip_tags($_GET["nameCategorie"]);
                $numberResult = $categorie->verifCategorieExist($nameCategorie); // Vérifier si le nom de categorie existe
                
                if($numberResult === 0){
                    
                    // Si liste n'existe pas car nombre de liste avec ce nom === 0
                    echo "noResult";
                    
                }else{
                    
                    $value = "categorie";
                    $result = $address->read($nameCategorie, $value);
                    
                    echo $result;
                    
                }
                
            }else{
                
                $result = $address->read($name, $value);
                
                echo $result;
                
            }
                
        }
    
        break;

    case "POST":
    
        // Ajout d'une adresse
        if(isset($_POST["categorie"]) && isset($_POST["location"]) && isset($_POST["name"])){
            
            $categorie = strip_tags($_POST["categorie"]);
            $location = strip_tags($_POST["location"]);
            $name = strip_tags($_POST["name"]);
            $lat = "";
            $lng = "";
            $placeId = "";
            $phone = "";
            $list = "";
            $numberResult = $address->verifAddressExist($name); // Vérifier si le nom adresse existe
            
            if(empty($_POST["name"]) OR $_POST["name"] === "undefined"){
                
                echo "emptyName";
                
            }else if(empty($_POST["location"])){
                
                echo "emptyLocation";
                
            }else if($numberResult !== 0){
                    
                    // Si liste n'existe pas car nombre de liste avec ce nom === 0
                    echo "nameExist";
                    
            }else{
                
                if(isset($_POST["lat"]) && isset($_POST["lng"])){

                    $lat = strip_tags($_POST["lat"]);
                    $lng = strip_tags($_POST["lng"]);

                }
                
                if(isset($_POST["placeId"])){
                    
                    $placeId = strip_tags($_POST["placeId"]);
                    
                }
                
                if(isset($_POST["phone"])){
                    
                    $phone = strip_tags($_POST["phone"]);
                    
                }
                
                if(isset($_POST["list"]) && !empty($_POST["list"])){
                    
                    $list = strip_tags($_POST["list"]);
                    
                    $addressList->create($name, $list);
                    
                }

                // Création de l'adresse avec la catégorie correspondante
                $address->create($categorie, $location, $name, $lat, $lng, $phone, $placeId);
                
            }
            
        }
    
        break;
    
}