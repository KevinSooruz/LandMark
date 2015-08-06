<div class="multiContent">
    <span class="title">Cat&eacute;gorie</span>
    <ul class="row">
        <li class="col-md-3" ng-repeat="categorie in categories">
            <span class="selectObject" ng-class="{active: categorieIndex === $index}" ng-click="selectCategorie($index, categorie.name)">{{categorie.name}}</span>
        </li>
    </ul>
    <span ng-show="errorCategorieBackEnd === true" class="errorBlock">Une erreur s&rsquo;est produite. Merci de recharger la page.</span>
</div>