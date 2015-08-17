<div class="inBox other">
    <span class="title">Ajouter dans une liste <correct template-correct="correctChangeList"></correct></span>
    <div class="inBoxContent">
        <div class="multiContent" ng-hide="lists.length === 0; errorBackEnd === true">
            <select ng-show="lists.length > 0" class="form-control select" ng-model="listChange" ng-options="list.name for list in lists" ng-click="errorAddInList = false">
                <option value="">Choisissez une liste</option>
            </select>
            <input id="changeList" type="hidden" value="{{listChange.name}}">
            <span ng-show="errorAddInList === true" class="errorBlock errorBlockMargin">{{textErrorAddInList}}</span>
        </div>
        <div class="multiContent textRight" ng-hide="lists.length === 0; errorBackEnd === true">
            <button class="btn btnPrimary btnMidWidth" ng-click="addInList()">Ajouter</button>
        </div>
        <span class="noListForm" ng-show="lists.length === 0">Vous n&rsquo;avez actuellement enregistr&eacute; aucune liste</span>
        <span ng-show="errorBackEnd === true" class="errorBlock errorBlockMargin">Une erreur s&rsquo;est produite. Merci de recharger la page.</span>
    </div>
</div>