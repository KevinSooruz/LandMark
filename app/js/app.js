var app=angular.module("app",["ngRoute","ngTouch","services"]),services=angular.module("services",[]);app.config(["$routeProvider",function($routeProvider){$routeProvider.when("/",{templateUrl:"app/views/home.php",controller:"HomeController"}).when("/addresses",{templateUrl:"app/views/adresses.php",controller:"AddressesController",resolve:{session:app.session}}).when("/addresses/lists/:nameList",{templateUrl:"app/views/lists.php",controller:"ListsController",resolve:{session:app.session}}).when("/addresses/categories/All",{templateUrl:"app/views/categories.php",controller:"CategoriesController",resolve:{session:app.session}}).when("/addresses/categories/:nameCategorie",{templateUrl:"app/views/categories.php",controller:"CategoriesController",resolve:{session:app.session}}).when("/addresses/categories/:nameCategorie/:nameAddress",{templateUrl:"app/views/address.php",controller:"AddressController",resolve:{session:app.session}}).otherwise({redirectTo:"/"})}]),app.filter("reverse",function(){return function(items){return items?items.slice().reverse():void 0}}),app.controller("AllController",function($scope,Log,$location,$rootScope){$scope.word=/^[\w*\àäâéèëêïîöôüûùç\s*\-_.€#=+/:]+$/,$scope.wordAddress=/^[\w*\àäâéèëêïîöôüûùç\s*\-_!?%€#&()=+/*.,':]+$/,$scope.tel=/^[0-9\s*\-.+()]+$/,$scope.mail=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,6}$/,$rootScope.user={},Log.storageInit(),$scope.logout=function(){Log.out()},$scope.redirect=function(locate){$location.path(locate)},$scope.relocate=function(elem,url){var elemValue=document.getElementById(elem).value;""!==elemValue&&$location.path(url+elemValue)}}),app.controller("HomeController",function($scope,ChangeText){$scope.modalInscription=!1,$scope.showModalInscription=function(){$scope.modalInscription=!0},$scope.showModalConnection=function(){$scope.modalConnection=!0};var textArr=["vos collègues","vos amis","vos proches","tous ceux qui vous entourent"];$scope.textTitle="votre famille",ChangeText.run($scope,textArr,0)}),app.controller("AddressesController",function($scope,Autocomplete,Geocode,Address,User,Lists){User.get(),$scope.selectCategorie=function(){$scope.errorGeocode=!1},$scope.adList=function(listName){if($scope.adLists.listName.$error.pattern)$scope.errorPatternList=!0;else{if(void 0===listName||""===listName)return $scope.errorList=!0,void($scope.errorNameList=!0);Lists.post($scope,listName)}},$scope.selectList=function(){$scope.errorGeocode=!1},Autocomplete.run($scope),$scope.updateInformations=function(){Autocomplete.updateInformations($scope)},$scope.adresseAdd=function(){var data=angular.copy($scope.addAddress);return void Address.post(data,$scope)}}),app.controller("ListsController",function($scope,$routeParams){$scope.nameList=$routeParams.nameList}),app.controller("CategoriesController",function($scope,$routeParams){$scope.nameCategorie=$routeParams.nameCategorie}),app.controller("AddressController",function($scope,$routeParams,Address,$q){$scope.nameCategorie=$routeParams.nameCategorie,$scope.addInList=function(dataList){var data=angular.copy(dataList);Address.addList($scope,data)},$scope.updateAddress=function(dataUpAddress){var data=angular.copy(dataUpAddress);Address.update($scope,data)},$scope.deleteAddress=function(){Address["delete"]($scope)}}),services.factory("Api",function($http){var api={};return api.post=function(url,data){return $http({method:"POST",url:url,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=utf-8;"},data:api.urlSerialize(data)}).success(function(response){return response}).error(function(data,status,headers,config){var response="error";return console.log(data,status,headers,config),response})},api.get=function(url,dataReq){var data;return data=dataReq?dataReq:{},$http({method:"GET",url:url,params:data}).success(function(response){return response}).error(function(data,status,headers,config){console.log(data,status,headers,config)})},api.urlSerialize=function(data){var obj=data,dataUrl="",max=Object.keys(obj).length,i=0;for(var prop in obj)obj.hasOwnProperty(prop)&&(i++,dataUrl+=max>i?prop+"="+obj[prop]+"&":prop+"="+obj[prop]);return dataUrl},api}),services.factory("Log",function(Api,$location,$rootScope){var log={};return log["in"]=function(url){$location.path(url)},log.out=function(){var data={logout:!0};Api.post("back/controls/logoutCtrl.php",data).then(function(response){"logout"===response.data&&($rootScope.user={},log.storageOut(),$location.path("/"))})},log.storageInit=function(){if(sessionStorage.getItem("Log")){var session=sessionStorage.getItem("Log");"1"===session&&sessionStorage.setItem("Log",1)}else sessionStorage.setItem("Log",0)},log.storageIn=function(){sessionStorage.setItem("Log",1)},log.storageOut=function(){sessionStorage.setItem("Log",0)},log}),app.session=function(Api,$location,Log,$rootScope){var session=sessionStorage.getItem("Log");"1"===session?Api.get("back/controls/sessionCtrl.php").then(function(response){"session"!==response.data&&(Log.storageOut(),$location.path("/"))}):$location.path("/")},services.factory("Modal",function(Api,Log,$timeout){var modal={};return modal.inputFocus=function(inputId){var label=document.getElementById("label"+inputId);label.classList.add("move")},modal.inputBlur=function(inputId){var input=document.getElementById(inputId),value=input.value,label=document.getElementById("label"+inputId);(""===value||void 0===value)&&label.classList.remove("move")},modal.change=function(scope){scope.modalInscription===!0?(scope.modalInscription=!1,scope.modalConnection=!0):(scope.modalConnection=!1,scope.modalInscription=!0)},modal.confirm=function(scope,data){void 0!==data&&(scope.errorModalBackEnd=!1,Api.post("back/controls/authUserCtrl.php",data).then(function(response){if("error"===response)scope.errorModalBackEnd=!0;else switch(response.data){case"wrongMailConnection":scope.wrongMailConnection=!0,scope.connection.uEmailCo.$error.pattern=!0;break;case"userNotExist":scope.userNotExist=!0;break;case"wrongPasswordConnection":scope.wrongPasswordConnection=!0;break;case"wrongPassword":scope.wrongPasswordConnection=!0;break;case"userLogin":Log.storageIn(),Log["in"]("/addresses"),$timeout(function(){scope.modalConnection=!1},200);break;case"wrongSurnameInscription":scope.wrongSurnameInscription=!0;break;case"wrongNameInscription":scope.wrongNameInscription=!0;break;case"userExist":scope.userExist=!0;break;case"wrongMailInscription":scope.wrongMailInscription=!0,scope.inscription.uEmail.$error.pattern=!0;break;case"wrongPasswordInscription":scope.wrongPasswordInscription=!0;break;case"userAdded":Log.storageIn(),Log["in"]("/addresses"),$timeout(function(){scope.modalInscription=!1},200)}}))},modal}),services.factory("ChangeText",function($timeout){var changeText={};return changeText.run=function($scope,arr,i){var max=arr.length;$timeout(function(){$scope.textTitle=arr[i],i++,max>i&&changeText.run($scope,arr,i)},1e3)},changeText}),services.factory("Autocomplete",function($timeout,$q){return autocomplete={},autocomplete.run=function(scope){var adLocation=document.getElementById("adLocation"),search=new google.maps.places.Autocomplete(adLocation);search.addListener("place_changed",function(){var place=search.getPlace();autocomplete.result(scope,place)})},autocomplete.result=function(scope,place){place&&$timeout(function(){place.formatted_address&&(scope.addAddress.location=place.formatted_address),place.formatted_phone_number?scope.addAddress.phone=place.formatted_phone_number:scope.addAddress.phone="",place.opening_hours?scope.addAddress.opening=place.opening_hours.weekday_text:scope.addAddress.opening=""})},autocomplete.updateInformations=function(scope){scope.addAddress.phone="",scope.addAddress.opening=""},autocomplete}),services.factory("Geocode",function($q){var geocode={};return geocode.getId=function(location){var deferred=$q.defer(),geocoder=new google.maps.Geocoder;return geocoder.geocode({address:location},function(results,status){return status===google.maps.GeocoderStatus.OK?deferred.resolve(results):deferred.reject(status)}),deferred.promise},geocode}),services.factory("User",function(Api,$rootScope){var user={};return user.get=function(){user.informations()},user.informations=function(){var data={user:"informations"};Api.get("back/controls/userCtrl.php",data).then(function(response){$rootScope.userSurname=response.data[0].surname,$rootScope.userName=response.data[0].name,$rootScope.user.surname=response.data[0].surname,$rootScope.user.name=response.data[0].name,$rootScope.user.email=response.data[0].email},function(data,status,config,headers){console.log(data,status,config,headers)})},user}),services.factory("Address",function(Api,$timeout,$q,$routeParams,Correct,$location){var address={};return address.get=function(){var deferred=$q.defer(),data={};return $routeParams&&(data=$routeParams),data.user="addresses",Api.get("back/controls/addressesCtrl.php",data).then(function(response){return deferred.resolve(response.data)},function(data,status,config,headers){return deferred.reject(data,status,config,headers)}),deferred.promise},address.post=function(data,scope){return scope.errorGeocode=!1,scope.adresses.adName.$error.required?(scope.errorAddRequiredAddress=!0,void(scope.textErrorAddAddress="Merci de reseigner un nom.")):scope.adresses.adLocation.$error.required?(scope.errorAddRequiredLocation=!0,void(scope.textErrorAddAddress="Merci de reseigner une adresse.")):scope.adresses.adName.$error.minlength||scope.adresses.adName.$error.maxlength?(scope.errorAddLengthAddress=!0,void(scope.textErrorAddAddress="Nombre de caractères interdit.")):scope.adresses.adName.$error.pattern?(scope.errorAddAddressPattern=!0,void(scope.textErrorAddAddress="Caractères spéciaux interdits.")):scope.adresses.adLocation.$error.pattern?(scope.errorAddLocationPattern=!0,void(scope.textErrorAddAddress="Caractères spéciaux interdits.")):scope.adresses.adPhone.$error.minlength||scope.adresses.adPhone.$error.maxlength?(scope.errorAddLengthPhone=!0,void(scope.textErrorAddAddress="Nombre de caractères interdit.")):scope.adresses.adPhone.$error.pattern?(scope.errorAddPhonePattern=!0,void(scope.textErrorAddAddress="Merci de ne renseigner que des chiffres.")):void console.log(data)},address.addList=function(scope,dataList){var addressName=document.getElementById("addressName").value,data={};if(data.addressName=addressName,!dataList)return scope.errorAddInList=!0,void(scope.textErrorAddInList="Merci de sélectionner une liste.");if(dataList.list)data.listName=dataList.list.name;else if(!dataList.list||void 0===data.listName)return scope.errorAddInList=!0,void(scope.textErrorAddInList="Merci de sélectionner une liste.");Api.post("back/controls/addressListCtrl.php",data).then(function(response){switch(scope.errorAddressInList=!1,scope.errorAddInList=!1,response.data){case"addressDoesntExist":scope.errorAddressInList=!0;break;case"emptyListName":scope.errorAddInList=!0,scope.textErrorAddInList="Merci de sélectionner une liste.";break;case"listDoesntExist":scope.errorAddInList=!0,scope.textErrorAddInList="Cette liste n'existe pas.";break;case"addressAlreadyExistInList":scope.errorAddInList=!0,scope.textErrorAddInList="Cette adresse existe déjà dans cette liste.";break;case"successAddList":Correct.run(scope,"correctChangeList"),scope.dataList.list="",scope.errorAddInList=!1}},function(headers,data,status,config){console.log(headers,data,status,config),scope.errorAddInList=!0,scope.textErrorAddInList="Une erreur s'est produite, merci de recharger la page."})},address.update=function(scope,dataUpAddress){if(void 0!==dataUpAddress){if(scope.addressModification.changeName.$error.minlength||scope.addressModification.changeName.$error.maxlength)return scope.errorChangeLengthAddress=!0,void(scope.textErrorChangeAddress="Nombre de caractères interdit.");if(scope.addressModification.changeName.$error.pattern)return scope.errorChangeAddress=!0,void(scope.textErrorChangeAddress="Caractères spéciaux interdits.");if(scope.addressModification.changePhone.$error.minlength||scope.addressModification.changePhone.$error.maxlength)return scope.errorChangeLengthPhone=!0,void(scope.textErrorChangeAddress="Nombre de caractères interdit.");if(scope.addressModification.changePhone.$error.pattern)return scope.errorChangePhone=!0,void(scope.textErrorChangeAddress="Merci de ne renseigner que des chiffres.");void 0===dataUpAddress.phone&&(dataUpAddress.phone=""),void 0===dataUpAddress.newname&&(dataUpAddress.newname=""),dataUpAddress.newcategorie?dataUpAddress.newcategorie=dataUpAddress.newcategorie.name:dataUpAddress.newcategorie="",dataUpAddress.name=scope.addresses[0].name,dataUpAddress.categorie=scope.addresses[0].categorie,Api.post("back/controls/addressesCtrl.php",dataUpAddress).then(function(response){switch(response.data){case"errorCharNewName":scope.errorChangeLengthAddress=!0,scope.textErrorChangeAddress="Nombre de caractères interdit.";break;case"errorCharNewPhone":scope.errorChangeLengthPhone=!0,scope.textErrorChangeAddress="Nombre de caractères interdit.";break;case"categorieDoesntExist":errorDoesntExist("La catégorie");break;case"addressDosentExist":errorDoesntExist("L'adresse");break;case"addressAlreadyExist":scope.errorChangeAddress=!0,scope.textErrorChangeAddress="Ce nom d'adresse existe déjà. Merci de le modifier.";break;case"succesChangeAddress":success(),scope.addresses[0].phone=dataUpAddress.phone;break;case"succesChangeAddressName":success(),$location.path("/addresses/categories/"+dataUpAddress.categorie+"/"+dataUpAddress.newname);break;case"succesChangeAddressCategorie":success(),$location.path("/addresses/categories/"+dataUpAddress.newcategorie+"/"+dataUpAddress.name);break;case"succesChangeAddressNameCategorie":success(),$location.path("/addresses/categories/"+dataUpAddress.newcategorie+"/"+dataUpAddress.newname)}},function(headers,data,status,config){console.log(headers,data,status,config),scope.errorChangeAddress=!0,scope.textErrorChangeAddress="Une erreur s'est produite, merci de recharger la page."});var errorDoesntExist=function(elem){scope.errorBackEndAddress=!0,scope.textErrorChangeAddress=elem+" d'origine n'existe pas."},success=function(){Correct.run(scope,"correctChangeAddress"),scope.dataUpAddress.newname="",scope.dataUpAddress.phone="",scope.dataUpAddress.newcategorie=""}}},address["delete"]=function(scope){var data={"delete":!0,name:scope.addresses[0].name,categorie:scope.addresses[0].categorie};Api.post("back/controls/addressesCtrl.php",data).then(function(response){"successDelete"===response.data&&$location.path("/addresses/categories/"+data.categorie)},function(headers,data,status,config){console.log(headers,data,status,config)})},address}),services.factory("Categorie",function(Api){var categorie={};return categorie.get=function(scope){var data={};data.categorie=!0,Api.get("back/controls/categorieCtrl.php",data).then(function(response){"categorieProblem"===response.data?scope.errorBackEnd=!0:scope.categories=response.data},function(data,status,headers,config){console.log(data,status,headers,config),scope.errorCategorieBackEnd=!0})},categorie}),services.factory("Lists",function(Api,$timeout,$q,Correct){var lists={};return lists.get=function(scope){var deferred=$q.defer(),data={};return data.user="lists",Api.get("back/controls/listsCtrl.php",data).then(function(response){return deferred.resolve(response.data)},function(data,status,config,headers){return deferred.reject(data,status,config,headers)}),deferred.promise},lists.post=function(scope,listName){var data={name:listName};Api.post("back/controls/listsCtrl.php",data).then(function(response){switch(response.data){case"emptyName":scope.errorList=!0,scope.errorNameList=!0;break;case"alreadyExists":scope.errorList=!0,scope.nameListExist=!0;break;case"successAddList":Correct.run(scope,"correctAddList");var listName=document.getElementById("listName");scope.lists.push({name:data.name}),scope.listName="",$timeout(function(){listName.classList.remove("ng-invalid")})}},function(data,status,config,headers){console.log(data,status,config,headers)})},lists}),services.factory("Correct",function($timeout){var correct={};return correct.run=function(scope,elem){switch(elem){case"correctAddAddress":scope.correctAddAddress=!0,correct.time(scope);break;case"correctAddList":scope.correctAddList=!0,correct.time(scope);break;case"correctChangeList":scope.correctChangeList=!0,correct.time(scope);break;case"correctChangeAddress":scope.correctChangeAddress=!0,correct.time(scope)}},correct.time=function(scope){$timeout(function(){scope.correctChangeList=!1,scope.correctAddAddress=!1,scope.correctAddList=!1,scope.correctChangeAddress=!1},1500)},correct}),services.factory("Map",function(Address){var map={};return map.init=function(zoom,position){var mapElem;mapElem=new google.maps.Map(document.getElementById("map"),{center:position,zoom:zoom,mapTypeId:google.maps.MapTypeId.ROADMAP,zoomControl:!1,streetViewControl:!1,disableDefaultUI:!0}),map.marker(mapElem,position)},map.marker=function(map,position){var image="app/images/pin-green.png";new google.maps.Marker({map:map,position:position,icon:image,animation:google.maps.Animation.DROP})},map.initGeocode=function(scope){Address.get().then(function(response){map.geocodeById(scope,response[0].placeId)},function(headers,data,status,config){console.log(headers,data,status,config),map.error(scope)})},map.geocodeById=function(scope,placeId){var geocoder=new google.maps.Geocoder;geocoder.geocode({placeId:placeId},function(results,status){status===google.maps.GeocoderStatus.OK&&results[0]?map.init(20,results[0].geometry.location):map.error(scope)})},map.error=function(scope){scope.textErrorMap="Désolé, nous ne pouvons pas afficher la position géographique de votre adresse.",scope.errorMap=!0},map}),app.directive("inscription",function(Modal){var inscription={restrict:"E",replace:!0,templateUrl:"app/views/templates/inscriptionModal.php",link:function(scope){scope.focusInputModal=function(inputId){Modal.inputFocus(inputId)},scope.blurInputModal=function(inputId){Modal.inputBlur(inputId)},scope.hideModalInscription=function(){scope.modalInscription=!1},scope.changeModal=function(){Modal.change(scope)},scope.confirmInscription=function(user){var uSurname=document.getElementById("uSurname").value,uName=document.getElementById("uName").value,uEmail=document.getElementById("uEmail").value,uPassword=document.getElementById("uPassword").value;if(scope.inscription.uSurname.$error.minlength||scope.inscription.uSurname.$error.maxlength||scope.inscription.uSurname.$error.pattern)return void(scope.wrongSurnameInscription=!0);if(scope.inscription.uName.$error.minlength||scope.inscription.uName.$error.maxlength||scope.inscription.uName.$error.pattern)return void(scope.wrongNameInscription=!0);if(scope.inscription.uEmail.$error.email)return void(scope.wrongMailInscription=!0);if(scope.inscription.uPassword.$error.minlength||scope.inscription.uPassword.$error.maxlength)return void(scope.wrongPasswordInscription=!0);if(""!==uSurname&&void 0!==uSurname&&""!==uName&&void 0!==uName&&""!==uEmail&&void 0!==uEmail&&""!==uPassword&&void 0!==uPassword){this.user.inscription="login";var data=angular.copy(user);Modal.confirm(scope,data)}}}};return inscription}),app.directive("connection",function(Modal){var connection={restrict:"E",replace:!0,templateUrl:"app/views/templates/connectionModal.php",link:function(scope){scope.focusInputModal=function(inputId){Modal.inputFocus(inputId)},scope.blurInputModal=function(inputId){Modal.inputBlur(inputId)},scope.hideModalConnection=function(){scope.modalConnection=!1},scope.changeModal=function(){Modal.change(scope)},scope.confirmConnection=function(userCo){var uEmailCo=document.getElementById("uEmailCo").value,uPasswordCo=document.getElementById("uPasswordCo").value;if(scope.connection.uEmailCo.$error.email)return void(scope.wrongMailConnection=!0);if(scope.connection.uPasswordCo.$error.minlength||scope.connection.uPasswordCo.$error.maxlength)return void(scope.wrongPasswordConnection=!0);if(""!==uEmailCo&&void 0!==uEmailCo&&""!==uPasswordCo&&void 0!==uPasswordCo){this.userCo.connection="login";var data=angular.copy(userCo);Modal.confirm(scope,data)}}}};return connection}),app.directive("menu",function(){return{replace:!0,restrict:"E",templateUrl:"app/views/templates/menu.php",link:function(scope){scope.menu=[{icon:"glyphicon-th-list",title:"Adresses",locate:"/addresses"},{icon:"glyphicon-map-marker",title:"Carte"},{icon:"glyphicon-user",title:"Amis"},{icon:"glyphicon-cog",title:"Paramètres"}],scope.indexMenu=0,scope.activeMenu=function(index){scope.indexMenu=index}}}}),app.directive("addresses",function(Address,$location){var addressesTemplate={restrict:"E",replace:!0,templateUrl:function(attrs,elem){return elem.templateUrl},link:function(scope){var location=$location.path(),splitLocation=location.split("/"),categorie=splitLocation[3];Address.get().then(function(response){"errorLoadAddresses"===response?scope.errorBackEnd=!0:"noResult"===response?$location.path("/addresses"):"noResultAddress"===response?$location.path("/addresses/categories/"+categorie):"noAddressInCategorie"===response?$location.path("/addresses/categories/All"):scope.addresses=response},function(){console.log(data,status,config,headers),scope.errorLoadAddresses=!0})}};return addressesTemplate}),app.directive("lists",function(Lists){var listsTemplate={restrict:"E",replace:!0,templateUrl:function(attrs,elem){return elem.templateUrl},link:function(scope){Lists.get().then(function(response){"errorLoadLists"===response?scope.errorBackEnd=!0:scope.lists=response},function(data,status,config,headers){console.log(data,status,config,headers),scope.errorLoadLists=!0})}};return listsTemplate}),app.directive("categories",function(Categorie){var categoriesTemplate={restrict:"E",replace:!0,templateUrl:function(attrs,elem){return elem.templateUrl},link:function(scope){Categorie.get(scope)}};return categoriesTemplate}),app.directive("correct",function(){var correct={replace:!0,restrict:"E",template:function(attrs,elem){return"<i class='glyphicon glyphicon-ok correctAdd' ng-show='"+elem.templateCorrect+" === true'></i>"}};return correct}),app.directive("map",function(Map,$routeParams){var mapTemplate={replace:!0,restrict:"E",template:"<div id='map' class='small'></div>",link:function(scope,attrs,elem){$routeParams.nameAddress&&Map.initGeocode(scope)}};return mapTemplate});