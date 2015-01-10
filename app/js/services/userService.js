'use strict';

app.factory('userService',
    function ($http, baseServiceUrl, authService) {
        return {

            changePassword: function (params, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/ChangePassword',
                    headers: authService.getAuthHeaders(),
                    data: params
                };
                $http(request).success(success).error(error);
            },

            editProfile: function (params, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/profile',
                    headers: authService.getAuthHeaders(),
                    data: params
                };
                $http(request).success(success).error(error);
            },

            getUserData: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/profile',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            getUserAds: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },

            createNewAd: function (adData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
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
