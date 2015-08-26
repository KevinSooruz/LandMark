<form name="getList" id="listMap">
    <select class="form-control select" ng-model="mapSelect.list" name="listSelect" ng-options="list.name for list in lists" ng-selected="listSelect()">
        <option value="">Choisissez une liste</option>
    </select>
</form>