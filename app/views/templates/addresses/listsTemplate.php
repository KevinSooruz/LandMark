<div id="listsSelect" class="inBox other">
    <span class="title">Vos listes <span class="toolTip">{{lists.length}} liste<span ng-show="lists.length > 1">s</span></span></span>
    <div class="inBoxContent">
        <div class="multiContent">
             <form name="adLists" class="form-horizontal">
                <div class="form-group">
                    <label for="listName" class="col-md-2 col-sm-2 control-label">Nom</label>
                    <div class="col-md-7 col-sm-7">
                        <input id="listName" name="listName" placeholder="Indiquez un nom" type="text" class="form-control" ng-model="listName" ng-class="{errorBackEnd: errorList === true}" ng-click="errorList = false; errorNameList = false; errorPatternList = false" ng-minlength="3" ng-maxlength="50" ng-pattern="word" required="">
                        <div class="errorInfos">
                            <span ng-show="adLists.listName.$error.required">Obligatoire</span>
                            <span ng-show="adLists.listName.$error.minlength">3 car. min</span>
                            <span ng-show="adLists.listName.$error.maxlength">50 car. max</span>
                            <span ng-show="adLists.listName.$error.pattern">Caract&egrave;re interdit</span>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-3 textRight">
                        <button class="btn btnPrimary" ng-click="adList(listName)">Ajouter</button>
                    </div>
                </div>
                <div class="form-group">
                    <span ng-show="errorNameList === true" class="errorBlock">Merci de renseigner un nom.</span>
                    <span ng-show="errorPatternList === true" class="errorBlock">Caract&egrave;res sp&eacute;ciaux interdits.</span>
                </div>
            </form>
        </div>
        <div class="multiContent">
            <ul class="row listSelect">
                <li class="col-md-6" ng-repeat="list in lists" ng-click="redirect('/addresses/lists/{{list.name}}')">
                    <span class="title col-md-6">{{list.name}}</span>
                    <div class="icons col-md-6">
                        <i class="glyphicon glyphicon-menu-right"></i>
                    </div>
                </li>
            </ul>
            <p ng-show="lists.length === 0">Vous n&rsquo;avez actuellement enregistr&eacute; aucune liste</p>
            <span ng-show="errorLoadLists === true" class="errorBlock">Une erreur s&rsquo;est produite. Merci de recharger la page.</span>
        </div>
    </div>
</div>