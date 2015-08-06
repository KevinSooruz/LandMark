<?php

class Address{
    
    private $_bdd;
    
    public function __construct($bdd){
        
        $this->setBdd($bdd);
        
    }
    
    public function setBdd($bdd){
        
        $this->_bdd = $bdd;
        
    }
    
    public function create($categorie, $location, $name, $list, $lat, $lng){
        
        $reqCreate = $this->_bdd->prepare("INSERT INTO addresses(name, categorie, location, list, lat, lng, id_user) VALUES(:name, :categorie, :location, :list, :lat, :lng, :user)") or die(print_r($this->_bdd->errorInfo()));
        $reqCreate->execute(array(
            
            "name" => $name,
            "categorie" => $categorie,
            "location" => $location,
            "list" => $list,
            "lat" => $lat,
            "lng" => $lng,
            "user" => $_SESSION["user"]
            
        ));
        
        echo "successAddAddress";
        
    }
    
    public function read(){
        
        $reqRead = $this->_bdd->prepare("SELECT name, categorie, location, list, lat, lng FROM addresses WHERE id_user = :user");
        $reqRead->execute(array(
        
            "user" => $_SESSION["user"]
            
        ));
        
        $result = "[";
        while($addresses = $reqRead->fetch()){
            if($result != "["){
                $result .= ",";
            }
            $result.= json_encode(array(
                "name" => $addresses["name"],
                "categorie" => $addresses["categorie"],
                "location" => $addresses["location"],
                "list" => $addresses["list"],
                "lat" => $addresses["lat"],
                "lng" => $addresses["lng"]
            ));
        };
        $result.= "]";
        
        echo $result;
        
    }
    
    public function readOne($name, $value){
        
        if($value === "list"){
            
            $reqRead = $this->_bdd->prepare("SELECT name, categorie, location, list, lat, lng FROM addresses WHERE id_user = :user AND list = :name");
            
        }else if($value === "categorie"){
            
            $reqRead = $this->_bdd->prepare("SELECT name, categorie, location, list, lat, lng FROM addresses WHERE id_user = :user AND categorie = :name");
            
        }
        
        $reqRead->execute(array(

            "user" => $_SESSION["user"],
            "name" => $name

        ));
        
        $result = "[";
        while($addresses = $reqRead->fetch()){
            if($result != "["){
                $result .= ",";
            }
            $result.= json_encode(array(
                "name" => $addresses["name"],
                "categorie" => $addresses["categorie"],
                "location" => $addresses["location"],
                "list" => $addresses["list"],
                "lat" => $addresses["lat"],
                "lng" => $addresses["lng"]
            ));
        };
        $result.= "]";
        
        echo $result;
        
    }
    
}