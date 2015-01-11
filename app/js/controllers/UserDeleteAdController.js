'use strict'

app.controller('UserDeleteAdController', function ($scope, $location, $rootScope, userService, notifyService) {
    $scope.deleteAd = function (id) {
        userService.deleteAd(
            id,
            function success () {
                notifyService.showInfo('Deleted Ad successful!');
                $location.path('/user/ads');
            }, function error (err) {
                notifyService.showError('Deleted Ad failed ' + err.message);
            }
        );
    };
});