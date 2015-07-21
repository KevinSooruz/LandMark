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
                    <label id="labeluSurname" for="uSurname"><i class="glyphicon glyphicon-user"></i> Pr&eacute;nom</label>
                    <input id="uSurname" class="form-control" name="uSurname" ng-model="user.surname" type="text" ng-focus="focusInputModal('uSurname')" ng-blur="blurInputModal('uSurname')" ng-minlength="3" ng-maxlength="50" required="">
                    <div class="errorInfos">
                        <span ng-show="inscription.uSurname.$error.required">Obligatoire</span>
                        <span ng-show="inscription.uSurname.$error.minlength">3 car. min</span>
                        <span ng-show="inscription.uSurname.$error.maxlength">50 car. max</span>
                    </div>
                </div>
                <div class="form-group">
                    <label id="labeluName" for="uName"><i class="glyphicon glyphicon-user"></i> Nom</label>
                    <input id="uName" class="form-control" name="uName" ng-model="user.name" type="text" ng-focus="focusInputModal('uName')" ng-blur="blurInputModal('uName')" ng-minlength="3" ng-maxlength="50" required="">
                    <div class="errorInfos">
                        <span ng-show="inscription.uName.$error.required">Obligatoire</span>
                        <span ng-show="inscription.uName.$error.minlength">3 car. min</span>
                        <span ng-show="inscription.uName.$error.maxlength">50 car. max</span>
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
                    <label id="labeluPassword" for="uPassword"><i class="glyphicon glyphicon-barcode"></i> Mot de passe</label>
                    <input id="uPassword" class="form-control" name="uPassword" ng-model="user.password" type="password" ng-focus="focusInputModal('uPassword')" ng-blur="blurInputModal('uPassword')" ng-minlength="5" ng-maxlength="20" required="">
                    <div class="errorInfos">
                        <span ng-show="inscription.uPassword.$error.required">Obligatoire</span>
                        <span ng-show="inscription.uPassword.$error.minlength">5 car. min</span>
                        <span ng-show="inscription.uPassword.$error.maxlength">20 car. max</span>
                    </div>
                </div>
                <div class="form-group textRight">
                    <button type="submit" class="btn btnPrimary" ng-click="confirmInscription()">Valider</button>
                </div>
            </form>
        </div>
    </div>
</div>