<div id="addressesListePage" class="page">
    <menu></menu>
    <div class="content">
        <div id="adressesListe" class="inlineAll">
            <div class="headApp">
                <span class="title">Listes</span>
                <lists template-url="app/views/templates/lists/listsTemplate.php"></lists>
            </div>
            <div class="col-md-12 contentBox" ng-show="addresses.length > 0">
                <div class="col-md-6">
                    <addresses template-url="app/views/templates/lists/addressesTemplate.php"></addresses>
                </div>
                <div class="col-md-6">
                    <div class="inBox">
                        <span class="title">Modifier la liste <correct template-correct="correctChangeList"></correct></span>
                        <div class="inBoxContent">
                            <form name="listModification" class="form-horizontal">
                                <div class="multiContent" ng-hide="errorBackEnd === true">
                                    <div class="form-group">
                                        <label for="changeNameList" class="control-label col-md-2 col-sm-2">Nom</label>
                                        <div class="col-md-10 col-sm-10">
                                            <input id="changeNameList" name="changeNameList" placeholder="Indiquez un nom" type="text" class="form-control" ng-model="dataUpList.newname" ng-class="{errorBackEnd: errorChangeLengthList === true || errorChangeListPattern === true || errorChangeList === true || errorNameExist === true}" ng-click="errorChangeLengthList = false; errorChangeListPattern = false; errorChangeList = false; errorNameExist = false" ng-minlength="3" ng-maxlength="30" ng-pattern="word">
                                            <div class="errorInfos">
                                                <span ng-show="listModification.changeNameList.$error.minlength">3 car. min</span>
                                                <span ng-show="listModification.changeNameList.$error.maxlength">30 car. max</span>
                                                <span ng-show="listModification.changeNameList.$error.pattern">Caract&egrave;re interdit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <span ng-show="errorChangeLengthList === true || errorChangeListPattern === true || errorChangeList === true || errorNameExist === true" class="errorBlock errorBlockMargin">{{textErrorChangeList}}</span>
                                    </div>
                                </div>
                                <div class="multiContent textRight">
                                    <button class="btn btnPrimary btnMidWidth" ng-click="updateList()">Modifier</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="inBox other">
                        <span class="title">Amis ayant acc&egrave;s &agrave; cette liste</span>
                        <div class="inBoxContent">
                        </div>
                    </div>
                    <div class="inBox other">
                        <div class="inBoxContent center">
                            <button ng-hide="confirmDelete === true || errorDeleteList === true" class="btn btnBigWidth btnDelete" ng-click="confirmDelete = true">Supprimer la liste</button>
                            <span ng-show="confirmDelete === true"><button class="btn btnPrimary btnMidWidth" ng-click="confirmDelete = false">Annuler</button> <button class="btn btnDelete btnMidWidth" ng-click="deleteList()">Supprimer</button></span>
                            <span ng-show="errorDeleteList === true" class="errorBlock">Une erreur s&rsquo;est produite. Merci de recharger la page.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div ng-show="addresses.length === 0" class="col-md-12 center noResults">
                <span class="title">Pas de résultats</span>
                <p>Vous n&rsquo;avez pas encore ajout&eacute; d&rsquo;adresse &agrave; cette  liste.</p>
                <button class="btn btnPrimary" ng-click="redirect('/addresses')">Ajouter une adresse</button><br />
                <i class="glyphicon glyphicon-cloud"></i>
            </div>
        </div>
    </div>
</div>