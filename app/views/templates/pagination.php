<ul id="pagesView" class="center">
    <li ng-repeat="page in pagination" ng-class="{active: indexPagination === $index}" ng-click="changePage(page.start, page.end, $index)">{{page.number}}</li>
</ul>