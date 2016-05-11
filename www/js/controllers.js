angular.module('app.controllers', [])

.controller('gROUPEXCtrl', function($scope) {

})

.controller('eVENTSCtrl', function($scope) {

})

.controller('mECtrl', function($scope) {

})

.controller('homeCtrl', function($scope) {

})

/*.controller('tabsCtrl', function($scope, $ionicTabsDelegate) {
      $scope.goForward = function () {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1) {
            $ionicTabsDelegate.select(selected + 1);
        }
    }

    $scope.goBack = function () {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1 && selected != 0) {
            $ionicTabsDelegate.select(selected - 1);
        }
    }

})*/

.controller('myBookingsCtrl', function($scope) {

})

.controller('referInspireCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})

.controller('helpCtrl', function($scope) {

})

.controller('logoutCtrl', function($scope) {

})

.controller('InfoController', function ($scope, $cordovaGeolocation, $window) {

  $window.navigator.geolocation.getCurrentPosition(function(position) {
    $scope.$apply(function() {
      $scope.lat = position.coords.latitude;
      $scope.lng = position.coords.longitude;

      var geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng($scope.lat, $scope.lng);
      var request = {
        latLng: latlng
      };
      geocoder.geocode(request, function(data, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (data[0] != null) {
            //alert("address is: " + data[0].formatted_address);
            $scope.address = data[0].formatted_address;
          } else {
            //alert("No address available");
            $scope.address = "No address available";
          }
        }
      })
      console.log(position);
    })
  })
    })



.controller("CameraController", function ($scope, $cordovaCamera) {
                $scope.imgURI="http://ionicframework.com/img/docs/mcfly.jpg"

                $scope.takePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.CAMERA,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 375,
                    targetHeight: 667,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };

                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                }

                $scope.choosePhoto = function () {
                  var options = {
                    quality: 75,
                    destinationType: Camera.DestinationType.DATA_URL,
                    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                    allowEdit: true,
                    encodingType: Camera.EncodingType.JPEG,
                    targetWidth: 375,
                    targetHeight: 667,
                    popoverOptions: CameraPopoverOptions,
                    saveToPhotoAlbum: false
                };

                    $cordovaCamera.getPicture(options).then(function (imageData) {
                        $scope.imgURI = "data:image/jpeg;base64," + imageData;
                    }, function (err) {
                        // An error occured. Show a message to the user
                    });
                }
            });
