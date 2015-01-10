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
                }, function error (err) {
                    notifyService.showError('Deactivated failed: ' + err.message);
                }
            );
        };

        $scope.publishAgainButtonClicked = function (ad) {
            userService.publishAgainAd(
                ad.id,
                function success () {
                    notifyService.showInfo('Activated successful!');
                }, function error (err) {
                    notifyService.showError('Activated failed: ' + err.message);
                }
            );
        };

        $scope.deleteAdButtonClicked = function (id) {
            userService.deleteAd(
                id,
                function success (data) {
                    $rootScope.deletedAd = data;
                }, function error (error) {
                    notifyService.showError('Error: fail deleting ad.');
                }
            );
        };

        $scope.loadUserAds();

    });