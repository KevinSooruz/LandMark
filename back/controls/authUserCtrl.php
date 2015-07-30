<?php

include_once "../models/connexionSql.php";
include_once "../models/loadClass.php";

// Permet de définir méthode serveur (POST / GET)
$method = $_SERVER["REQUEST_METHOD"];

// Objet User
$authUser = new AuthUser($bdd);

switch($method){
    
    case "GET":
        break;
    
    case "POST":
        
        if(isset($_POST["email"]) && isset($_POST["password"])){
            
            $email = strip_tags($_POST["email"]);
            $password = strip_tags(sha1($_POST["password"])); // Sécurisation mot de passe sha1
            $verifUser = $authUser->verificationUser($email); // Vérification si utilisateur existe déjà
            $regexEmail = "#^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#"; // Regex email
            
            if(isset($_POST["connection"]) && $_POST["connection"] === "login"){ // Connexion
                
                if($email !== $verifUser["email"]){
                    
                    // Utilisateur n'existe pas en base
                    echo "userNotExist";
                    
                }else if($password !== $verifUser["password"]){
                    
                    // Mauvais mot de passe
                    echo "wrongPassword";
                    
                }else{
                    
                    // Démarrage session + création token pour identification user
                    $authUser->createSession($email);
                    
                    echo "userLogin";
                    
                }
                
            }else if(isset($_POST["surname"]) && isset($_POST["name"]) && isset($_POST["inscription"]) && $_POST["inscription"] === "login"){ // Inscription
                
                $surname = strip_tags($_POST["surname"]);
                $name = strip_tags($_POST["name"]);
                
                if($surname === "undefined" OR $name === "undefined" OR $password === "undefined"){
                
                    // Champs vides
                    echo "undefined";

                }else if($email === $verifUser["email"]){
                    
                    // Utilisateur déjà en base
                    echo "userExist";

                }else if(!preg_match($regexEmail, $email)){

                    // Mauvais email
                    echo "wrongMail";

                }else{

                    // Enregistrement utilisateur en base
                    $authUser->inscription($surname, $name, $email, $password);

                    // Démarrage session + création token pour identification user
                    $authUser->createSession($email);

                }
                
            }
            
        }
        
        break;
    
}