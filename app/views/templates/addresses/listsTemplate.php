<div class="multiContent">
    <ul class="row">
        <li class="col-md-6" ng-repeat="list in lists" ng-click="redirect('/addresses/lists/{{list.name}}')">
            <span class="title col-md-6">{{list.name}}</span>
            <div class="icons col-md-6">
                <i class="glyphicon glyphicon-menu-right"></i>
            </div>
        </li>
    </ul>
    <p ng-show="lists.length === 0">Vous n&rsquo;avez actuellement enregistr&eacute; aucune liste</p>
    <span ng-show="errorLoadLists === true" class="errorBlock">Une erreur s&rsquo;est produite. Merci de recharger la page.</span>
</div>