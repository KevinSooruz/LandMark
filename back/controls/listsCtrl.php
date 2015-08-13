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
            
            $result = $lists->read();
            
            echo $result;
                
        }
    
        break;
    
    case "POST":
    
        if(isset($_POST["name"])){
            
            $name = strip_tags($_POST["name"]);
            $nameCount = $lists->verifListExist($name);
            
            if(empty($_POST["name"]) OR $_POST["name"] === "undefined"){
                
                echo "emptyName";
                
            }else if($nameCount !== 0){
                
                 echo "alreadyExists";
                
            }else{
                
                $lists->create($name);
                
            }
            
        }    
    
        break;

}