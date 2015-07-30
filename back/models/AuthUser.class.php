<?php

class AuthUser{
    
    private $_bdd;
    
    public function __construct($bdd){
        
        $this->setBdd($bdd);
        
    }
    
    public function setBdd($bdd){
        
        $this->_bdd = $bdd;
        
    }
    
    // Inscription
    public function inscription($surname, $name, $email, $password){
        
        $postUser = $this->_bdd->prepare("INSERT INTO users(surname, name, email, password) VALUES(:surname, :name, :email, :password)") or die(print_r($this->_bdd->errorInfo()));
        $postUser->execute(array(

            "surname" => $surname,
            "name" => $name,
            "email" => $email,
            "password" => $password

        ));

        echo "userAdded";
        
    }
    
    // Vérification si utilisateur existe déjà depuis email
    public function verificationUser($email){
        
        $reqVerifUser = $this->_bdd->prepare("SELECT email, password FROM users WHERE email = :email");
        $reqVerifUser->execute(array(
            
            "email" => $email
                
        ));
        
        $respVerifUser = $reqVerifUser->fetch();
        
        return $respVerifUser;
        
    }
    
    // Démarrage session + création token pour identification user
    public function createSession($email){
        
        session_start();
        
        // Création d'un token unique + temps pour limitation dans la durée
        $token = uniqid(rand(), true);
        $_SESSION["token"] = $token;
        $_SESSION["token_time"] = time();
        $_SESSION["email"] = $email;
        
    }
    
}