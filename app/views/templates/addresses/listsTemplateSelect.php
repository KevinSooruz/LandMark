<div class="multiContent">
    <span class="title">Liste</span>
    <select ng-show="lists.length > 0" class="form-control select" ng-model="listSelect" ng-options="list.name for list in lists" ng-click="selectList()">
        <option value="">Choisissez votre liste</option>
    </select>
    <input id="adList" type="hidden" value="{{listSelect.name}}">
    <p ng-show="lists.length === 0">Vous n&rsquo;avez actuellement enregistr&eacute; aucune liste</p>
    <span ng-show="errorLoadLists === true" class="errorBlock">Une erreur s&rsquo;est produite. Merci de recharger la page.</span>
</div>