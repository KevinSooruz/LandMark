<?php session_start();

class User{
    
    private $_bdd;
    
    public function __construct($bdd){
        
        $this->setBdd($bdd);
        
    }
    
    public function setBdd($bdd){
        
        $this->_bdd = $bdd;
        
    }
    
    public function read(){
        
        $reqRead = $this->_bdd->prepare("SELECT id FROM users WHERE email = :email");
        $reqRead->execute(array(
        
            "email" => $_SESSION["email"]
            
        ));
        
        $respRead = $reqRead->fetch();
        
        return $respRead;
        
    }
    
}