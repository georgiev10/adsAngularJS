'use strict'

app.controller('UserEditAdController',
    function ($scope, $location, $rootScope, userService, authService, notifyService) {

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

    });