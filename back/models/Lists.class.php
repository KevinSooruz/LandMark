<?php

class Lists{
    
    private $_bdd;
    
    public function __construct($bdd){
        
        $this->setBdd($bdd);
        
    }
    
    public function setBdd($bdd){
        
        $this->_bdd = $bdd;
        
    }
    
    public function create($name){
        
        $reqCreate = $this->_bdd->prepare("INSERT INTO lists(name, id_user) VALUES(:name, :user)");
        $reqCreate->execute(array(
        
            "name" => $name,
            "user" => $_SESSION["user"]
            
        ));
        
        echo "successAddList";
        
    }
    
    public function read(){
        
        $reqRead = $this->_bdd->prepare("SELECT name FROM lists WHERE id_user = :user");
        $reqRead->execute(array(
        
            "user" => $_SESSION["user"]
        
        ));
        
        $result = "[";
        while($lists = $reqRead->fetch()){
            if($result != "["){
                $result .= ",";
            }
            $result.= json_encode(array(
                "name" => $lists["name"]
            ));
        };
        $result.= "]";
        
        echo $result;
        
    }
    
}