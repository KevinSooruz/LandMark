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
        
        $verifUser = $this->verificationUser($email); // Vérification si utilisateur existe déjà
        $regexEmail = "#^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#";
        
        if(empty($surname) OR empty($name) OR empty($email) OR empty($password)){
            
            echo "emptyData";
            
        }else if($email === $verifUser){
            
            echo "userExist";
            
        }else if(!preg_match($regexEmail, $email)){
            
            echo "wrongMail";
            
        }
        
    }
    
    // Vérification si utilisateur existe déjà
    public function verificationUser($email){
        
        $reqVerifUser = $this->_bdd->prepare("SELECT email FROM users WHERE email = :email");
        $reqVerifUser->execute(array(
            
            "email" => $email
                
        ));
        
        $respVerifUser = $reqVerifUser->fetch();
        
        return $respVerifser;
        
    }
    
}