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
                <div class="col-md-8 col-sm-8 col-xs-8">
                    <span class="fw7">Contact :</span> {{address.phone}}<span ng-show="address.phone === ''">...</span>
                </div>
            </div>
        </li>
    </ul>
</div>