<div id="menuApp">
    <div id="headMenu">Localize</div>
    <div id="logo"></div>
    <ul>
        <li ng-repeat="link in menu" ng-class="{active: indexMenu === $index}" ng-click="activeMenu($index); redirect(link.locate)">
            <i class="glyphicon {{link.icon}}"></i> {{link.title}}
        </li>
        <button class="btn btnPrimary btnHoverGrey" ng-click="logout()">Deconnexion</button>
    </ul>
</div>