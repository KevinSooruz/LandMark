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
    
        // add new
        if(isset($_POST["name"]) AND !isset($_POST["newname"])){
            
            $name = strip_tags($_POST["name"]);
            $nameCount = $lists->verifListExist($name);
            
            if(strlen($name) < 3 OR strlen($name) > 30){
                
                echo "errorListLength";
                
            }else if(empty($name) OR $name === "undefined"){
                
                echo "emptyName";
                
            }else if($nameCount !== 0){
                
                 echo "alreadyExists";
                
            }else{
                
                $lists->create($name);
                
            }
            
        }
    
        // update
        if(isset($_POST["name"]) AND isset($_POST["newname"])){
                
            $name = strip_tags($_POST["name"]);
            $newname = strip_tags($_POST["newname"]);
            $newNameCount = $lists->verifListExist($newname);

            if(strlen($newname) < 3 OR strlen($newname) > 30){

                echo "errorListLengthNew";

            }else if(empty($newname) OR $newname === "undefined"){

                echo "emptyNewName";

            }else if($newNameCount !== 0){
                
                echo "alreadyExists";
                
            }else{

                $lists->update($name, $newname);

            }

        }
    
        break;

}