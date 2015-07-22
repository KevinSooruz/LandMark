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
                    "app/js/controllers/AllController.js",
                    "app/js/controllers/HomeController.js",
                    "app/js/controllers/ProfilController.js",
                    "app/js/services/Api.js",
                    "app/js/services/Log.js",
                    "app/js/services/Session.js",
                    "app/js/directives/InscriptionDirective.js"
                ],
                "dist/app/js/app.js" : [
                    "app/js/controllers/InitController.js",
                    "app/js/controllers/RouteController.js",
                    "app/js/controllers/AllController.js",
                    "app/js/controllers/HomeController.js",
                    "app/js/controllers/ProfilController.js",
                    "app/js/services/Api.js",
                    "app/js/services/Log.js",
                    "app/js/services/Session.js",
                    "app/js/directives/InscriptionDirective.js"
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
                "dist/app/views/profil.php": "app/views/profil.php",
                "dist/app/views/inscriptionModal.php": "app/views/inscriptionModal.php",
                "dist/back/controls/sessionCtrl.php": "back/controls/sessionCtrl.php",
                "dist/back/controls/logoutCtrl.php": "back/controls/logoutCtrl.php",
                "dist/back/controls/authUserCtrl.php": "back/controls/authUserCtrl.php",
                "dist/back/models/connexionSql.php": "back/models/connexionSql.php",
                "dist/back/models/loadClass.php": "back/models/loadClass.php",
                "dist/back/models/AuthUser.class.php": "back/models/AuthUser.class.php"
            }
        }
    },
    
    watch: {
        style: {
            files: "app/css/**/*.less",
            tasks: ["less:compile"]
        },
        script: {
            files: ["app/js/controllers/*.js", "app/js/directives/*.js", "app/js/services/*.js"],
            tasks: ["uglify"]
        },
        html: {
            files: ["app/views/*.php", "back/**/*.php"],
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

/*"js/js.min.js" : ["js/js.js"],
"js/jquery.min.js" : ["js/jquery.js"],
"js/ajax.min.js" : ["js/ajax.js"],
"bootstrap/js/modal.min.js" : ["bootstrap/js/modal.js"]*/