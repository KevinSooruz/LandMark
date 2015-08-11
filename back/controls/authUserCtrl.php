<?php

include_once "../models/connexionSql.php";
include_once "../models/loadClass.php";

// Permet de définir méthode serveur (POST / GET)
$method = $_SERVER["REQUEST_METHOD"];

// Objet Authentification User
$authUser = new AuthUser($bdd);

// Objet User
$user = new User($bdd);

switch($method){
    
    case "GET":
        break;
    
    case "POST":
        
        if(isset($_POST["email"]) && isset($_POST["password"])){
            
            $email = strip_tags($_POST["email"]);
            $password = strip_tags(sha1($_POST["password"])); // Sécurisation mot de passe sha1
            $passwordNb = strlen($_POST["password"]);
            $verifUser = $authUser->verificationUser($email); // Vérification si utilisateur existe déjà
            $regexEmail = "#^[a-zA-Z0-9._-]+@[a-zA-Z0-9]{2,}\.[a-z]{2,6}$#"; // Regex email
            
            if(isset($_POST["connection"]) && $_POST["connection"] === "login"){ // Connexion
                
                if(!preg_match($regexEmail, $email)){
                    
                    // Mauvais email
                    echo "wrongMailConnection";

                }else if($email !== $verifUser["email"]){
                    
                    // Utilisateur n'existe pas en base
                    echo "userNotExist";
                    
                }else if($passwordNb < 5 OR $passwordNb > 20 OR $_POST["password"] === "undefined"){
                    
                    echo "wrongPasswordConnection";
                    
                }else if($password !== $verifUser["password"]){
                    
                    // Mauvais mot de passe
                    echo "wrongPassword";
                    
                }else{
                    
                    // Récupération de l'id utilisateur pour créer session avec ID
                    $userActif = $user->readId($email);
                    
                    // Démarrage session + création token pour identification user
                    $authUser->createSession($email, $userActif["id"]);
                    
                    echo "userLogin";
                    
                }
                
            }else if(isset($_POST["surname"]) && isset($_POST["name"]) && isset($_POST["inscription"]) && $_POST["inscription"] === "login"){ // Inscription
                
                $surname = strip_tags($_POST["surname"]);
                $surnameNb = strlen($surname);
                $name = strip_tags($_POST["name"]);
                $nameNb = strlen($name);
                
                if($surnameNb < 3 OR $surnameNb > 50 OR $surname === "undefined"){
                    
                    // Mauvais prénom
                    echo "wrongSurnameInscription";
                    
                }else if($nameNb < 3 OR $nameNb > 50 OR $name === "undefined"){
                    
                    // Mauvais nom
                    echo "wrongNameInscription";
                    
                }else if($email === $verifUser["email"]){
                    
                    // Utilisateur déjà en base
                    echo "userExist";

                }else if(!preg_match($regexEmail, $email)){
                    
                    // Mauvais email
                    echo "wrongMailInscription";

                }else if($passwordNb < 5 OR $passwordNb > 20 OR $_POST["password"] === "undefined"){
                    
                    // Mauvais mot de passe
                    echo "wrongPasswordInscription";
                    
                }else{

                    // Enregistrement utilisateur en base
                    $authUser->inscription($surname, $name, $email, $password);
                    
                    // Récupération de l'id utilisateur pour créer session avec ID
                    $userActif = $user->readId($email);

                    // Démarrage session + création token pour identification user
                    $authUser->createSession($email, $userActif["id"]);

                }
                
            }
            
        }
        
        break;
    
}