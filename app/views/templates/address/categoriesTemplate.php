<div class="form-group noMargin">
    <span class="col-md-2 col-sm-2 control-label">Cat&eacute;gorie</span>
    <div class="col-md-10 col-sm-10">
        <select class="form-control select" ng-model="categorieChange" ng-options="categorie.name for categorie in categories" ng-click="selectCategorie()">
            <option value="">Choisissez une cat&eacute;gorie</option>
        </select>
    </div>
    <input id="changeCategorie" type="hidden" value="{{categorieChange.name}}">
</div>
        