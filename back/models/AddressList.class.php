<?php

class AddressList{
    
    private $_bdd;
    
    public function __construct($bdd){
        
        $this->setBdd($bdd);
        
    }
    
    public function setBdd($bdd){
        
        $this->_bdd = $bdd;
        
    }
    
    public function create($name, $list){
        
        $reqCreate = $this->_bdd->prepare("INSERT INTO addresses_lists(name, list, id_user) VALUES(:name, :list, :user)");
        $reqCreate->execute(array(
        
            "name" => $name,
            "list" => $list,
            "user" => $_SESSION["user"]
            
        ));
        
    }
    
    public function read($nameList){
        
        // Jointures : https://openclassrooms.com/courses/concevez-votre-site-web-avec-php-et-mysql/les-jointures-entre-tables
        $reqRead = $this->_bdd->prepare("SELECT addresses_lists.name, addresses.categorie, addresses.location, addresses.phone FROM addresses_lists, addresses WHERE addresses_lists.list = :list AND addresses.name = addresses_lists.name AND addresses.id_user = :user");
        $reqRead->execute(array(
        
            "user" => $_SESSION["user"],
            "list" => $nameList
            
        ));
        
        $result = "[";
        while($addresses = $reqRead->fetch()){
            if($result != "["){
                $result .= ",";
            }
            $result.= json_encode(array(
                "name" => $addresses["name"],
                "location" => $addresses["location"],
                "categorie" => $addresses["categorie"],
                "phone" => $addresses["phone"],
                "categorie" => $addresses["categorie"]
            ));
        };
        $result.= "]";
        
        return $result;
        
    }
    
    public function update($elem, $nameElem, $addressName){
        
        $reqUpdate = $this->_bdd->prepare("UPDATE addresses_lists SET $elem = :nameElem WHERE name = :addressName AND id_user = :user");
        $reqUpdate->execute(array(
        
            "nameElem" => $nameElem,
            "addressName" => $addressName,
            "user" => $_SESSION["user"]
            
        ));
        
    }
    
    public function delete($name){
        
        $reqDelete = $this->_bdd->prepare("DELETE FROM addresses_lists WHERE name = :name AND id_user = :user");
        $reqDelete->execute(array(
        
            "name" => $name,
            "user" => $_SESSION["user"]
        
        ));
        
    }
    
    public function addressListVerification($listName, $addressName){
        
        $reqRead = $this->_bdd->prepare("SELECT id FROM addresses_lists WHERE name = :addressName AND list = :listName AND id_user = :user");
        $reqRead->execute(array(
            
            "addressName" => $addressName,
            "listName" => $listName,
            "user" => $_SESSION["user"]
        
        ));
        
        return $reqRead->rowCount();
        
    }
    
}