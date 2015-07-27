<!--Home container-->
<div id="home" ng-controller="HomeController">
    <div class="filter filterBlack"></div>
    <div id="header">
        <div id="logo"></div>
        <h1>Localize</h1>
        <h2>R&eacute;pertoriez et partagez vos lieux pr&eacute;f&eacute;r&eacute;s<br />
            Partagez ces lieux avec {{textTitle}}</h2>
        <div class="btnGroup">
            <button class="btn btnPrimary btnBig btnHoverGrey" ng-click="showModalInscription()">Inscription</button>
            <button class="btn btnPrimary btnBig btnHoverGrey" ng-click="showModalConnection()">Connexion</button>
        </div>
    </div>
    <inscription></inscription>
    <connection></connection>
</div>