'use strict';

app.controller('UserGetAdsController',
    function ($scope, $rootScope, $location,userService, notifyService, pageSize) {
        $rootScope.pageTitle = "My Ads";
        alert('My ads was clicked!')

//        $scope.params = {
//            'startPage' : 1,
//            'pageSize' : pageSize
//        };

        alert('My ads was clicked-2! ');

        $scope.reloadUserAds = function() {
            userService.getUserAds(
                [],
                function success(data) {
                    console.log(data);
                    $scope.ads=data;
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );

            alert('My ads was clicked-2a! ');
        };



    }
);
