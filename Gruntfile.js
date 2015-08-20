// Ouvrir le terminal de commande : se placer dans le dossier et appuyer sur "Shift + clic droit" => ouvrir une fenêtre de commande

module.exports = function(grunt) {
  
  grunt.initConfig({
    
    less:{
        compile: {
            options: {
                compress: true,
                yuicompress: true
            },
            files:{
                "app/css/style.css": "app/css/style.less",
                "dist/app/css/style.css": "app/css/style.less"
            }
        }
    },
    
    uglify: {
        options: {
            mangle: false
        },
        target: {
            files: {
                "app/js/app.js" : [
                    "app/js/controllers/InitController.js",
                    "app/js/controllers/RouteController.js",
                    "app/js/filters/Reverse.js",
                    "app/js/controllers/AllController.js",
                    "app/js/controllers/HomeController.js",
                    "app/js/controllers/AddressesController.js",
                    "app/js/controllers/ListsController.js",
                    "app/js/controllers/CategoriesController.js",
                    "app/js/controllers/AddressController.js",
                    
                    "app/js/services/Api.js",
                    "app/js/services/Log.js",
                    "app/js/services/Session.js",
                    "app/js/services/Modal.js",
                    "app/js/services/ChangeText.js",
                    "app/js/services/Autocomplete.js",
                    "app/js/services/User.js",
                    "app/js/services/Address.js",
                    "app/js/services/Categorie.js",
                    "app/js/services/Lists.js",
                    "app/js/services/Correct.js",
                    "app/js/services/Map.js",
                    
                    "app/js/directives/InscriptionDirective.js",
                    "app/js/directives/ConnectionDirective.js",
                    "app/js/directives/HeadDirective.js",
                    "app/js/directives/MenuDirective.js",
                    "app/js/directives/AddressesDirective.js",
                    "app/js/directives/ListsDirective.js",
                    "app/js/directives/CategoriesDirective.js",
                    "app/js/directives/CorrectDir.js",
                    "app/js/directives/MapDirective.js"
                ],
                "dist/app/js/app.js" : [
                    "app/js/controllers/InitController.js",
                    "app/js/controllers/RouteController.js",
                    "app/js/filters/Reverse.js",
                    "app/js/controllers/AllController.js",
                    "app/js/controllers/HomeController.js",
                    "app/js/controllers/AddressesController.js",
                    "app/js/controllers/ListsController.js",
                    "app/js/controllers/CategoriesController.js",
                    "app/js/controllers/AddressController.js",
                    
                    "app/js/services/Api.js",
                    "app/js/services/Log.js",
                    "app/js/services/Session.js",
                    "app/js/services/Modal.js",
                    "app/js/services/ChangeText.js",
                    "app/js/services/Autocomplete.js",
                    "app/js/services/User.js",
                    "app/js/services/Address.js",
                    "app/js/services/Categorie.js",
                    "app/js/services/Lists.js",
                    "app/js/services/Correct.js",
                    "app/js/services/Map.js",
                    
                    "app/js/directives/InscriptionDirective.js",
                    "app/js/directives/ConnectionDirective.js",
                    "app/js/directives/HeadDirective.js",
                    "app/js/directives/MenuDirective.js",
                    "app/js/directives/AddressesDirective.js",
                    "app/js/directives/ListsDirective.js",
                    "app/js/directives/CategoriesDirective.js",
                    "app/js/directives/CorrectDir.js",
                    "app/js/directives/MapDirective.js"
                ]
            }
        }
    },
    
    minifyHtml: {
        options: {
            cdata: true
        },
        dist: {
            files: {
                "dist/app/views/home.php": "app/views/home.php",
                "dist/app/views/adresses.php": "app/views/adresses.php",
                "dist/app/views/lists.php": "app/views/lists.php",
                "dist/app/views/categories.php": "app/views/categories.php",
                "dist/app/views/address.php": "app/views/address.php",
                
                "dist/app/views/templates/inscriptionModal.php": "app/views/templates/inscriptionModal.php",
                "dist/app/views/templates/connectionModal.php": "app/views/templates/connectionModal.php",
                "dist/app/views/templates/menu.php": "app/views/templates/menu.php",
                
                "dist/app/views/templates/addresses/addressesTemplate.php": "app/views/templates/addresses/addressesTemplate.php",
                "dist/app/views/templates/addresses/listsTemplate.php": "app/views/templates/addresses/listsTemplate.php",
                "dist/app/views/templates/addresses/listsTemplateSelect.php": "app/views/templates/addresses/listsTemplateSelect.php",
                "dist/app/views/templates/addresses/categoriesTemplate.php": "app/views/templates/addresses/categoriesTemplate.php",
                
                "dist/app/views/templates/categories/addressesTemplate.php": "app/views/templates/categories/addressesTemplate.php",
                "dist/app/views/templates/categories/categoriesTemplate.php": "app/views/templates/categories/categoriesTemplate.php",
                
                "dist/app/views/templates/lists/listsTemplate.php": "app/views/templates/lists/listsTemplate.php",
                "dist/app/views/templates/lists/addressesTemplate.php": "app/views/templates/lists/addressesTemplate.php",
                
                "dist/app/views/templates/address/addressTemplate.php": "app/views/templates/address/addressTemplate.php",
                "dist/app/views/templates/address/categoriesTemplate.php": "app/views/templates/address/categoriesTemplate.php",
                "dist/app/views/templates/address/listsTemplate.php": "app/views/templates/address/listsTemplate.php",
                
                "dist/back/controls/sessionCtrl.php": "back/controls/sessionCtrl.php",
                "dist/back/controls/logoutCtrl.php": "back/controls/logoutCtrl.php",
                "dist/back/controls/authUserCtrl.php": "back/controls/authUserCtrl.php",
                "dist/back/controls/addressesCtrl.php": "back/controls/addressesCtrl.php",
                "dist/back/controls/categorieCtrl.php": "back/controls/categorieCtrl.php",
                "dist/back/controls/userCtrl.php": "back/controls/userCtrl.php",
                "dist/back/controls/listsCtrl.php": "back/controls/listsCtrl.php",
                "dist/back/controls/addressesListCtrl.php": "back/controls/addressListCtrl.php",
                
                "dist/back/models/connexionSql.php": "back/models/connexionSql.php",
                "dist/back/models/loadClass.php": "back/models/loadClass.php",
                "dist/back/models/AuthUser.class.php": "back/models/AuthUser.class.php",
                "dist/back/models/Address.class.php": "back/models/Address.class.php",
                "dist/back/models/Categorie.class.php": "back/models/Categorie.class.php",
                "dist/back/models/User.class.php": "back/models/User.class.php",
                "dist/back/models/Lists.class.php": "back/models/Lists.class.php",
                "dist/back/models/AddressList.class.php": "back/models/addressList.class.php"
            }
        }
    },
    
    watch: {
        style: {
            files: "app/css/**/*.less",
            tasks: ["less:compile"]
        },
        script: {
            files: ["app/js/controllers/*.js", "app/js/directives/*.js", "app/js/services/*.js", "app/js/filters/*.js"],
            tasks: ["uglify"]
        },
        html: {
            files: ["app/views/*.php", "app/views/templates/**/*.php", "back/**/*.php"],
            tasks: ["minifyHtml"]
        }
    }
    
  });
  
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-minify-html");
  
  // Il est conseiller de compiler avant de lancer "Watch"
  grunt.registerTask("goUgly", ["uglify"]);
  grunt.registerTask("goLess", ["less:compile"]);
  grunt.registerTask("goMinify", ["minifyHtml"]);
  grunt.registerTask("goGrunt", ["less:compile", "watch"]);
  
};