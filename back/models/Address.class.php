<?php

class Address{
    
    private $_bdd;
    
    public function __construct($bdd){
        
        $this->setBdd($bdd);
        
    }
    
    public function setBdd($bdd){
        
        $this->_bdd = $bdd;
        
    }
    
    public function create($categorie, $location, $name, $lat, $lng, $phone, $placeId){
        
        $reqCreate = $this->_bdd->prepare("INSERT INTO addresses(name, categorie, location, lat, lng, id_user, phone, place_id) VALUES(:name, :categorie, :location, :lat, :lng, :user, :phone, :placeid)") or die(print_r($this->_bdd->errorInfo()));
        $reqCreate->execute(array(
            
            "name" => $name,
            "categorie" => $categorie,
            "location" => $location,
            "lat" => $lat,
            "lng" => $lng,
            "user" => $_SESSION["user"],
            "phone" => $phone,
            "placeid" => $placeId
            
        ));
        
        echo "successAddAddress";
        
    }
    
    public function read($name, $value){
        
        if($value === "categorie"){
            
            $reqRead = $this->reqReadOne($name, $value);
            
        }else{
            
            $reqRead = $this->_bdd->prepare("SELECT name, categorie, location, lat, lng, phone, place_id FROM addresses WHERE id_user = :user");
            $reqRead->execute(array(
        
                "user" => $_SESSION["user"]
            
            ));
            
        }
        
        $result = "[";
        while($addresses = $reqRead->fetch()){
            if($result != "["){
                $result .= ",";
            }
            $result.= json_encode(array(
                "name" => $addresses["name"],
                "categorie" => $addresses["categorie"],
                "location" => $addresses["location"],
                "lat" => $addresses["lat"],
                "lng" => $addresses["lng"],
                "phone" => $addresses["phone"],
                "placeId" => $addresses["place_id"]
            ));
        };
        $result.= "]";
        
        return $result;
        
    }
    
    public function reqReadOne($name, $value){
        
        $reqRead = $this->_bdd->prepare("SELECT name, categorie, location, lat, lng, phone, place_id FROM addresses WHERE id_user = :user AND $value = :name");
            
        $reqRead->execute(array(

            "user" => $_SESSION["user"],
            "name" => $name

        ));
        
        return $reqRead;
        
    }
    
    public function verifAddressExist($name){
        
        $reqRead = $this->_bdd->prepare("SELECT name FROM addresses WHERE name = :name");
        $reqRead->execute(array(
        
            "name" => $name
        
        ));
        
        return $reqRead->rowCount();
        
    }
    
}