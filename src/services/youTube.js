angular.module('video-player')
.service('youTube', function($http) {
  $http.get('https://www.googleapis.com/youtube/v3/search', {
    params: {'maxResults': '5',
      'part': 'snippet',
      'q': 'surfing',
      'type': 'video',
      'key': window.YOUTUBE_API_KEY
    }
  }).success(data, status, headers)
  .error(data, status);
});

//window.YOUTUBE_API_KEY;
