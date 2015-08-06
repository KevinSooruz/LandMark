<div class="col-md-12 contentBox">
    <span ng-show="errorLoadAddresses === true" class="errorBlock">Une erreur s'est produite. Merci de recharger la page.</span>
    <ul>
        <li class="compactBox col-md-4" ng-repeat="address in addresses | reverse">
            <div class="contentCompact">
                <div class="col-md-3 col-sm-3 col-xs-3 center">
                    <i class="glyphicon glyphicon-map-marker"></i>
                </div>
                <div class="col-md-9 col-sm-9 col-xs-9">
                    <span class="title">{{address.name}}</span>
                    <div class="location">
                        <span>{{address.location}}</span>
                    </div>
                    <div class="categorie">
                        <span class="categorieName"><span class="fw7">Cat&eacute;gorie :</span> {{address.categorie}}</span>
                    </div>
                </div>
            </div>
        </li>
    </ul>
    <div ng-show="addresses.length === 0" class="col-md-12 center noResults">
        <span class="title">Pas de résultats</span>
        <p>Vous n'avez pas encore ajouté d'adresse à cette liste.</p>
        <button class="btn btnPrimary" ng-click="redirect('/addresses')">Ajouter une adresse</button><br />
        <i class="glyphicon glyphicon-cloud"></i>
    </div>
</div>