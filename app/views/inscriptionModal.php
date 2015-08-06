<div class="modal" ng-class="{in: modalInscription === true}">
    <!--<div class="modalOut" ng-click="hideModalInscription()"></div> div permettant la fermeture de la modal-->
    <i class="glyphicon glyphicon-remove" ng-click="hideModalInscription()"></i>
    <div class="modalBody" ng-class="{showModal: modalInscription === true}">
        <div class="modalTitle">
            <span>Localize</span>
        </div>
        <div class="modalContent">
            <span class="title">Retrouvez et partagez vos lieux pr&eacute;f&eacute;rez</span>
            <p>Localize est un service vous permettant de sauvegarder vos lieux pr&eacute;f&eacute;rez. Vous pouvez partager ces lieux avec tous vos amis afin de leur faire d&eacute;couvrir votre univers.</p>
            <form name="inscription">
                <div class="form-group">
                    <label id="labeluSurname" for="uSurname"><i class="glyphicon glyphicon-user"></i> Pr&eacute;nom</label>
                    <input id="uSurname" class="form-control" name="uSurname" ng-model="user.surname" type="text" ng-focus="focusInputModal('uSurname')" ng-blur="blurInputModal('uSurname')" ng-minlength="3" ng-maxlength="50" ng-pattern="word" ng-click="wrongSurnameInscription = false" required="">
                    <div class="errorInfos">
                        <span ng-show="inscription.uSurname.$error.required">Obligatoire</span>
                        <span ng-show="inscription.uSurname.$error.minlength">3 car. min</span>
                        <span ng-show="inscription.uSurname.$error.maxlength">50 car. max</span>
                        <span ng-show="inscription.uSurname.$error.pattern">Caract&egrave;re interdit</span>
                    </div>
                </div>
                <div class="form-group">
                    <label id="labeluName" for="uName"><i class="glyphicon glyphicon-user"></i> Nom</label>
                    <input id="uName" class="form-control" name="uName" ng-model="user.name" type="text" ng-focus="focusInputModal('uName')" ng-blur="blurInputModal('uName')" ng-minlength="3" ng-maxlength="50" ng-pattern="word" ng-click="wrongNameInscription = false" required="">
                    <div class="errorInfos">
                        <span ng-show="inscription.uName.$error.required">Obligatoire</span>
                        <span ng-show="inscription.uName.$error.minlength">3 car. min</span>
                        <span ng-show="inscription.uName.$error.maxlength">50 car. max</span>
                        <span ng-show="inscription.uName.$error.pattern">Caract&egrave;re interdit</span>
                    </div>
                </div>
                <div class="form-group">
                    <label id="labeluEmail" for="uEmail"><i class="glyphicon glyphicon-envelope"></i> E-mail</label>
                    <input id="uEmail" class="form-control" ng-class="{errorBackEnd: userExist === true || wrongMailInscription === true}" name="uEmail" ng-model="user.email" type="email" ng-focus="focusInputModal('uEmail')" ng-blur="blurInputModal('uEmail')" ng-click="userExist = false; wrongMailInscription = false" required="">
                    <div class="errorInfos">
                        <span ng-show="inscription.uEmail.$error.required">Obligatoire</span>
                        <span ng-show="inscription.uEmail.$error.email">E-mail incorrect</span>
                        <span ng-show="userExist === true">Utilisateur existant</span>
                    </div>
                </div>
                <div class="form-group">
                    <label id="labeluPassword" for="uPassword"><i class="glyphicon glyphicon-barcode"></i> Mot de passe</label>
                    <input id="uPassword" class="form-control" name="uPassword" ng-model="user.password" type="password" ng-focus="focusInputModal('uPassword')" ng-blur="blurInputModal('uPassword')" ng-minlength="5" ng-maxlength="20" ng-click="wrongPasswordInscription = false" required="">
                    <div class="errorInfos">
                        <span ng-show="inscription.uPassword.$error.required">Obligatoire</span>
                        <span ng-show="inscription.uPassword.$error.minlength">5 car. min</span>
                        <span ng-show="inscription.uPassword.$error.maxlength">20 car. max</span>
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btnPrimary btnFullWidth" ng-click="confirmInscription(user)">Inscription</button>
                </div>
            </form>
            <span ng-show="errorModalBackEnd === true" class="errorModal">Une erreur s&rsquo;est produite. Merci d&rsquo;essayer de nouveau.</span>
            <span ng-show="userExist === true" class="errorModal">Cet utilisateur semble d&eacutej&agrave; exister.<br /><span class="link linkError" ng-click="changeModal()">Connectez-vous !</span></span>
            <span ng-show="wrongSurnameInscription === true" class="errorModal">Pr&eacute;nom incorrect.</span>
            <span ng-show="wrongNameInscription === true" class="errorModal">Nom incorrect.</span>
            <span ng-show="wrongMailInscription === true" class="errorModal">E-mail incorrect.</span>
            <span ng-show="wrongPasswordInscription === true" class="errorModal">Mot de passe incorrect.</span>
            <div class="center">
                <span>Vous poss&eacute;dez un compte ?</span>
                <span class="btn btnGhostGrey btnFullWidth btnChangeModal" ng-click="changeModal()">Se connecter</span>
                <span class="link linkPrimary" ng-click="hideModalInscription()">Retour accueil</span>
            </div>
        </div>
    </div>
</div>