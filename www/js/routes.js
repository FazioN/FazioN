angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

    .state('tabsController.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

      .state('tabsController.gROUPEX', {
    url: '/groupex',
    views: {
      'tab2': {
        templateUrl: 'templates/gROUPEX.html',
        controller: 'gROUPEXCtrl'
      }
    }
  })

  .state('tabsController.eVENTS', {
    url: '/events',
    views: {
      'tab3': {
        templateUrl: 'templates/eVENTS.html',
        controller: 'eVENTSCtrl'
      }
    }
  })

  .state('tabsController.mE', {
    url: '/me',
    views: {
      'tab4': {
        templateUrl: 'templates/mE.html',
        controller: 'mECtrl'
      }
    }
  })

  .state('myBookings', {
    url: '/bookings',
    templateUrl: 'templates/myBookings.html',
    controller: 'myBookingsCtrl'
  })

  .state('referInspire', {
    url: '/refer',
    templateUrl: 'templates/referInspire.html',
    controller: 'referInspireCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('help', {
    url: '/help',
    templateUrl: 'templates/help.html',
    controller: 'helpCtrl'
  })

  .state('logout', {
    url: '/logout',
    templateUrl: 'templates/logout.html',
    controller: 'logoutCtrl'
  })

$urlRouterProvider.otherwise('/tabs/home')



});
