<?php session_start();

include_once "../models/connexionSql.php";
include_once "../models/loadClass.php";

// Permet de définir méthode serveur (POST / GET)
$method = $_SERVER["REQUEST_METHOD"];

// Objet adresse
$addressesList = new AddressList($bdd);

switch($method){
    
    case "GET":
        break;
    
    case "POST":
        break;

    
}