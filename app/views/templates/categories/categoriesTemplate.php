<div>
    <ul class="otherHeadElem">
        <li ng-click="redirect('/addresses/categories/All')" ng-class="{active: categorie.name === nameCategorie}">All</li>
        <li ng-repeat="categorie in categories" ng-click="redirect('/addresses/categories/{{categorie.name}}')" ng-class="{active: categorie.name === nameCategorie}">{{categorie.name}}</li>
    </ul>
    <span ng-show="errorCategorieBackEnd === true" class="errorBlock">Une erreur s&rsquo;est produite. Merci de recharger la page.</span>
</div>