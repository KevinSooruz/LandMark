<div class="form-group noMargin">
    <span class="col-md-2 col-sm-2 control-label">Liste</span>
    <div class="col-md-10 col-sm-10">
        <select ng-show="lists.length > 0" class="form-control select" ng-model="listSelect" ng-options="list.name for list in lists" ng-click="selectList()">
            <option value="">Choisissez une liste</option>
        </select>
        <span class="noListForm" ng-show="lists.length === 0">Vous n&rsquo;avez actuellement enregistr&eacute; aucune liste</span>
        <input id="adList" type="hidden" value="{{listSelect.name}}">
    </div>
</div>