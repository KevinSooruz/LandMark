<?php

class User{
    
    private $_bdd;
    
    public function __construct($bdd){
        
        $this->setBdd($bdd);
        
    }
    
    public function setBdd($bdd){
        
        $this->_bdd = $bdd;
        
    }
    
    public function read(){
        
        $reqRead = $this->_bdd->prepare("SELECT id, name, surname, email FROM users WHERE email = :email");
        $reqRead->execute(array(
        
            "email" => $_SESSION["email"]
            
        ));
        
        $result = "[";
        while($respRead = $reqRead->fetch()){
            if($result != "["){
                $result .= ",";
            }
            $result.= json_encode(array(
                "id" => $respRead["id"],
                "name" => $respRead["name"],
                "surname" => $respRead["surname"],
                "email" => $respRead["email"]
            ));
        };
        $result.= "]";
        
        echo $result;
        
    }
    
    public function readId($email){
        
        $reqRead = $this->_bdd->prepare("SELECT id FROM users WHERE email = :email");
        $reqRead->execute(array(
        
            "email" => $email
            
        ));
        
        $respRead = $reqRead->fetch();
        
        return $respRead;
        
    }
    
}