<div id="modalMap" ng-class="{in: showModal === true}">
    <div class="modalMapBody" ng-class="{showModal: showModal === true}">
        <div class="modalBlockTitle">
            <span id="modalMapTitle"></span>
            <i class="glyphicon glyphicon-remove" ng-click="showModal = false"></i>
        </div>
        <div class="modalContent">
            <div>
                <span class="title">Adresse</span>
                <span id="addressAddress" class="block"></span>
            </div>
            <div id="phoneBlock" class="contentBlock">
                <span class="title">Contact</span>
                <span id="addressPhone" class="block"></span>
                <span id="addressInternationalPhone" class="block"></span>
            </div>
            <div id="openingBlock" class="contentBlock">
                <span class="title">Horaires</span>
                <ul id="addressOpening"></ul>
            </div>
            <div id="ratingBlock" class="contentBlock">
                <span class="title">Notes</span>
                <div>
                    <span id="addressRating" class="inline"></span>
                    <span id="addressStars" class="inline"></span>
                </div>
                <div>
                    <span id="priceRating" class="inline"></span>
                    <span id="priceStars" class="inline"></span>
                </div>
                <div>
                    <span id="addressNumberRating" class="inline"></span>
                </div>
            </div>
            <div id="usersBlock" class="contentBlock">
                <span class="title">Avis des internautes</span>
                <ul id="userElem"></ul>
            </div>
        </div>
    </div>
</div>