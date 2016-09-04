angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.contactos', {
    url: '/contactos',
    views: {
      'tab4': {
        templateUrl: 'templates/contactos.html',
        controller: 'contactosCtrl'
      }
    }
  })

  .state('tabsController.historial', {
    url: '/Historial',
    views: {
      'tab6': {
        templateUrl: 'templates/historial.html',
        controller: 'historialCtrl'
      }
    }
  })

  .state('chat', {
    url: '/page9',
    templateUrl: 'templates/chat.html',
    controller: 'chatCtrl'
  })

$urlRouterProvider.otherwise('/page1/Historial')

  

});