<?php

// Destruction de la session pour déconnexion
if(isset($_POST["logout"]) && $_POST["logout"] === "true"){
    
    session_start();
    session_destroy();
    
    echo "logout";
    
}