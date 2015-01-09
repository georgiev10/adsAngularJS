'use strict';

app.factory('userService',
    function ($http, baseServiceUrl, authService) {
        return {

            getUserAds: function (params, success, error) {

                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);

                alert('My ads was clicked-3! ');
            },



            createNewAd: function (adData, success, error) {

                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
                alert('CreateNewAd was clicked-1!');
            },



            deactivateAd: function (id, success, error) {
                // TODO
            },

            publishAgainAd: function (id, success, error) {
                // TODO
            }
        }
    }
);
