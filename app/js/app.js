var app=angular.module("app",["ngRoute","ngTouch","services"]),services=angular.module("services",[]);app.config(["$routeProvider",function($routeProvider){$routeProvider.when("/",{templateUrl:"app/views/home.php",controller:"HomeController"}).when("/addresses",{templateUrl:"app/views/adresses.php",controller:"AdressesController",resolve:{session:app.session}}).when("/addresses/lists/:nameList",{templateUrl:"app/views/lists.php",controller:"ListsController",resolve:{session:app.session}}).when("/addresses/categories",{templateUrl:"app/views/categories.php",controller:"CategoriesController",resolve:{session:app.session}}).otherwise({redirectTo:"/"})}]),app.filter("reverse",function(){return function(items){return items?items.slice().reverse():void 0}}),app.controller("AllController",function($scope,Log,$location){$scope.word=/^[\w*\àäâéèëêïîöôüûùç\s*\-!?%€#&()=+/*.,:]+$/,$scope.tel=/^[\d*\s*\-.]+$/,Log.storageInit(),$scope.logout=function(){Log.out()},$scope.redirect=function(locate){$location.path(locate)}}),app.controller("HomeController",function($scope,ChangeText){$scope.modalInscription=!1,$scope.showModalInscription=function(){$scope.modalInscription=!0},$scope.showModalConnection=function(){$scope.modalConnection=!0};var textArr=["vos collègues","vos amis","vos proches","tous ceux qui vous entourent"];$scope.textTitle="votre famille",ChangeText.run($scope,textArr,0)}),app.controller("AdressesController",function($scope,Autocomplete,Geocode,Address,User,Lists){Autocomplete.run(),$scope.adresse={},$scope.adresse.categorie="Autre",$scope.selectCategorie=function(index,categorie){$scope.categorieIndex=index,$scope.adresse.categorie=categorie},$scope.adList=function(listName){if($scope.adLists.listName.$error.pattern)$scope.errorPatternList=!0;else{if(void 0===listName||""===listName)return $scope.errorList=!0,void($scope.errorNameList=!0);Lists.post($scope,listName)}},$scope.selectList=function(index,listName){$scope.listIndex=index,$scope.adresse.list=listName},$scope.adresseAdd=function(){var location=document.getElementById("adLocation").value;return $scope.adresses.adName.$error.pattern||$scope.adresses.adLocation.$error.pattern?void($scope.errorPatternAddress=!0):void 0===$scope.adName||""===$scope.adName?void($scope.errorName=!0):void 0===location||""===location?void($scope.errorLocation=!0):($scope.adresse.location=location,$scope.adresse.name=$scope.adName,void Geocode.run(location).then(function(results){$scope.adresse.lat=results[0].geometry.location.G,$scope.adresse.lng=results[0].geometry.location.K},function(status){console.log("Error geocode : "+status)})["finally"](function(){Address.post($scope.adresse,$scope)}))}}),app.controller("ListsController",function($scope,$routeParams,$location,Address){Address.get().then(function(response){"noResult"===response?$location.path("/addresses"):listsSuccess()},function(data,status,config,headers){console.log(data,status,config,headers),$location.path("/addresses")});var listsSuccess=function(){$scope.nameList=$routeParams.nameList}}),app.controller("CategoriesController",function(){}),services.factory("Api",function($http){var api={};return api.post=function(url,data){return $http({method:"POST",url:url,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"},data:api.urlSerialize(data)}).success(function(response){return response}).error(function(data,status,headers,config){var response="error";return console.log(data,status,headers,config),response})},api.get=function(url,dataReq){var data;return data=dataReq?dataReq:{},$http({method:"GET",url:url,params:data}).success(function(response){return response}).error(function(data,status,headers,config){console.log(data,status,headers,config)})},api.urlSerialize=function(data){var obj=data,dataUrl="",max=Object.keys(obj).length,i=0;for(var prop in obj)obj.hasOwnProperty(prop)&&(i++,dataUrl+=max>i?prop+"="+obj[prop]+"&":prop+"="+obj[prop]);return dataUrl},api}),services.factory("Log",function(Api,$location){var log={};return log["in"]=function(url){$location.path(url)},log.out=function(){var data={logout:!0};Api.post("back/controls/logoutCtrl.php",data).then(function(response){"logout"===response.data&&(log.storageOut(),$location.path("/"))})},log.storageInit=function(){if(sessionStorage.getItem("Log")){var session=sessionStorage.getItem("Log");"1"===session&&sessionStorage.setItem("Log",1)}else sessionStorage.setItem("Log",0)},log.storageIn=function(){sessionStorage.setItem("Log",1)},log.storageOut=function(){sessionStorage.setItem("Log",0)},log}),app.session=function(Api,$location,Log){var session=sessionStorage.getItem("Log");"1"===session?Api.get("back/controls/sessionCtrl.php").then(function(response){"session"!==response.data&&(Log.storageOut(),$location.path("/"))}):$location.path("/")},services.factory("Modal",function(Api,Log,$timeout){var modal={};return modal.inputFocus=function(inputId){var label=document.getElementById("label"+inputId);label.classList.add("move")},modal.inputBlur=function(inputId){var input=document.getElementById(inputId),value=input.value,label=document.getElementById("label"+inputId);(""===value||void 0===value)&&label.classList.remove("move")},modal.change=function(scope){scope.modalInscription===!0?(scope.modalInscription=!1,scope.modalConnection=!0):(scope.modalConnection=!1,scope.modalInscription=!0)},modal.confirm=function(scope,data){void 0!==data&&(scope.errorModalBackEnd=!1,Api.post("back/controls/authUserCtrl.php",data).then(function(response){if("error"===response)scope.errorModalBackEnd=!0;else switch(response.data){case"userNotExist":scope.userNotExist=!0;break;case"wrongPasswordConnection":scope.wrongPasswordConnection=!0;break;case"wrongPassword":scope.wrongPasswordConnection=!0;break;case"userLogin":Log.storageIn(),Log["in"]("/addresses"),$timeout(function(){scope.modalConnection=!1},200);break;case"wrongSurnameInscription":scope.wrongSurnameInscription=!0;break;case"wrongNameInscription":scope.wrongNameInscription=!0;break;case"userExist":scope.userExist=!0;break;case"wrongMailInscription":scope.wrongMailInscription=!0,scope.inscription.uEmail.$error.email=!0;break;case"wrongPasswordInscription":scope.wrongPasswordInscription=!0;break;case"userAdded":Log.storageIn(),Log["in"]("/addresses"),$timeout(function(){scope.modalInscription=!1},200)}}))},modal}),services.factory("ChangeText",function($timeout){var changeText={};return changeText.run=function($scope,arr,i){var max=arr.length;$timeout(function(){$scope.textTitle=arr[i],i++,max>i&&changeText.run($scope,arr,i)},1e3)},changeText}),services.factory("Autocomplete",function(){return autocomplete={},autocomplete.run=function(){var adLocation=document.getElementById("adLocation");new google.maps.places.Autocomplete(adLocation)},autocomplete}),services.factory("Geocode",function($q){var geocode={};return geocode.run=function(location){var deferred=$q.defer(),geocoder=new google.maps.Geocoder;return geocoder.geocode({address:location},function(results,status){return status===google.maps.GeocoderStatus.OK?deferred.resolve(results):deferred.reject(status)}),deferred.promise},geocode}),services.factory("User",function(Api,$q){var user={};return user.informations=function(scope){var data={user:"informations"};Api.get("back/controls/userCtrl.php",data).then(function(response){console.log(response.data)},function(data,status,config,headers){console.log(data,status,config,headers)})},user}),services.factory("Address",function(Api,$timeout,$q,$routeParams){var address={};return address.get=function(){var deferred=$q.defer(),data={};return $routeParams&&(data=$routeParams),data.user="addresses",Api.get("back/controls/addressesCtrl.php",data).then(function(response){return deferred.resolve(response.data)},function(data,status,config,headers){return deferred.reject(data,status,config,headers)}),deferred.promise},address.post=function(data,scope){Api.post("back/controls/addressesCtrl.php",data).then(function(response){switch(response.data){case"emptyName":scope.errorName=!0;break;case"emptyLocation":scope.errorLocation=!0;break;case"successAddAddress":scope.addresses.push({name:data.name,location:data.location,categorie:data.categorie});var adName=document.getElementById("adName"),adLocation=document.getElementById("adLocation");scope.categorieIndex="",scope.listIndex="",scope.adName="",scope.adLocation="",$timeout(function(){adName.classList.remove("ng-invalid"),adLocation.classList.remove("ng-invalid")}),scope.adresse={},scope.adresse.categorie="Autre"}},function(data,status,config,headers){console.log(data,status,config,headers)})},address}),services.factory("Categorie",function(Api){var categorie={};return categorie.get=function(scope){var dataCategorie={categorie:!0};Api.get("back/controls/categorieCtrl.php",dataCategorie).then(function(response){"categorieProblem"===response.data?scope.errorCategorieBackEnd=!0:scope.categories=response.data},function(data,status,headers,config){console.log(data,status,headers,config),scope.errorCategorieBackEnd=!0})},categorie}),services.factory("Lists",function(Api,$timeout,$q){var lists={};return lists.get=function(scope){var deferred=$q.defer(),data={};return data.user="lists",Api.get("back/controls/listsCtrl.php",data).then(function(response){return deferred.resolve(response.data)},function(data,status,config,headers){return deferred.reject(data,status,config,headers)}),deferred.promise},lists.post=function(scope,listName){var data={name:listName};Api.post("back/controls/listsCtrl.php",data).then(function(response){switch(response.data){case"emptyName":scope.errorList=!0,scope.errorNameList=!0;break;case"successAddList":var listName=document.getElementById("listName");scope.lists.push({name:data.name}),scope.listName="",$timeout(function(){listName.classList.remove("ng-invalid")})}},function(data,status,config,headers){console.log(data,status,config,headers)})},lists}),app.directive("inscription",function(Modal){var inscription={restrict:"E",replace:!0,templateUrl:"app/views/templates/inscriptionModal.php",link:function(scope){scope.focusInputModal=function(inputId){Modal.inputFocus(inputId)},scope.blurInputModal=function(inputId){Modal.inputBlur(inputId)},scope.hideModalInscription=function(){scope.modalInscription=!1},scope.changeModal=function(){Modal.change(scope)},scope.confirmInscription=function(user){var uSurname=document.getElementById("uSurname").value,uName=document.getElementById("uName").value,uEmail=document.getElementById("uEmail").value,uPassword=document.getElementById("uPassword").value;if(scope.inscription.uSurname.$error.minlength||scope.inscription.uSurname.$error.maxlength||scope.inscription.uSurname.$error.pattern)return void(scope.wrongSurnameInscription=!0);if(scope.inscription.uName.$error.minlength||scope.inscription.uName.$error.maxlength||scope.inscription.uName.$error.pattern)return void(scope.wrongNameInscription=!0);if(scope.inscription.uEmail.$error.email)return void(scope.wrongMailInscription=!0);if(scope.inscription.uPassword.$error.minlength||scope.inscription.uPassword.$error.maxlength)return void(scope.wrongPasswordInscription=!0);if(""!==uSurname&&void 0!==uSurname&&""!==uName&&void 0!==uName&&""!==uEmail&&void 0!==uEmail&&""!==uPassword&&void 0!==uPassword){this.user.inscription="login";var data=angular.copy(user);Modal.confirm(scope,data)}}}};return inscription}),app.directive("connection",function(Modal){var connection={restrict:"E",replace:!0,templateUrl:"app/views/templates/connectionModal.php",link:function(scope){scope.focusInputModal=function(inputId){Modal.inputFocus(inputId)},scope.blurInputModal=function(inputId){Modal.inputBlur(inputId)},scope.hideModalConnection=function(){scope.modalConnection=!1},scope.changeModal=function(){Modal.change(scope)},scope.confirmConnection=function(userCo){var uEmailCo=document.getElementById("uEmailCo").value,uPasswordCo=document.getElementById("uPasswordCo").value;if(scope.connection.uEmailCo.$error.email)return void(scope.wrongMailConnection=!0);if(scope.connection.uPasswordCo.$error.minlength||scope.connection.uPasswordCo.$error.maxlength)return void(scope.wrongPasswordConnection=!0);if(""!==uEmailCo&&void 0!==uEmailCo&&""!==uPasswordCo&&void 0!==uPasswordCo){this.userCo.connection="login";var data=angular.copy(userCo);Modal.confirm(scope,data)}}}};return connection}),app.directive("menu",function(){return{replace:!0,restrict:"E",templateUrl:"app/views/templates/menu.php",link:function(scope){scope.menu=[{icon:"glyphicon-th-list",title:"Adresses",locate:"/addresses"},{icon:"glyphicon-map-marker",title:"Carte"},{icon:"glyphicon-user",title:"Amis"},{icon:"glyphicon-cog",title:"Paramètres"}],scope.indexMenu=0,scope.activeMenu=function(index){scope.indexMenu=index}}}}),app.directive("addresses",function(Address){var addressesTemplate={restrict:"E",replace:!0,templateUrl:function(attrs,elem){return elem.templateUrl},link:function(scope){Address.get().then(function(response){"errorLoadAddresses"===response?scope.errorLoadAddresses=!0:scope.addresses=response},function(){console.log(data,status,config,headers),scope.errorLoadAddresses=!0})}};return addressesTemplate}),app.directive("lists",function(Lists){var listsTemplate={restrict:"E",replace:!0,templateUrl:function(attrs,elem){return elem.templateUrl},link:function(scope){Lists.get().then(function(response){"errorLoadLists"===response?scope.errorLoadLists=!0:scope.lists=response},function(data,status,config,headers){console.log(data,status,config,headers),scope.errorLoadLists=!0})}};return listsTemplate}),app.directive("categories",function(Categorie){var categoriesTemplate={restrict:"E",replace:!0,templateUrl:function(attrs,elem){return elem.templateUrl},link:function(scope){Categorie.get(scope)}};return categoriesTemplate});