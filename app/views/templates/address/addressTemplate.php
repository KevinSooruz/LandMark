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
            <div class="elemPlus row elemPlusAddress">
                <div class="col-md-12 blockElemPlus" ng-show="address.phone">
                    <span class="fw7">Contact</span> 
                    <span>{{address.phone}}</span>
                </div>
                <div class="col-md-12 blockElemPlus" ng-show="dayshours">
                    <span class="fw7">Horaires</span>
                    <ul class="addressSplit">
                        <li ng-repeat="dayhours in dayshours" class="col-md-12" ng-class="{active: activeDay === $index}">{{dayhours}}</li>
                    </ul>
                </div>
                <div class="col-md-12 blockElemPlus" ng-show="globalRating || priceRating || nbRating">
                    <span class="fw7">Notes</span>
                    <div ng-show="globalRating">
                        <span>Global : <span class="importantElem">{{globalRating}}/5</span><ul class="stars"><li ng-repeat="star in starsGlobalRating"><i class="{{star.type}}"></i></li></ul></span>
                    </div>
                    <div ng-show="priceRating">
                        <span>Prix : <span class="importantElem">{{priceRating}}/5</span><ul class="stars"><li ng-repeat="star in starsPriceRating"><i class="{{star.type}}"></i></li></ul></span>
                    </div>
                    <div ng-show="nbRating">
                        <span>Nombre de notes : <span class="importantElem">{{nbRating}}</span></span>
                    </div>
                </div>
                <div class="col-md-12 blockElemPlus comments" ng-show="userComments">
                    <span class="link linkPrimary" ng-click="userCommentsView = !userCommentsView"><span ng-show="!userCommentsView">Voir les avis <i class="glyphicon glyphicon-triangle-bottom"></i></span><span ng-show="userCommentsView">Fermer <i class="glyphicon glyphicon-triangle-top"></i></span></span>
                    <div ng-show="userCommentsView === true">
                        <span class="title">Avis des internautes</span>
                        <ul>
                            <li ng-repeat="userComment in userComments">
                                <span class="fw7">{{userComment.author}}</span>
                                <span class="userComment">{{userComment.text}}</span>
                                <div>
                                    <span>Note : <span class="importantElem">{{userComment.rating}}/5</span><ul class="stars"><li ng-repeat="star in userComment.starsComment"><i class="{{star.type}}"></i></li></ul></span>
                                </div>
                                <div>
                                    <span>Le : {{userComment.date}}</span>
                                </div>
                            </li>
                        </ul>
                    </div> 
                </div>
            </div>
            <span ng-show="errorAddressInList === true" class="errorBlock errorBlockMargin">D&eacute;sol&eacute; mais cette adresse n&rsquo;existe pas.</span>
        </li>
    </ul>
</div>