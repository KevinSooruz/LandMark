<div id="mapPage" class="page">
    <menu></menu>
    <div class="content">
        <div id="mapContent" class="inlineAll">
            <div id="overlay" ng-show="menuMap === true || showModal === true" ng-click="menuMap = false; showModal = false"></div>
            <div id="mapMenu" ng-class="{showMenuMap: menuMap === true}">
                <span class="title">
                    <span>Menu</span>
                    <div class="icons" ng-click="menuMap = false">
                        <i class="glyphicon glyphicon-menu-left"></i>
                        <i class="glyphicon glyphicon-menu-left"></i>
                    </div>
                </span>
                <div class="contentMenu">
                    <div class="innerContentMenuMap">
                        <div class="col-md-12">
                            <categories template-url="app/views/templates/map/categoriesTemplate.php"></categories>
                            <lists template-url="app/views/templates/map/listsTemplate.php"></lists>
                        </div>
                    </div>
                    <div class="innerContentMenuMap">
                        <div class="col-md-12">
                            <typeincity></typeincity>
                        </div>
                    </div>
                </div>
            </div>
            <div id="findPlace">
                <div id="menu" ng-click="menuMap = true"><i class="glyphicon glyphicon-menu-hamburger"></i></div>
                <form name="findAPlace" class="form-inline">
                    <input class="form-control select" placeholder="Indiquez un lieu" type="text" ng-pattern="wordAddress">
                    <button><i class="glyphicon glyphicon-search"></i></button>
                </form>
            </div>
            <div id="errorMap"></div>
            <div id="moreResult" class="down">
                <button class="btn btnThree btnMidWidth">Plus de r&eacute;sultats</button>
            </div>
            <map></map>
            <modal template-url="app/views/templates/map/modalInfosPlace.php"></modal>
        </div>
    </div>
</div>