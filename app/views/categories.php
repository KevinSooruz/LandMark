<div id="categoriesPage" class="page">
    <menu></menu>
    <div class="content">
        <div id="categories" class="inlineAll">
            <div class="headApp">
                <span class="title">Adresses</span>
                <categories template-url="app/views/templates/categories/categoriesTemplate.php"></categories>
            </div>
            <form name="searchFull" class="searchFull" ng-show="addresses.length >= 1">
                <input class="form-control" placeholder="Rechercher une adresse..." ng-model="addressSearch" ng-keyup="removePagination(); numberResult()">
            </form>
            <addresses template-url="app/views/templates/categories/addressesTemplate.php"></addresses>
        </div>
    </div>
</div>