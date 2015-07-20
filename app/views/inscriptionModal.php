<div class="modal" ng-class="{in: modalInscription === true}">
    <div class="modalBody" ng-class="{showModal: modalInscription === true}">
        <div class="modalTitle">
            <span>Inscription</span>
            <i class="glyphicon glyphicon-remove" ng-click="hideModal()"></i>
        </div>
        <div class="modalContent">
            <form>
                <div class="form-group">
                    <label id="labelpseudoInscription" for="pseudoInscription"><i class="glyphicon glyphicon-user"></i> Pseudo</label>
                    <input id="pseudoInscription" class="form-control" type="text" ng-focus="focusInputModal('pseudoInscription')" ng-blur="blurInputModal('pseudoInscription')">
                </div>
                <div class="form-group">
                    <label id="labelemailInscription" for="emailInscription"><i class="glyphicon glyphicon-envelope"></i> Email</label>
                    <input id="emailInscription" class="form-control" type="text" ng-focus="focusInputModal('emailInscription')" ng-blur="blurInputModal('emailInscription')">
                </div>
                <div class="form-group">
                    <label id="labelpasseInscription" for="passeInscription"><i class="glyphicon glyphicon-barcode"></i> Mot de passe</label>
                    <input id="passeInscription" class="form-control" type="password" ng-focus="focusInputModal('passeInscription')" ng-blur="blurInputModal('passeInscription')">
                </div>
                <div class="form-group textRight">
                    <button type="submit" class="btn btnPrimary">Valider</button>
                </div>
            </form>
        </div>
    </div>
</div>