<form name="getCategorie">
    <select class="form-control select" ng-model="mapSelect.categorie" name="categorieSelect" ng-options="categorie.name for categorie in categories" ng-selected="categorieSelect()">
        <option value="">Choisissez une cat&eacute;gorie</option>
    </select>
</form>