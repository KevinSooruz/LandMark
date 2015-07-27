<!DOCTYPE html>
<html lang="fr" ng-app="app">
<head>
<title>Localize</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
<meta name="description" content="Localize">
<meta name="keywords" content="Localize">
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-touch-fullscreen" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="white" />
<!--<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">-->
<link rel="stylesheet" type="text/css" href="app/css/style.css">
<!-- icon for iOS Devices -->
<link rel="apple-touch-icon" href="images/icon.png"/>
<link rel="apple-touch-icon" sizes="57x57" href="images/icon.png"/>
<link rel="apple-touch-icon" sizes="72x72" href="images/icon-2.png"/>
<link rel="apple-touch-icon" sizes="114x114" href="images/icon-3.png" />
<!--Splash screen for iOS Devices -->
<!-- iPhone (Retina) -->
<link href="images/apple-startup-iphone-retina.png" media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">
<!-- iPhone 5 -->
<link href="images/apple-startup-iphone-tall-retina.png"  media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">
<!-- iPad Portrait -->
<link href="images/apple-startup-ipad-portrait.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)" rel="apple-touch-startup-image">
<!-- iPad Landscape -->
<link href="images/apple-startup-ipad-landscape.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)" rel="apple-touch-startup-image">
<!-- iPad Portrait (Retina) -->
<link href="images/apple-startup-ipad-retina-portrait.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">
<!-- iPad Landscape (Retina) -->
<link href="images/apple-startup-ipad-retina-landscape.png" media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)" rel="apple-touch-startup-image">
<link rel="shortcut icon" type="image/jpg" href="images/favico.png">
</head>
<body>
    
    <div ng-controller="AllController" ng-view></div>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular-route.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular-touch.min.js"></script>
<script type="text/javascript" src="app/js/app.js"></script>

</body>
</html>