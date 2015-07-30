<?php

class Categorie{
    
    private $_bdd;
    
    public function __construct($bdd){
        
        $this->setBdd($bdd);
        
    }
    
    public function setBdd($bdd){
        
        $this->_bdd = $bdd;
        
    }
    
    public function read(){
        
        $reqRead = $this->_bdd->query("SELECT name FROM categories");
        
        $result = "[";
        while($categories = $reqRead->fetch()){
            if($result != "["){
                $result .= ",";
            }
            $result.= json_encode(array(
                "name" => $categories["name"]
            ));
        };
        $result.= "]";
        
        echo $result;
        
    }
    
}