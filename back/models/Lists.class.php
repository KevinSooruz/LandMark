<?php

class Lists{
    
    private $_bdd;
    
    public function __construct($bdd){
        
        $this->setBdd($bdd);
        
    }
    
    public function setBdd($bdd){
        
        $this->_bdd = $bdd;
        
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