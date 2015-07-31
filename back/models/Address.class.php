<?php

class Address{
    
    private $_bdd;
    
    public function __construct($bdd){
        
        $this->setBdd($bdd);
        
    }
    
    public function setBdd($bdd){
        
        $this->_bdd = $bdd;
        
    }
    
    public function create($categorie, $location, $name, $list, $lat, $lng, $user){
        
        $reqCreate = $this->_bdd->prepare("INSERT INTO addresses(name, categorie, location, list, lat, lng, id_user) VALUES(:name, :categorie, :location, :list, :lat, :lng, :user)") or die(print_r($this->_bdd->errorInfo()));
        $reqCreate->execute(array(
            
            "name" => $name,
            "categorie" => $categorie,
            "location" => $location,
            "list" => $list,
            "lat" => $lat,
            "lng" => $lng,
            "user" => $user["id"]
            
        ));
        
        echo "successAddAddress";
        
    }
    
}