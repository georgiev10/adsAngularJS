'use strict'

app.controller('UserProfileController',
    function ($scope, $rootScope, userService, notifyService, townsService ) {
        $rootScope.pageTitle = "Edit Profile";

        $scope.getData = function () {
            userService.getUserData(
                null,
                function (data) {
                    $scope.userData = data;
                },function error (error) {
                    notifyService.showError('Cannot get User Profile: ' + error);
                }
            );
        };


        $scope.getData();
        $scope.towns = townsService.getTowns();
    });