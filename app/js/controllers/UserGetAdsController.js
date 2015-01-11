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
                    ad.status='Inactive';
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
                    ad.status='WaitingApproval';
                }, function error (err) {
                    notifyService.showError('Activated failed: ' + err.message);
                }
            );
        };

        $scope.deleteToConfirmAdButtonClicked = function (id) {
            userService.getUserAdById(
                id,
                function success (data) {
                    $rootScope.ad=data;
                }, function error (err) {
                    notifyService.showError('Cannot get user ad ' + err);
                }
            );
        };

        $scope.deleteAdButtonClicked = function (id) {
            userService.deleteAd(
                id,
                function success () {
                    notifyService.showInfo('Deleted Ad successful!');
                }, function error (err) {
                    notifyService.showError('Deleted Ad failed ' + err.message);
                }
            );
        };


        $scope.loadUserAds();

    });