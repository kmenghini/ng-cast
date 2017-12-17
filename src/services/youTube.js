angular.module('video-player')
.service('youTube', function($http) {
  this.search = function(searchObj) {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        'maxResults': 5,
        'part': 'snippet',
        'q': searchObj.query,
        'type': 'video',
        'key': window.YOUTUBE_API_KEY,
        'videoEmbeddable': 'true'
      }
    })
      .then(function successCallback(response) {
        console.log('success!');
        return response.data.items;
      }, function errorCallback(response) {
        console.log('error: ', response);
      });
  };
});
