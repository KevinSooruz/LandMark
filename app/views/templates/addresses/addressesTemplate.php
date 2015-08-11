<div id="adressesList" class="inBox">
    <span class="title">Vos adresses <span class="toolTip">{{addresses.length}} Adresse<span ng-show="addresses.length > 1">s</span></span></span>
    <div class="inBoxContent">
        <ul class="row listAdresses">
            <li class="col-md-12 col-sm-12 col-xs-12" ng-repeat="address in addresses | limitTo:-6 | reverse">
                <div class="row">
                    <span class="title col-md-8 col-sm-8 col-xs-8">{{address.name}}</span>
                    <div class="col-md-4 col-sm-4 col-xs-4 textRight">
                        <span class="categorieLabel">{{address.categorie}}</span>
                    </div>
                </div>
                <span class="locationAddress">{{address.location}}</span>
                <span class="infoTel"><span class="fw7">Contact :</span> {{address.phone}}<span ng-show="address.phone === ''">...</span></span>
            </li>
        </ul>
        <p ng-show="addresses.length === 0">Vous n&rsquo;avez actuellement enregistr&eacute; aucune adresse</p>
        <span ng-show="errorLoadAddresses === true" class="errorBlock">Une erreur s'est produite. Merci de recharger la page.</span>
        <div class="center">
            <button class="btn btnPrimary btnBigWidth" ng-show="addresses.length > 5" ng-click="redirect('/addresses/categories/All')">Voir toutes les adresses</button>
        </div>
    </div>
</div>