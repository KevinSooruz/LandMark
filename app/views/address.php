<div id="addressPage" class="page">
    <menu></menu>
    <div class="content">
        <div id="adress" class="inlineAll">
            <div class="headApp">
                <span class="title">Gestion</span>
                <categories template-url="app/views/templates/categories/categoriesTemplate.php"></categories>
            </div>
            <div class="col-md-12 contentBox">
                <div class="col-md-6 col-sm-6">
                    <div class="inBox">
                        <span class="title">Adresse</span>
                        <addresses template-url="app/views/templates/address/addressTemplate.php"></addresses>
                    </div>
                    <lists template-url="app/views/templates/address/listsTemplate.php" template-title="Choisissez une liste"></lists>
                </div>
                <div class="col-md-6 col-sm-6">
                    <div class="inBox">
                        <span class="title">Modification <correct template-correct="correctChangeAddress"></correct></span>
                        <div class="inBoxContent">
                            <form name="addressModification" class="form-horizontal">
                                <div class="multiContent" ng-hide="errorBackEnd === true">
                                    <div class="form-group">
                                        <label for="changeName" class="control-label col-md-2 col-sm-2">Nom</label>
                                        <div class="col-md-10 col-sm-10">
                                            <input id="changeName" name="changeName" placeholder="Indiquez un nom" type="text" class="form-control" ng-model="dataUpAddress.newname" ng-class="{errorBackEnd: errorChangeAddress === true || errorChangeLengthAddress === true}" ng-click="errorChangeAddress = false; errorChangeLengthAddress = false; errorBackEndAddress = false" ng-minlength="3" ng-maxlength="50" ng-pattern="word">
                                            <div class="errorInfos">
                                                <span ng-show="addressModification.changeName.$error.minlength">3 car. min</span>
                                                <span ng-show="addressModification.changeName.$error.maxlength">50 car. max</span>
                                                <span ng-show="addressModification.changeName.$error.pattern">Caract&egrave;re interdit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="changePhone" class="col-md-2 col-sm-2 control-label">T&eacute;l&eacute;phone</label>
                                        <div class="col-md-10 col-sm-10">
                                            <input id="changePhone" name="changePhone" placeholder="Indiquez un téléphone" type="tel" class="form-control" ng-model="dataUpAddress.phone" ng-class="{errorBackEnd: errorChangePhone === true || errorChangeLengthPhone === true}" ng-click="errorChangePhone = false; errorChangeLengthPhone = false; errorBackEndAddress = false" ng-minlength="3" ng-maxlength="30" ng-pattern="tel">
                                            <div class="errorInfos">
                                                <span ng-show="addressModification.changePhone.$error.minlength">3 car. min</span>
                                                <span ng-show="addressModification.changePhone.$error.maxlength">30 car. max</span>
                                                <span ng-show="addressModification.changePhone.$error.pattern">Caract&egrave;re interdit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <categories template-url="app/views/templates/address/categoriesTemplate.php" template-title="Choisissez une catégorie"></categories>
                                    <div class="form-group">
                                        <span ng-show="errorChangeAddress === true || errorChangePhone === true || errorChangeLengthAddress === true || errorChangeLengthPhone === true || errorBackEndAddress === true" class="errorBlock errorBlockMargin">{{textErrorChangeAddress}}</span>
                                    </div>
                                </div>
                                <div class="multiContent textRight" ng-hide="errorBackEnd === true">
                                    <button class="btn btnPrimary btnMidWidth" ng-click="updateAddress(dataUpAddress)">Modifier</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="inBox other">
                        <span class="title">Position g&eacute;ographique</span>
                        <div class="inBoxContent">
                            <map ng-hide="errorMap === true"></map>
                            <span ng-show="errorMap === true" class="errorBlock">{{textErrorMap}}</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="inBox center other">
                        <div class="inBoxContent">
                            <button ng-hide="confirmDelete === true" class="btn btnBigWidth btnDelete" ng-click="confirmDelete = true">Supprimer l&rsquo;adresse</button>
                            <span ng-show="confirmDelete === true"><button class="btn btnPrimary btnMidWidth" ng-click="confirmDelete = false">Annuler</button> <button class="btn btnDelete btnMidWidth" ng-click="deleteAddress()">Supprimer</button></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>