angular.module('video-player')
.service('youTube', function($http) {
  return $http({
    method: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    params: {
      'maxResults': 5,
      'part': 'snippet',
      'q': this.searchObj,
      'type': 'video',
      'key': window.YOUTUBE_API_KEY,
      'videoEmbeddable': 'true'
    }
  })
    .then(function successCallback(response) {
      console.log('success!');
      console.log(response.data.items);
      let videoArray = response.data.items;
      return videoArray;
      //run this.searchResults on app with (response.data.items)
    }, function errorCallback(response) {
      console.log('error: ', response);
    });
});

//window.YOUTUBE_API_KEY;
var defaultSearch = {
  max: 5,
  query: 'dogs'
};

// console.log(youTube(defaultSearch));