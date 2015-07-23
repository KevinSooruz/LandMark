<div class="modal" ng-class="{in: modalConnection === true}">
    <div class="modalOut" ng-click="hideModalConnection()"></div>
    <div class="modalBody" ng-class="{showModal: modalConnection === true}">
        <div class="modalTitle">
            <span>Connexion</span>
            <i class="glyphicon glyphicon-remove" ng-click="hideModalConnection()"></i>
        </div>
        <div class="modalContent">
            <form name="connection">
                <div class="form-group">
                    <label id="labeluEmailCo" for="uEmailCo"><i class="glyphicon glyphicon-envelope"></i> E-mail</label>
                    <input id="uEmailCo" class="form-control" ng-class="{errorBackEnd: userNotExist === true}" name="uEmailCo" ng-model="userCo.email" type="email" ng-focus="focusInputModal('uEmailCo')" ng-blur="blurInputModal('uEmailCo')" ng-click="userNotExist = false" required="">
                    <div class="errorInfos">
                        <span ng-show="connection.uEmailCo.$error.required">Obligatoire</span>
                        <span ng-show="connection.uEmailCo.$error.email">E-mail invalide</span>
                        <span ng-show="userNotExist === true">Utilisateur inexistant</span>
                    </div>
                </div>
                <div class="form-group">
                    <label id="labeluPasswordCo" for="uPasswordCo"><i class="glyphicon glyphicon-barcode"></i> Mot de passe</label>
                    <input id="uPasswordCo" class="form-control" ng-class="{errorBackEnd: incorrectPassword === true}" name="uPasswordCo" ng-model="userCo.password" type="password" ng-focus="focusInputModal('uPasswordCo')" ng-blur="blurInputModal('uPasswordCo')" ng-minlength="5" ng-maxlength="20" ng-click="incorrectPassword = false" required="">
                    <div class="errorInfos">
                        <span ng-show="connection.uPasswordCo.$error.required">Obligatoire</span>
                        <span ng-show="connection.uPasswordCo.$error.minlength">5 car. min</span>
                        <span ng-show="connection.uPasswordCo.$error.maxlength">20 car. max</span>
                        <span ng-show="incorrectPassword === true">Mot de passe incorrect</span>
                    </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-6">
                            <span class="link linkBlue" ng-click="changeModal()">S&rsquo;inscrire</span>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-6 textRight">
                            <button type="submit" class="btn btnPrimary" ng-click="confirmConnection(userCo)">Valider</button>
                        </div>
                    </div>
                </div>
            </form>
            <span ng-show="errorModalBackEnd === true" class="errorModal">Une erreur s&rsquo;est produite. Merci d&rsquo;essayer de nouveau.</span>
            <span ng-show="userNotExist === true" class="errorModal">Cet utilisateur n&rsquo;existe pas.<br /><span class="link linkError" ng-click="changeModal()">Inscrivez-vous !</span></span>
            <span ng-show="incorrectPassword === true" class="errorModal">Mot de passe incorrect.</span>
        </div>
    </div>
</div>