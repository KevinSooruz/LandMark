<div>
    <ul class="otherHeadElem">
        <li ng-repeat="list in lists" ng-click="redirect('/addresses/lists/{{list.name}}')" ng-class="{active: list.name === nameList}">{{list.name}}</li>
    </ul>
    <span ng-show="errorLoadLists === true" class="errorBlock">Une erreur s&rsquo;est produite. Merci de recharger la page.</span>
</div>