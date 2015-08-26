<form name="findTypeInCity" id="findTypeInCity">
    <input id="typeSelectCity" class="form-control select" name="typeSelectCity" ng-model="typeSelect.city" type="text" placeholder="Indiquez une ville">
    <select class="form-control select" ng-model="typeSelect.type" name="typeSelectType" ng-options="typeElem.name for typeElem in typesElem | orderBy: predicate">
        <option value="">Choisissez un type de lieu</option>
    </select>
    <input type="hidden" name="typeSelectId" ng-model="typeSelect.id" value="">
    <div class="form-group center">
        <button class="btn btnPrimary btnMidWidth" ng-click="findTypeForCity()">Chercher</button>
    </div>
</form>