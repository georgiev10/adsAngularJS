'use strict'

app.controller('UserProfileController',
    function ($scope, $rootScope, userService, notifyService, townsService ) {
        $rootScope.pageTitle = "Edit Profile";
        $scope.towns = townsService.getTowns();
        $scope.userDataPass=null;

        $scope.getData = function () {
            userService.getUserData(
                null,
                function (data) {
                    $scope.userData = data;
                },function error (err) {
                    notifyService.showError('Cannot get user data! ' + err);
                }
            );
        };

        $scope.editProfile = function (data) {
            userService.editProfile(
                data,
                function success () {
                    notifyService.showInfo('Edit user profile successful!');
                },function error (err) {
                    notifyService.showError('Cannot change user profile ' + err.message);
                    console.log(err);
                }
            );
        };

        $scope.changePassword = function (data) {
            userService.changePassword(
                data,
                function success () {
                    notifyService.showInfo('Change user password successful!');
                },function error (err) {
                    notifyService.showError('Cannot change user password! ' + err.message);
                    console.log(err);
                }
            );
        };

        $scope.getData();

    });