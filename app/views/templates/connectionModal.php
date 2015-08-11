<div class="modal" ng-class="{in: modalConnection === true}">
    <!--<div class="modalOut" ng-click="hideModalConnection()"></div> div permettant la fermeture de la modal-->
    <i class="glyphicon glyphicon-remove" ng-click="hideModalConnection()"></i>
    <div class="modalBody" ng-class="{showModal: modalConnection === true}">
        <div class="modalTitle">
            <span>Localize</span>
        </div>
        <div class="modalContent">
            <span class="title">Bienvenue sur Localize</span>
            <p>Acc&eacute;dez &agrave; votre compte personnel en vous connectant. Si vous ne poss&eacute;dez pas de compte Localize, inscrivez-vous et b&eacute;n&eacute;ficiez de l&rsquo;int&eacute;gralit&eacute; de nos services.</p>
            <form name="connection">
                <div class="form-group">
                    <label id="labeluEmailCo" for="uEmailCo"><i class="glyphicon glyphicon-envelope"></i> E-mail</label>
                    <input id="uEmailCo" class="form-control" ng-class="{errorBackEnd: userNotExist === true}" name="uEmailCo" ng-model="userCo.email" type="email" ng-focus="focusInputModal('uEmailCo')" ng-blur="blurInputModal('uEmailCo')" ng-click="userNotExist = false; wrongMailConnection = false" ng-pattern="mail" required="">
                    <div class="errorInfos">
                        <span ng-show="connection.uEmailCo.$error.required">Obligatoire</span>
                        <span ng-show="connection.uEmailCo.$error.pattern">E-mail incorrect</span>
                        <span ng-show="userNotExist === true">Utilisateur inexistant</span>
                    </div>
                </div>
                <div class="form-group">
                    <label id="labeluPasswordCo" for="uPasswordCo"><i class="glyphicon glyphicon-barcode"></i> Mot de passe</label>
                    <input id="uPasswordCo" class="form-control" ng-class="{errorBackEnd: wrongPasswordConnection === true}" name="uPasswordCo" ng-model="userCo.password" type="password" ng-focus="focusInputModal('uPasswordCo')" ng-blur="blurInputModal('uPasswordCo')" ng-minlength="5" ng-maxlength="20" ng-click="wrongPasswordConnection = false" required="">
                    <div class="errorInfos">
                        <span ng-show="connection.uPasswordCo.$error.required">Obligatoire</span>
                        <span ng-show="connection.uPasswordCo.$error.minlength">5 car. min</span>
                        <span ng-show="connection.uPasswordCo.$error.maxlength">20 car. max</span>
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btnPrimary btnFullWidth" ng-click="confirmConnection(userCo)">Connexion</button>
                </div>
            </form>
            <span ng-show="errorModalBackEnd === true" class="errorModal">Une erreur s&rsquo;est produite. Merci d&rsquo;essayer de nouveau.</span>
            <span ng-show="userNotExist === true" class="errorModal">Cet utilisateur n&rsquo;existe pas.<br /><span class="link linkError" ng-click="changeModal()">Inscrivez-vous !</span></span>
            <span ng-show="wrongMailConnection === true" class="errorModal">E-mail incorrect.</span>
            <span ng-show="wrongPasswordConnection === true" class="errorModal">Mot de passe incorrect.</span>
            <div class="center">
                <span class="link linkPrimary">Mot de passe oubli&eacute; ?</span><br />
                <span>Vous ne poss&eacute;dez pas de compte ?</span>
                <span class="btn btnGhostGrey btnFullWidth btnChangeModal" ng-click="changeModal()">Cr&eacute;er un compte</span>
                <span class="link linkPrimary" ng-click="hideModalConnection()">Retour accueil</span>
            </div>
        </div>
    </div>
</div>