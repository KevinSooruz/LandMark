<!--Home container-->
<div id="home" ng-controller="HomeController">
    <header id="header">
        <h1>LandMark</h1>
        <h2>M&eacute;morisez et partagez vos lieux pr&eacute;f&eacute;r&eacute;s</h2>
        <button class="btn btnPrimary btnBig" ng-click="showModalInscription()">Inscription</button>
        <button class="btn btnPrimary btnBig" ng-click="showModalConnection()">Connexion</button>
    </header>

    <inscription></inscription>
    <connection></connection>
</div>