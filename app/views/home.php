<!--Home container-->
<div id="home" ng-controller="HomeController">
    <div class="filter filterBlack"></div>
    <header id="header">
        <div id="logo"></div>
        <h1>Spartan Training</h1>
        <h2>Devenez une meilleure version de vous-m&ecirc;me<br />
        Devenez un leader</h2>
        <div class="btnGroup">
            <button class="btn btnPrimary btnBig" ng-click="showModalInscription()">Inscription</button>
            <button class="btn btnPrimary btnBig" ng-click="showModalConnection()">Connexion</button>
        </div>
    </header>
    <inscription></inscription>
    <connection></connection>
</div>