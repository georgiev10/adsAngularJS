'use strict'

app.controller('UserDeactivateAdController',
    function ($scope, $location, $rootScope, userService, authService, notifyService, pageSize) {

       $scope.loadUserAds = function () {
            userService.getUserAds(
                $scope.personalParams,
                function success (data) {
                    $scope.ads = data;
                }, function error (error) {
                    notifyService.showError('Error: ' + error);
                }
            );
        };


        $scope.loadUserAds();
    });