<div class="col-md-12 contentBox">
    <span ng-show="errorLoadAddresses === true" class="errorBlock">Une erreur s'est produite. Merci de recharger la page.</span>
    <ul>
        <li class="compactBox col-md-4" ng-repeat="address in addresses | reverse | filter: addressSearch">
            <div class="contentCompact">
                <div class="col-md-3 col-sm-3 col-xs-3 center">
                    <i class="glyphicon glyphicon-map-marker"></i>
                </div>
                <div class="col-md-9 col-sm-9 col-xs-9">
                    <div class="row">
                        <div class="col-md-7 col-sm-7 col-xs-7">
                            <span class="title">{{address.name}}</span>
                        </div>
                        <div class="col-md-5 col-sm-5 col-xs-5 textRight">
                            <span class="categorieLabel">{{address.categorie}}</span>
                        </div>
                    </div>
                    <div class="location">
                        <span>{{address.location}}</span>
                    </div>
                    <div class="otherInfo">
                        <span class="info"><span class="fw7">Contact :</span> {{address.list}}<span ng-show="address.list === ''">...</span></span>
                        <span class="info"><span class="fw7">Liste :</span> {{address.list}}<span ng-show="address.list === ''">...</span></span>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <div ng-show="addresses.length === 0" class="col-md-12 center noResults">
        <span class="title">Pas de résultats</span>
        <p>Vous n&rsquo;avez pas encore ajout&eacute; d&rsquo;adresse &agrave; cette cat&eacute;gorie.</p>
        <button class="btn btnPrimary" ng-click="redirect('/addresses')">Ajouter une adresse</button><br />
        <i class="glyphicon glyphicon-cloud"></i>
    </div>
</div>