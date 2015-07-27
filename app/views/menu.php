<div id="menuApp">
    <div id="logo"></div>
    <ul>
        <li ng-repeat="link in menu">
            <i class="glyphicon {{link.icon}}"></i> {{link.title}}
        </li>
    </ul>
</div>