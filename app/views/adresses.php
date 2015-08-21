<div id="addressesPage" class="page">
    <menu></menu>
    <div class="content">
        <div id="adresses" class="inlineAll">
            <div class="headApp">
                <span class="title">Tableau de bord</span>
            </div>
            <div class="col-md-12 contentBox">
                <div class="col-md-6">
                    <div id="welcome" class="inBox">
                        <div class="inBoxContent">
                            <div class="row">
                                <div class="col-md-2 col-sm-2 col-xs-2 center">
                                    <i class="glyphicon glyphicon-certificate"></i>
                                </div>
                                <div class="col-md-10 col-sm-10 col-xs-10">
                                    <span class="title">{{userSurname}} {{userName}}</span>
                                    <p>Cet espace personnel a &eacute;t&eacute; con&ccedil;u pour vous permettre de r&eacute;pertorier vos lieux pr&eacute;f&eacute;r&eacute;s et de les partager avec vos proches. Vous pouvez ajouter, supprimer ou modifier une adresse et administrer les personnes avec qui vous souhaitez les partager.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="inBox other">
                        <span class="title">Ajouter une adresse <correct template-correct="correctAddAddress"></correct></span>
                        <div class="inBoxContent">
                            <form name="adresses" class="form-horizontal">
                                <div class="multiContent">
                                    <div class="form-group">
                                        <label for="adName" class="col-md-2 col-sm-2 control-label">Nom</label>
                                        <div class="col-md-10 col-sm-10">
                                            <input id="adName" name="adName" placeholder="Indiquez un nom" type="text" class="form-control" ng-model="addAddress.name" ng-class="{errorBackEnd: errorAddRequiredAddress === true || errorAddLengthAddress === true || errorAddAddressPattern === true || nameExist === true}" ng-click="errorAddRequiredAddress = false; errorAddLengthAddress = false; errorAddAddressPattern = false; nameExist = false" ng-minlength="3" ng-maxlength="50" ng-pattern="word" required="">
                                            <div class="errorInfos">
                                                <span ng-show="adresses.adName.$error.required">Obligatoire</span>
                                                <span ng-show="adresses.adName.$error.minlength">3 car. min</span>
                                                <span ng-show="adresses.adName.$error.maxlength">50 car. max</span>
                                                <span ng-show="adresses.adName.$error.pattern">Caract&egrave;re interdit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="adLocation" class="col-md-2 col-sm-2 control-label">Adresse</label>
                                        <div class="col-md-10 col-sm-10">
                                            <input id="adLocation" name="adLocation" placeholder="Indiquez un lieu" type="text" class="form-control" ng-model="addAddress.location" ng-class="{errorBackEnd: errorAddRequiredLocation === true || errorAddLocationPattern === true || errorLocation === true}" ng-click="errorAddRequiredLocation = false; errorAddLocationPattern = false; errorLocation = false" ng-keypress="updateInformations()" ng-pattern="wordAddress" required="">
                                            <div class="errorInfos">
                                                <span ng-show="adresses.adLocation.$error.required">Obligatoire</span>
                                                <span ng-show="adresses.adLocation.$error.pattern">Caract&egrave;re interdit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="adPhone" class="col-md-2 col-sm-2 control-label">T&eacute;l&eacute;phone</label>
                                        <div class="col-md-10 col-sm-10">
                                            <input id="adPhone" name="adPhone" placeholder="Indiquez un téléphone" type="tel" class="form-control" ng-model="addAddress.phone" ng-class="{errorBackEnd: errorAddLengthPhone === true ||  errorAddPhonePattern === true}" ng-click="errorAddLengthPhone = false; errorAddPhonePattern = false" ng-minlength="3" ng-maxlength="30" ng-pattern="tel">
                                            <div class="errorInfos">
                                                <span ng-show="adresses.adPhone.$error.minlength">3 car. min</span>
                                                <span ng-show="adresses.adPhone.$error.maxlength">30 car. max</span>
                                                <span ng-show="adresses.adPhone.$error.pattern">Caract&egrave;re interdit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <categories template-url="app/views/templates/addresses/categoriesTemplate.php" template-title="Choisissez une catégorie"></categories>
                                    <lists template-url="app/views/templates/addresses/listsTemplateSelect.php"></lists>
                                    <div class="form-group">
                                        <span ng-show="errorAddRequiredAddress === true || errorAddRequiredLocation === true || errorAddLengthAddress === true || errorAddAddressPattern === true || errorAddLocationPattern === true || errorAddLengthPhone === true || errorAddPhonePattern === true || nameExist === true" class="errorBlock errorBlockMargin">{{textErrorAddAddress}}</span>
                                        <span ng-show="errorBackEnd === true" class="errorBlock errorBlockMargin">Une erreur s&rsquo;est produite. Merci de recharger la page.</span>
                                    </div>
                                </div>
                                <div class="multiContent textRight">
                                    <button type="submit" class="btn btnPrimary btnMidWidth" ng-click="adresseAdd()">Ajouter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div id="listsSelect" class="inBox other">
                        <span class="title">Ajouter une liste <correct template-correct="correctAddList"></correct></span>
                        <div class="inBoxContent">
                            <form name="adLists" class="form-horizontal">
                                <div class="multiContent">
                                    <div class="form-group noMargin">
                                        <label for="listName" class="col-md-2 col-sm-2 control-label">Nom</label>
                                        <div class="col-md-10 col-sm-10">
                                            <input id="listName" name="listName" placeholder="Indiquez un nom" type="text" class="form-control" ng-model="addList.name" ng-class="{errorBackEnd: errorPatternList === true || errorListName === true || errorListLength === true || nameListExist === true || errorAddListName === true}" ng-click="errorPatternList = false; errorListName = false; errorListLength = false; nameListExist = false; errorAddListName = false" ng-minlength="3" ng-maxlength="30" ng-pattern="word" required="">
                                            <div class="errorInfos">
                                                <span ng-show="adLists.listName.$error.required">Obligatoire</span>
                                                <span ng-show="adLists.listName.$error.minlength">3 car. min</span>
                                                <span ng-show="adLists.listName.$error.maxlength">30 car. max</span>
                                                <span ng-show="adLists.listName.$error.pattern">Caract&egrave;re interdit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <span ng-show="errorPatternList === true || errorListName === true || errorListLength === true || nameListExist === true || errorAddListName === true" class="errorBlock errorBlockMargin">{{textErrorList}}</span>
                                    </div>
                                </div>
                                <div class="multiContent textRight">
                                    <button class="btn btnPrimary btnMidWidth" ng-click="adList()">Ajouter</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <lists template-url="app/views/templates/addresses/listsTemplate.php"></lists>
                    <addresses template-url="app/views/templates/addresses/addressesTemplate.php"></addresses>
                </div>
            </div>
        </div>
    </div>
</div>