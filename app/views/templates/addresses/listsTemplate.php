<div id="listsSelect" class="inBox">
    <span class="title">Listes <span class="toolTip">{{lists.length}} liste<span ng-show="lists.length > 1">s</span></span></span>
    <div class="inBoxContent">
        <form class="form-horizontal">
            <div class="multiContent">
                <div class="form-group">
                    <span class="col-md-2 col-sm-2 control-label">Liste</span>
                    <div class="col-md-10 col-sm-10">
                        <select ng-show="lists.length > 0" class="form-control select" ng-model="listChoice" ng-options="list.name for list in lists">
                            <option value="">Choisissez une liste</option>
                        </select>
                        <span class="noListForm" ng-show="lists.length === 0">Vous n&rsquo;avez actuellement enregistr&eacute; aucune liste</span>
                    </div>
                </div>
            </div>
            <div class="multiContent center">
                <button class="btn btnPrimary btnBigWidth" ng-click="redirect('/addresses/lists/' + listChoice.name)">Voir {{listChoice.name}}</button>
            </div>
        </form>
        <span ng-show="errorBackEnd === true" class="errorBlock errorBlockMargin">Une erreur s&rsquo;est produite. Merci de recharger la page.</span>
    </div>
</div>