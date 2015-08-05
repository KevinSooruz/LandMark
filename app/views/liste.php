<div id="addressesListePage" class="page">
    <menu></menu>
    <div class="content">
        <div id="adressesListe" class="inlineAll">
            <div class="headApp">
                <span class="title">Liste {{nameList}}</span>
                <ul class="otherHeadElem">
                    <li ng-repeat="list in lists" ng-click="viewAddressesList(list.name)" ng-class="{active: list.name === nameList}">{{list.name}}</li>
                </ul>
            </div>
            <div class="col-md-12 contentBox">
                <ul>
                    <li class="compactBox col-md-4 col-sm-4" ng-repeat="address in addresses | reverse">
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
            </div>
        </div>
    </div>
</div>