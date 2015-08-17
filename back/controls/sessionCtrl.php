<?php session_start();

// Vérification si token existe + si durée valide
if(isset($_SESSION["token"]) && isset($_SESSION["token_time"])){
    
    $time = time() - (60*60); // Limite de durée d'une heure
    
    if($_SESSION["token_time"] >= $time){
        
        $_SESSION["token_time"] = time(); // On relance le token_time à 0
        echo "session"; // Lancement de la session
        
    }else{
        
        echo "noSession";
        
    }
    
}else{
    
     echo "noSession";
    
}