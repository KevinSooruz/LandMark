<div id="addressPage" class="page">
    <menu></menu>
    <div class="content">
        <div id="adress" class="inlineAll">
            <div class="headApp">
                <span class="title">Gestion</span>
                <categories template-url="app/views/templates/categories/categoriesTemplate.php"></categories>
            </div>
            <div class="col-md-12 contentBox">
                <div class="col-md-5 col-sm-5">
                    <div class="inBox">
                        <span class="title">Adresse</span>
                        <addresses template-url="app/views/templates/address/addressTemplate.php"></addresses>
                    </div>
                    <lists template-url="app/views/templates/address/listsTemplate.php" template-title="Choisissez une liste"></lists>
                </div>
                <div class="col-md-7 col-sm-7">
                    <div class="inBox">
                        <span class="title">Modification</span>
                        <div class="inBoxContent">
                            <form name="addressModification" class="form-horizontal">
                                <div class="multiContent" ng-hide="errorBackEnd === true">
                                    <div class="form-group">
                                        <label class="control-label col-md-2 col-sm-2">Nom</label>
                                        <div class="col-md-10 col-sm-10">
                                            <input id="changeName" name="changeName" placeholder="Indiquez un nom" type="text" class="form-control" ng-model="changeName" ng-class="{errorBackEnd: errorName === true || nameExist === true}" ng-click="errorName = false; nameExist = false; errorPatternAddress = false;" ng-minlength="3" ng-maxlength="50" ng-pattern="word">
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
                                            <input id="changePhone" name="changePhone" placeholder="Indiquez un téléphone" type="tel" class="form-control" ng-model="changePhone" ng-click="errorPatternAddress = false;" ng-minlength="3" ng-maxlength="30" ng-pattern="tel">
                                            <div class="errorInfos">
                                                <span ng-show="addressModification.changePhone.$error.minlength">3 car. min</span>
                                                <span ng-show="addressModification.changePhone.maxlength">30 car. max</span>
                                                <span ng-show="addressModification.changePhone.$error.pattern">Caract&egrave;re interdit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <categories template-url="app/views/templates/address/categoriesTemplate.php" template-title="Choisissez une catégorie"></categories>
                                    <div class="form-group">
                                        <span ng-show="errorBackEnd === true" class="errorBlock errorBlockMargin">Une erreur s&rsquo;est produite. Merci de recharger la page.</span>
                                        <span ng-show="errorName === true" class="errorBlock errorBlockMargin">Merci de renseigner un nom.</span>
                                        <span ng-show="nameExist === true" class="errorBlock errorBlockMargin">Ce nom d&rsquo;adresse existe d&eacute;j&agrave;. Merci de le modifier.</span>
                                        <span ng-show="errorPatternAddress === true" class="errorBlock errorBlockMargin">Caract&egrave;res sp&eacute;ciaux interdits.</span>
                                    </div>
                                </div>
                                <div class="multiContent textRight" ng-hide="errorBackEnd === true">
                                    <button class="btn btnPrimary btnMidWidth">Modifier</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="inBox center other">
                        <div class="inBoxContent">
                            <button class="btn btnBigWidth btnDelete">Supprimer l&rsquo;adresse</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="inBox other">
                        <span class="title">Position g&eacute;ographique</span>
                        <div id="map" class="inBoxContent">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>