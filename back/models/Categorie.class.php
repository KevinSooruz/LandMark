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
        
        $reqRead = $this->_bdd->query("SELECT id, name FROM categories");
        
        $result = "[";
        while($categories = $reqRead->fetch()){
            if($result != "["){
                $result .= ",";
            }
            $result.= json_encode(array(
                "id" => $categories["id"],
                "name" => $categories["name"]
            ));
        };
        $result.= "]";
        
        echo $result;
        
    }
    
    public function verifCategorieExist($nameCategorie){
        
        $reqRead = $this->_bdd->prepare("SELECT name FROM categories WHERE name = :nameCategorie");
        $reqRead->execute(array(
        
            "nameCategorie" => $nameCategorie
        
        ));
        
        return $reqRead->rowCount();
        
    }
    
}