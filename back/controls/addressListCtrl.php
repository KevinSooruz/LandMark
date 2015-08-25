<?php session_start();

include_once "../models/connexionSql.php";
include_once "../models/loadClass.php";

// Permet de définir méthode serveur (POST / GET)
$method = $_SERVER["REQUEST_METHOD"];

// Objet adresseList
$addressList = new AddressList($bdd);

// Objet Lists
$lists = new Lists($bdd);

// Objet adresse
$address = new Address($bdd);

switch($method){
    
    case "GET":
        break;
    
    case "POST":
    
        if(isset($_POST["listName"]) && isset($_POST["addressName"])){
            
            $listName = strip_tags($_POST["listName"]);
            $addressName = strip_tags($_POST["addressName"]);
            
            $addressListCount = $addressList->addressListVerification($listName, $addressName);
            $addressCount = $address->verifAddressExist($addressName);
            $listCount = $lists->verifListExist($listName);
            
            if($addressCount === 0){
                
                // Si $addressCount === 0 cela signifie que l'adresse n'existe pas
                echo "addressDoesntExist";
                
            }else if(empty($listName)){
                
                // Liste non sélectionnée
                echo "emptyListName";
                
            }else if($listCount === 0){
                
                // Liste n'existe pas
                echo "listDoesntExist";
                
            }else if($addressListCount !== 0){
                
                // si adresse existe déjà dans la liste sélectionnée
                echo "addressAlreadyExistInList";
                
            }else{
                
                // Si l'adresse n'existe pas dans la liste on l'ajoute
                $addressList->create($addressName, $listName);
                
                echo "successAddList";
                
            }
            
        }else if(isset($_POST["list"]) AND isset($_POST["address"])){
            
            $listName = strip_tags($_POST["list"]);
            $addressName = strip_tags($_POST["address"]);
            
            $addressListCount = $addressList->addressListVerification($listName, $addressName);
            
            if($addressListCount === 0){
                
                "addressDoesntExistInList";
                
            }else{
                
                $addressList->delete($addressName);
                
                echo "successDeleteAddressInList";
                
            }
            
        }else if(isset($_POST["delete"]) && $_POST["delete"] === "true" && isset($_POST["list"])){
            
            $nameList = strip_tags($_POST["list"]);
            
            $lists->delete($nameList);
            
        }
    
        break;

    
}