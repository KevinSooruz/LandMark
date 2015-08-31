<div class="inBoxContent">
    <ul class="row listAdresses">
        <li class="col-md-12 col-sm-12 col-xs-12 lonely" ng-repeat="address in addresses">
            <div class="row">
                <span class="title col-md-8 col-sm-8 col-xs-8">{{address.name}}</span>
                <div class="col-md-4 col-sm-4 col-xs-4 textRight">
                    <span class="categorieLabel">{{address.categorie}}</span>
                </div>
            </div>
            <span class="locationAddress">{{address.location}}</span>
            <div class="elemPlus row">
                <div class="col-md-12">
                    <span class="fw7">Contact :</span> {{address.phone}}<span ng-show="address.phone === ''">...</span>
                </div>
                <div class="col-md-12 hours" ng-hide="dayshours.length === 0 || !dayshours">
                    <span class="fw7">Horaires :</span>
                    <ul class="addressSplit">
                        <li ng-repeat="dayhours in dayshours" class="col-md-12" ng-class="{active: activeDay === $index}">{{dayhours}}</li>
                    </ul>
                </div>
            </div>
            <span ng-show="errorAddressInList === true" class="errorBlock errorBlockMargin">D&eacute;sol&eacute; mais cette adresse n&rsquo;existe pas.</span>
        </li>
    </ul>
</div>