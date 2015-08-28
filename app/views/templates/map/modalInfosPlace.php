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
            <div class="contentBlock phoneBlock">
                <span class="title">Contact</span>
                <span id="addressPhone" class="block"></span>
                <span id="addressInternationalPhone" class="block"></span>
            </div>
            <div class="contentBlock openingBlock">
                <span class="title">Horaires</span>
                <ul id="addressOpening"></ul>
            </div>
            <div class="contentBlock priceBlock">
                <span class="title">Prix</span>
                <span id="priceRating" class="inline"></span>
                <span id="priceStars" class="inline"></span>
            </div>
            <div class="contentBlock ratingBlock">
                <span class="title">Avis</span>
                <span id="addressRating" class="inline"></span>
                <span id="addressStars" class="inline"></span>
                <span id="addressNumberRating" class="inline"></span>
            </div>
        </div>
    </div>
</div>