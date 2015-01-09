'use strict';

app.controller('UserGetAdsController',
    function ($scope, $rootScope, $location, townsService, categoriesService,
              userService, notifyService, pageSize) {
        $rootScope.pageTitle = "My Ads";

        $scope.params = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.reloadUserAds = function() {
            userService.getUserAds(
                $scope.params,
                function success(data) {
                    alert('success');
                    $scope.ads=data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );
        };



    }
);
