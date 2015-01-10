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

        $scope.deactivateButtonClicked = function (ad) {
            userService.deactivateAd(
                ad.id,
                function success () {
                    notifyService.showInfo('Deactivated successful!');
                    // $location.path('/user/ads');
                }, function error (err) {
                    notifyService.showError('Deactivated failed: ' + err.message);
                }
            );
        };

        $scope.activateAgainButtonClicked = function (ad) {
            userService.publishAgainAd(
                ad.id,
                function success () {
                    notifyService.showInfo('Activated successful!');
                    // $location.path('/user/ads');
                }, function error (err) {
                    notifyService.showError('Activated failed: ' + err.message);
                }
            );
        };




        $scope.loadUserAds();
    });