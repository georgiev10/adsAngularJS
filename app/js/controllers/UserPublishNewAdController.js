'use strict';

app.controller('UserPublishNewAdController',
    function ($scope, $rootScope, $location, townsService, categoriesService,
              userService, notifyService) {
        $rootScope.pageTitle = "Publish New Ad";

        $scope.adData = {townId: null, categoryId: null};
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.publishAd = function(adData) {
            userService.createNewAd(adData,
                function success() {
                    alert('Add Ad!!!')
                    notifyService.showInfo("Publish new ad successfully");
                    $location.path("/user/ads");
                },
                function error(err) {
                    notifyService.showError("Publish new ad failed", err);
                }
            );
        };
    }
);
