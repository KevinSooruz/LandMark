<div class="col-md-12 contentBox">
    <span ng-show="errorLoadAddresses === true" class="errorBlock">Une erreur s'est produite. Merci de recharger la page.</span>
    <ul class="listAdresses complete">
        <li class="col-md-4 col-sm-4" ng-repeat="address in addresses | reverse | filter: addressSearch | slice:start:end">
            <div class="inBoxComplete">
                <div class="row">
                    <span class="title col-md-8 col-sm-8 col-xs-8">{{address.name}}</span>
                    <div class="col-md-4 col-sm-4 col-xs-4 textRight">
                        <span class="categorieLabel">{{address.categorie}}</span>
                    </div>
                </div>
                <span class="locationAddress">{{address.location}}</span>
                <div class="elemPlus row">
                    <div class="col-md-8 col-sm-8 col-xs-8">
                        <span class="fw7">Contact :</span> {{address.phone}}<span ng-show="address.phone === ''">...</span>
                    </div>
                    <div class="col-md-4 col-sm-4 col-xs-4 textRight">
                        <i class="glyphicon glyphicon-map-marker" ng-click="redirect('/map/categories/{{address.categorie}}/{{address.name}}')"></i>
                        <i class="glyphicon glyphicon-wrench" ng-click="redirect('/addresses/categories/{{address.categorie}}/{{address.name}}')"></i>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <pagination list-view="addresses"></pagination>
    <div ng-show="noResultAddress === true" class="col-md-12 center noResults">
        <span class="title">Pas de résultats</span>
        <p>Vous n&rsquo;avez pas encore ajout&eacute; d&rsquo;adresse &agrave; cette cat&eacute;gorie.</p>
        <button class="btn btnPrimary" ng-click="redirect('/addresses')">Ajouter une adresse</button><br />
        <i class="glyphicon glyphicon-cloud"></i>
    </div>
</div>