'use strict'

app.controller('UserGetAdsController',
    function ($scope, $location, $rootScope, userService, authService, notifyService, pageSize) {
        $rootScope.pageTitle = "My Ads";

        $scope.personalParams = {
            startPage: 1,
            pageSize: pageSize
        };

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