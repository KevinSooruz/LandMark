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
                                            <input id="adName" name="adName" placeholder="Indiquez un nom" type="text" class="form-control" ng-model="adName" ng-class="{errorBackEnd: errorName === true || nameExist === true}" ng-click="errorName = false; errorPatternAddress = false; errorGeocode = false; nameExist = false" ng-minlength="3" ng-maxlength="50" ng-pattern="word" required="">
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
                                    <div class=form-group>
                                        <label for="adPhone" class="col-md-2 col-sm-2 control-label">T&eacute;l&eacute;phone</label>
                                        <div class="col-md-10 col-sm-10">
                                            <input id="adPhone" name="adPhone" placeholder="Indiquez un téléphone" type="tel" class="form-control" ng-model="adPhone" ng-click="errorPatternAddress = false; errorGeocode = false" ng-minlength="3" ng-maxlength="30" ng-pattern="tel">
                                            <div class="errorInfos">
                                                <span ng-show="adresses.adPhone.$error.minlength">3 car. min</span>
                                                <span ng-show="adresses.adPhone.$error.maxlength">30 car. max</span>
                                                <span ng-show="adresses.adPhone.$error.pattern">Caract&egrave;re interdit</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <span ng-show="errorName === true" class="errorBlock">Merci de renseigner un nom.</span>
                                        <span ng-show="nameExist === true" class="errorBlock">Ce nom d&rsquo;adresse existe d&eacute;j&agrave;. Merci de le modifier.</span>
                                        <span ng-show="errorLocation === true" class="errorBlock">Merci de renseigner une adresse.</span>
                                        <span ng-show="errorPatternAddress === true" class="errorBlock">Caract&egrave;res sp&eacute;ciaux interdits.</span>
                                    </div>
                                </div>
                                <categories template-url="app/views/templates/addresses/categoriesTemplate.php" template-title="Choisissez une catégorie"></categories>
                                <lists template-url="app/views/templates/addresses/listsTemplateSelect.php"></lists>
                                <div class="multiContent center">
                                    <button type="submit" class="btn btnPrimary btnBigWidth" ng-click="adresseAdd()">Ajouter</button>
                                    <span ng-show="errorGeocode === true" class="errorBlock errorBlockMargin">Une erreur s&rsquo;est produite. Merci d&rsquo;enregistrer de nouveau votre adresse.</span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <lists template-url="app/views/templates/addresses/listsTemplate.php"></lists>
                </div>
                <div class="col-md-6">
                    <addresses template-url="app/views/templates/addresses/addressesTemplate.php"></addresses>
                </div>
            </div>
        </div>
    </div>
</div>