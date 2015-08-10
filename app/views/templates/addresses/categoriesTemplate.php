<div class="multiContent">
    <span class="title">Cat&eacute;gorie</span>
    <select class="form-control select" ng-model="categorieSelect" ng-options="categorie.name for categorie in categories" ng-click="selectCategorie()">
        <option value="">Choisissez votre cat&eacute;gorie</option>
    </select>
    <input id="adCategorie" type="hidden" value="{{categorieSelect.name}}">
    <span ng-show="errorCategorieBackEnd === true" class="errorBlock">Une erreur s&rsquo;est produite. Merci de recharger la page.</span>
</div>