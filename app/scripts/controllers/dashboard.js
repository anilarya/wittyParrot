'use strict';

/**
 * @ngdoc function
 * @name parrotApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the parrotApp
 */
angular.module('parrotApp')
  .controller('DashboardCtrl', function ($scope,$rootScope, $state,$window, $location, GApi, dashboard) {
 
  
    $scope.model = {};

    var fetchYoutubeData = function fetchYoutubeData(){
      console.log('loading google apis...');
      if (typeof gapi.client === 'undefined') {
        setTimeout(fetchYoutubeData, 500);
      } else {
        gapi.client.setApiKey('AIzaSyCLJ1Wg7CAmPlHG0bZLPnLqBGW398SvAO4');
        gapi.client.load('youtube', 'v3', function() {
          console.log("gapi.client.youtube", gapi.client.youtube.search);
            var request = gapi.client.youtube.search.list({
                part: 'snippet',
                channelId: 'UCqhNRDQE_fqBDBwsvmT8cTg',
                order: 'date',
                type: 'video'

            }) 

            request.execute(function(response) {
                    console.log(response); 
                    $scope.model.response  = response.items;
                    $scope.model.channelTitle =  response.items[0].snippet.channelTitle ;
                    console.log($scope.model.response)
                    $scope.$apply();
            });
        });
     }
    }

    var init = function () { // initial function
      console.log('DashboardCtrl.init()'); 
      fetchYoutubeData();
    }();

});;
