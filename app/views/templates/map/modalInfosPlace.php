<div id="modalMap" ng-class="{in: showModal === true}">
    <div class="modalMapBody" ng-class="{showModal: showModal === true}">
        <div class="modalBlockTitle">
            <span>{{modalMapTitle}}</span>
            <i class="glyphicon glyphicon-remove" ng-click="showModal = false; selectCatAddAddressMap = false; nameExist = false;"></i>
        </div>
        <div class="modalContent">
            <div>
                <span class="title">Adresse</span>
                <span class="block">{{addressAddress}}</span>
            </div>
            <div id="phoneBlock" class="contentBlock" ng-show="addressPhoneState === 'ok' || addressInternationalPhoneState === 'ok'">
                <span class="title">Contact</span>
                <span class="block" ng-show="addressPhoneState === 'ok'">{{addressPhone}}</span>
                <span class="block" ng-show="addressInternationalPhoneState === 'ok'">{{addressInternationalPhone}}</span>
            </div>
            <div id="openingBlock" class="contentBlock" ng-show="addressOpeningState === 'ok'">
                <span class="title">Horaires</span>
                <ul id="addressOpening">
                    <li ng-class="{active: dayActif === $index}" ng-repeat="hours in addressOpening">{{hours}}</li>
                </ul>
            </div>
            <div id="ratingBlock" class="contentBlock" ng-show="addressRatingState === 'ok' || priceRatingState === 'ok' || addressNumberRatingState === 'ok'">
                <span class="title">Notes</span>
                <div ng-show="addressRatingState === 'ok'">
                    <span class="inline">Global : <span class="importantElem">{{addressRating}}/5</span></span>
                    <ul class="stars">
                        <li ng-repeat="star in addressStars">
                            <i class="{{star.type}}"></i>
                        </li>
                    </ul>
                </div>
                <div ng-show="priceRatingState === 'ok'">
                    <span class="inline">Prix : <span class="importantElem">{{priceRating}}/5</span></span>
                    <ul class="stars"><li ng-repeat="star in priceStars"><i class="{{star.type}}"></i></li></ul>
                </div>
                <div ng-show="addressNumberRatingState === 'ok'">
                    <span class="inline">Nombre de notes : <span class="importantElem">{{addressNumberRating}}</span></span>
                </div>
            </div>
            <div id="usersBlock" class="contentBlock" ng-show="userCommentsState === 'ok'">
                <span class="title">Avis des internautes</span>
                <ul id="userElem">
                    <li ng-repeat="userComment in userComments">
                        <span class="block userName">{{userComment.author}}</span>
                        <span class="block userComment">{{userComment.text}}</span>
                        <span class="block userRating">Note : <span class="importantElem">{{userComment.rating}}/5</span><ul class="stars"><li ng-repeat="star in userComment.starsComment"><i class="{{star.type}}"></i></li></ul></span>
                        <span class="block userDate">Le : {{userComment.date}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="modalFooter textRight">
            <div ng-hide="selectCatAddAddressMap === true">
                <button ng-show="btnAddAddressMap === true" class="btn btnPrimary" ng-click="selectCatAddAddressMap = true">Ajouter cette adresse</button>
                <button class="btn btnThree" ng-click="showModal = false; nameExist = false;">Fermer</button>
            </div>
            <div ng-show="selectCatAddAddressMap === true">
                <categories template-url="app/views/templates/map/categoriesTemplateModal.php"></categories>
                <button class="btn btnPrimary btnMidWidth" ng-click="addAddressMapModal(addThisPlace, mapSelectModal.categorie); nameExist = false;">Valider</button>
                <button class="btn btnDelete btnMidWidth" ng-click="selectCatAddAddressMap = false; nameExist = false;">Annuler</button>
                <span ng-show="nameExist === true" class="errorBlock errorBlockMargin">{{textErrorAddAddress}}</span>
            </div>
        </div>
    </div>
</div>