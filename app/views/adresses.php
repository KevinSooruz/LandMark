<div id="adresses" ng-controller="AdressesController">
    <div class="headApp">
        <span class="title">Adresses</span>
    </div>
    <div class="col-md-12 contentBox">
        <div class="col-md-6">
            <div class="inBox">
                <span class="title">Ajouter une adresse</span>
                <div class="inBoxContent">
                    <div class="multiContent">
                        <form name="adresses" class="form-horizontal">
                            <div class="form-group">
                                <label for="adName" class="col-md-2 col-sm-2 control-label">Nom</label>
                                <div class="col-md-10 col-sm-10">
                                    <input id="adName" name="adName" placeholder="Indiquez un nom" class="form-control" ng-model="adName" ng-minlength="3" ng-maxlength="50" required="">
                                </div>
                                <div class="errorInfos">
                                    <span ng-show="adresses.adName.$error.required">Obligatoire</span>
                                    <span ng-show="adresses.adName.$error.minlength">3 car. min</span>
                                    <span ng-show="adresses.adName.$error.maxlength">50 car. max</span>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="adLocation" class="col-md-2 col-sm-2 control-label">Adresse</label>
                                <div class="col-md-10 col-sm-10">
                                    <input id="adLocation" name="adLocation" placeholder="Indiquez un lieu" class="form-control" ng-model="adLocation" required="">
                                </div>
                                <div class="errorInfos">
                                    <span ng-show="adresses.adLocation.$error.required">Obligatoire</span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="multiContent">
                        <span class="title">Cat&eacute;gorie</span>
                        <ul class="row">
                            <li class="col-md-3" ng-repeat="categorie in categories">
                                <span class="selectObject" ng-class="{active: categorieIndex === $index}" ng-click="selectCategorie($index, categorie.name)">{{categorie.name}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="multiContent">
                        <span class="title">Liste</span>
                        <ul class="row">
                            <li class="col-md-3" ng-repeat="list in lists">
                                <span class="selectObject" ng-class="{active: listIndex === $index}" ng-click="selectList($index, list.name)">{{list.name}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="multiContent">
                        <button class="btn" ng-click="adresseAdd()">Ajouter</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="inBox">
                <span class="title">Vos adresses</span>
                <div class="inBoxContent">
                    <p>Vous n&rsquo;avez actuellement enregistr&eacute; aucune adresse</p>
                </div>
            </div>
            <div class="inBox other">
                <span class="title">Vos listes</span>
                <div class="inBoxContent">
                    <p>Vous n&rsquo;avez actuellement enregistr&eacute; aucune Liste</p>
                </div>
            </div>
        </div>
    </div>
</div>