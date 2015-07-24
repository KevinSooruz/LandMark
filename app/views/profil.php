<?php session_start();

if(isset($_SESSION["token"])){  
?>

<p>test</p>
<button class="btn" ng-click="logout()">Deconnexion</button>

<?php  
}