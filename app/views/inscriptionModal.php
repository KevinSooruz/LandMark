<div class="modal" ng-class="{in: modalInscription === true}">
    <div class="modalOut" ng-click="hideModal()"></div>
    <div class="modalBody" ng-class="{showModal: modalInscription === true}">
        <div class="modalTitle">
            <span>Inscription</span>
            <i class="glyphicon glyphicon-remove" ng-click="hideModal()"></i>
        </div>
        <div class="modalContent">
            <form name="inscription">
                <div class="form-group">
                    <label id="labeluPrenom" for="uPrenom"><i class="glyphicon glyphicon-user"></i> Pr&eacute;nom</label>
                    <input id="uPrenom" class="form-control" name="uPrenom" ng-model="user.prenom" type="text" ng-focus="focusInputModal('uPrenom')" ng-blur="blurInputModal('uPrenom')" ng-minlength="3" ng-maxlength="50" required="">
                    <div class="errorInfos">
                        <span ng-show="inscription.uPrenom.$error.required">Obligatoire</span>
                        <span ng-show="inscription.uPrenom.$error.minlength">3 car. min</span>
                        <span ng-show="inscription.uPrenom.$error.maxlength">50 car. max</span>
                    </div>
                </div>
                <div class="form-group">
                    <label id="labeluNom" for="uNom"><i class="glyphicon glyphicon-user"></i> Nom</label>
                    <input id="uNom" class="form-control" name="uNom" ng-model="user.nom" type="text" ng-focus="focusInputModal('uNom')" ng-blur="blurInputModal('uNom')" ng-minlength="3" ng-maxlength="50" required="">
                    <div class="errorInfos">
                        <span ng-show="inscription.uNom.$error.required">Obligatoire</span>
                        <span ng-show="inscription.uNom.$error.minlength">3 car. min</span>
                        <span ng-show="inscription.uNom.$error.maxlength">50 car. max</span>
                    </div>
                </div>
                <div class="form-group">
                    <label id="labeluEmail" for="uEmail"><i class="glyphicon glyphicon-envelope"></i> E-mail</label>
                    <input id="uEmail" class="form-control" name="uEmail" ng-model="user.email" type="email" ng-focus="focusInputModal('uEmail')" ng-blur="blurInputModal('uEmail')" required="">
                    <div class="errorInfos">
                        <span ng-show="inscription.uEmail.$error.required">Obligatoire</span>
                        <span ng-show="inscription.uEmail.$error.email">E-mail invalide</span>
                    </div>
                </div>
                <div class="form-group">
                    <label id="labeluPasse" for="uPasse"><i class="glyphicon glyphicon-barcode"></i> Mot de passe</label>
                    <input id="uPasse" class="form-control" name="uPasse" ng-model="user.passe" type="password" ng-focus="focusInputModal('uPasse')" ng-blur="blurInputModal('uPasse')" ng-minlength="5" ng-maxlength="20" required="">
                    <div class="errorInfos">
                        <span ng-show="inscription.uPasse.$error.required">Obligatoire</span>
                        <span ng-show="inscription.uPasse.$error.minlength">5 car. min</span>
                        <span ng-show="inscription.uPasse.$error.maxlength">20 car. max</span>
                    </div>
                </div>
                <div class="form-group textRight">
                    <button type="submit" class="btn btnPrimary">Valider</button>
                </div>
            </form>
        </div>
    </div>
</div>