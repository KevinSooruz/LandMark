<div id="addressesPage" class="page">
    <menu></menu>
    <div class="content">
        <div id="adresses" class="inlineAll">
            <div class="headApp">
                <span class="title">Adresses</span>
            </div>
            <div class="col-md-12 contentBox">
                <div class="col-md-6">
                    <div class="inBox">
                        <span class="title">Ajouter une adresse</span>
                        <div class="inBoxContent">
                            <form name="adresses" class="form-horizontal">
                                <div class="multiContent">
                                    <div class="form-group">
                                        <label for="adName" class="col-md-2 col-sm-2 control-label">Nom</label>
                                        <div class="col-md-10 col-sm-10">
                                            <input id="adName" name="adName" placeholder="Indiquez un nom" type="text" class="form-control" ng-model="adName" ng-class="{errorBackEnd: errorName === true}" ng-click="errorName = false; errorPattern = false; errorGeocode = false" ng-minlength="3" ng-maxlength="50" ng-pattern="word" required="">
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
                                            <input id="adLocation" name="adLocation" placeholder="Indiquez un lieu" type="text" class="form-control" ng-model="adLocation" ng-class="{errorBackEnd: errorLocation === true}" ng-click="errorLocation = false; errorPatternAddress = false; errorGeocode = false" ng-pattern="word" required="">
                                            <div class="errorInfos">
                                                <span ng-show="adresses.adLocation.$error.required">Obligatoire</span>
                                                <span ng-show="adresses.adLocation.$error.pattern">Caract&egrave;re interdit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <span ng-show="errorName === true" class="errorBlock">Merci de renseigner un nom.</span>
                                        <span ng-show="errorLocation === true" class="errorBlock">Merci de renseigner une adresse.</span>
                                        <span ng-show="errorPatternAddress === true" class="errorBlock">Caract&egrave;res sp&eacute;ciaux interdits.</span>
                                    </div>
                                </div>
                                <categories template-url="app/views/templates/addresses/categoriesTemplate.php"></categories>
                                <lists template-url="app/views/templates/addresses/listsTemplateSelect.php"></lists>
                                <div class="multiContent">
                                    <button type="submit" class="btn btnPrimary btnFullWidth" ng-click="adresseAdd()">Ajouter</button>
                                    <span ng-show="errorGeocode === true" class="errorBlock errorBlockMargin">Une erreur s&rsquo;est produite. Merci d&rsquo;enregistrer de nouveau votre adresse.</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div id="listsSelect" class="inBox">
                        <span class="title">Vos listes <span class="toolTip">{{lists.length}} liste<span ng-show="lists.length > 1">s</span></span></span>
                        <div class="inBoxContent">
                            <div class="multiContent">
                                <form name="adLists" class="form-horizontal">
                                    <div class="form-group">
                                        <label for="listName" class="col-md-2 col-sm-2 control-label">Nom</label>
                                        <div class="col-md-7 col-sm-7">
                                            <input id="listName" name="listName" placeholder="Indiquez un nom" type="text" class="form-control" ng-model="listName" ng-class="{errorBackEnd: errorList === true}" ng-click="errorList = false; errorNameList = false; errorPatternList = false" ng-minlength="3" ng-maxlength="50" ng-pattern="word" required="">
                                            <div class="errorInfos">
                                                <span ng-show="adLists.listName.$error.required">Obligatoire</span>
                                                <span ng-show="adLists.listName.$error.minlength">3 car. min</span>
                                                <span ng-show="adLists.listName.$error.maxlength">50 car. max</span>
                                                <span ng-show="adLists.listName.$error.pattern">Caract&egrave;re interdit</span>
                                            </div>
                                        </div>
                                        <div class="col-md-3 col-sm-3 textRight">
                                            <button class="btn btnPrimary" ng-click="adList(listName)">Ajouter</button>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <span ng-show="errorNameList === true" class="errorBlock">Merci de renseigner un nom.</span>
                                        <span ng-show="errorPatternList === true" class="errorBlock">Caract&egrave;res sp&eacute;ciaux interdits.</span>
                                    </div>
                                </form>
                            </div>
                            <lists template-url="app/views/templates/addresses/listsTemplate.php"></lists>
                        </div>
                    </div>
                    <addresses template-url="app/views/templates/addresses/addressesTemplate.php"></addresses>
                </div>
            </div>
        </div>
    </div>
</div>