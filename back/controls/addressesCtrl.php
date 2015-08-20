<?php session_start();

include_once "../models/connexionSql.php";
include_once "../models/loadClass.php";

// Permet de définir méthode serveur (POST / GET)
$method = $_SERVER["REQUEST_METHOD"];

// Objet adresse
$address = new Address($bdd);

// Objet list
$lists = new Lists($bdd);

// Objet User
$categorie = new Categorie($bdd);

// Objet AddressesList
$addressList = new AddressList($bdd);

switch($method){
    
    case "GET":
    
        // Récupération des adresses utilisateur
        if(isset($_GET["user"]) && $_GET["user"] === "addresses"){
            
            $value = "";
            $name = "";
                
            if(isset($_GET["nameList"])){
            
                $nameList = strip_tags($_GET["nameList"]);
                $numberResult = $lists->verifListExist($nameList); // Vérifier si le nom de liste existe
                
                if($numberResult === 0){
                    
                    // Si liste n'existe pas car nombre de liste avec ce nom === 0
                    echo "noResult";
                    
                }else{
                    
                    $result = $addressList->read($nameList);
                    
                    echo $result;
                    
                }
            
            }else if(isset($_GET["nameCategorie"])){
                
                $nameCategorie = strip_tags($_GET["nameCategorie"]);
                $numberResult = $categorie->verifCategorieExist($nameCategorie); // Vérifier si le nom de categorie existe
                
                if($numberResult === 0){
                    
                    // Si liste n'existe pas car nombre de liste avec ce nom === 0
                    echo "noResult";
                    
                }else if(isset($_GET["nameAddress"])){
                    
                    $nameAddress = strip_tags($_GET["nameAddress"]);
                    $numberAddress = $address->verifAddressExist($nameAddress);
                    $numberAdressInCategorie = $address->verifAdressInCategorie($nameAddress, $nameCategorie);
                    
                    if($numberAddress === 0){
                        
                        // Si adresse n'existe pas car nombre de liste avec ce nom === 0
                        echo "noResultAddress";
                        
                    }else if($numberAdressInCategorie === 0){
                        
                        // Si adresse n'existe pas dans la catégorie
                        echo "noAddressInCategorie";
                        
                    }else{
                        
                        $value = "name";
                        $result = $address->read($nameAddress, $value);
                        
                        echo $result;
                        
                    }
                    
                }else{
                    
                    $value = "categorie";
                    $result = $address->read($nameCategorie, $value);
                    
                    echo $result;
                    
                }
                
            }else{
                
                $result = $address->read($name, $value);
                
                echo $result;
                
            }
                
        }
    
        break;

    case "POST":
    
        // Ajout d'une adresse
        if(isset($_POST["categorie"]) && isset($_POST["location"]) && isset($_POST["name"])){
            
            $categorie = strip_tags($_POST["categorie"]);
            $location = strip_tags($_POST["location"]);
            $name = strip_tags($_POST["name"]);
            $lat = "";
            $lng = "";
            $placeId = "";
            $phone = "";
            $list = "";
            $opening = "";
            $numberResult = $address->verifAddressExist($name); // Vérifier si le nom adresse existe
            
            if(empty($_POST["name"]) OR $_POST["name"] === "undefined"){
                
                echo "emptyName";
                
            }else if(empty($_POST["location"])){
                
                echo "emptyLocation";
                
            }else if($numberResult !== 0){
                    
                    // Si liste n'existe pas car nombre de liste avec ce nom === 0
                    echo "nameExist";
                    
            }else{
                
                if(isset($_POST["lat"]) && isset($_POST["lng"])){

                    $lat = strip_tags($_POST["lat"]);
                    $lng = strip_tags($_POST["lng"]);

                }
                
                if(isset($_POST["placeId"])){
                    
                    $placeId = strip_tags($_POST["placeId"]);
                    
                }
                
                if(isset($_POST["phone"])){
                    
                    $phone = strip_tags($_POST["phone"]);
                    
                }
                
                if(isset($_POST["list"]) && !empty($_POST["list"])){
                    
                    $list = strip_tags($_POST["list"]);
                    
                    $addressList->create($name, $list);
                    
                }
                
                if(isset($_POST["opening"])){
                    
                    $opening = strip_tags($_POST["opening"]);
                    
                };

                // Création de l'adresse avec la catégorie correspondante
                $address->create($categorie, $location, $name, $lat, $lng, $phone, $placeId, $opening);
                
            }
            
        }else if(isset($_POST["phone"]) && isset($_POST["newname"]) && isset($_POST["newcategorie"])){
            
            $phone = strip_tags($_POST["phone"]);
            $addressName = strip_tags($_POST["name"]);
            $addressNewName = strip_tags($_POST["newname"]);
            $categorieName = strip_tags($_POST["categorie"]);
            $newCategorieName = strip_tags($_POST["newcategorie"]);
            
            if(!empty($addressNewName) AND (strlen($addressNewName) < 3 OR strlen($addressNewName) > 50)){
                
                echo "errorCharNewName";
                
            }else if(!empty($phone) AND (strlen($phone) < 3 OR strlen($phone) > 30)){
                
                echo "errorCharNewPhone";
                
            }else if(!empty($addressNewName) OR !empty($phone) OR !empty($newCategorieName)){
                
                // Vérification si catégorie existe
                $categorieCount = $categorie->verifCategorieExist($categorieName);
                
                // Vérification si adresse existe dans la catégorie
                $addressCount = $address->verifAdressInCategorie($addressName, $categorieName);
                
                // Vérification si nom adresse est déjà présent
                $addressNameExist = $address->verifAddressExist($addressNewName);
                
                if($categorieCount === 0){
                    
                    echo "categorieDoesntExist";
                    
                }else if($addressCount === 0){
                    
                    echo "addressDosentExist";
                    
                }else if($addressNameExist !== 0){
                    
                    echo "addressAlreadyExist";
                    
                }else{
                    
                    echo "succesChangeAddress";
                    
                    if(!empty($addressNewName)){
                        
                        $elem = "name";
                        $nameElem = $addressNewName;
                            
                        $address->update($elem, $nameElem, $addressName);
                        $addressList->update($elem, $nameElem, $addressName);
                        
                        echo "Name";
                        
                    }
                    
                    if(!empty($newCategorieName)){
                        
                        $adressNameChangeCategorie = $addressName;
                            
                        if(!empty($addressNewName)){
                            
                            $adressNameChangeCategorie = $addressNewName;
                            
                        }
                        
                        $elem = "categorie";
                        $nameElem = $newCategorieName;
                        
                        $address->update($elem, $nameElem, $adressNameChangeCategorie);
                        
                        echo "Categorie";
                        
                    }
                    
                    if(!empty($phone)){
                        
                        $adressNameChangePhone = $addressName;
                            
                        if(!empty($addressNewName)){
                            
                            $adressNameChangePhone = $addressNewName;
                            
                        }
                        
                        $elem = "phone";
                        $nameElem = $phone;
                            
                        $address->update($elem, $nameElem, $adressNameChangePhone);
                        
                    }
                    
                }
                
            }
            
        }else if(isset($_POST["delete"]) AND $_POST["delete"] === "true" AND isset($_POST["name"]) AND isset($_POST["categorie"])){
            
            $name = strip_tags($_POST["name"]);
            $categorie = strip_tags($_POST["categorie"]);
            
            $address->delete($name, $categorie);
            $addressList->delete($name);
            
            echo "successDelete";
            
        }
    
        break;
    
}