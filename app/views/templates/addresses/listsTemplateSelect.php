<div class="multiContent">
    <span class="title">Liste</span>
    <ul class="row">
        <li class="col-md-3" ng-repeat="list in lists">
            <span class="selectObject" ng-class="{active: listIndex === $index}" ng-click="selectList($index, list.name)">{{list.name}}</span>
        </li>
    </ul>
    <p ng-show="lists.length === 0">Vous n&rsquo;avez actuellement enregistr&eacute; aucune liste</p>
    <span ng-show="errorLoadLists === true" class="errorBlock">Une erreur s&rsquo;est produite. Merci de recharger la page.</span>
</div>