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
                <div class="col-md-12 hours" ng-hide="address.opening === ''">
                    <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-6">
                            <span class="fw7">Horaires :</span> 
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-6 textRight">
                            <span ng-click="changeHoraire()" class="link linkPrimary fs11">{{textHoraire}} <i class="glyphicon glyphicon-triangle-bottom"></i></span>
                        </div>
                    </div>
                    <ul class="addressSplit" ng-show="horaireDay === true">
                        <li ng-repeat="day in address.opening.split(',')" ng-show="activeDay === $index">{{day}}</li>
                    </ul>
                    <ul class="addressSplit" ng-show="horaireDay === false">
                        <li ng-repeat="day in address.opening.split(',')" class="col-md-12" ng-class="{active: activeDay === $index}">{{day}}</li>
                    </ul>
                </div>
            </div>
            <span ng-show="errorAddressInList === true" class="errorBlock errorBlockMargin">D&eacute;sol&eacute; mais cette adresse n&rsquo;existe pas.</span>
        </li>
    </ul>
</div>