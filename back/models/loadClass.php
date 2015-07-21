<?php

function chargerClass($class){
    
    require "../models/" . $class . ".class.php";
    
}
spl_autoload_register("chargerClass");