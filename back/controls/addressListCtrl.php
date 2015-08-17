<?php session_start();

include_once "../models/connexionSql.php";
include_once "../models/loadClass.php";

// Permet de définir méthode serveur (POST / GET)
$method = $_SERVER["REQUEST_METHOD"];

// Objet adresseList
$addressList = new AddressList($bdd);

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
            
            
            if($addressCount === 0){
                
                // Si $addressCount === 0 cela signifie que l'adresse n'existe pas
                echo "addressDoesntExist";
                
            }else if(empty($listName)){
                
                // Liste non sélectionnée
                echo "emptyListName";
                
            }else if($addressListCount !== 0){
                
                // si adresse existe déjà dans la liste sélectionnée
                echo "addressAlreadyExistInList";
                
            }else{
                
                // Si l'adresse n'existe pas dans la liste on l'ajoute
                $addressList->create($addressName, $listName);
                
                echo "successAddList";
                
            }
            
        }
    
        break;

    
}