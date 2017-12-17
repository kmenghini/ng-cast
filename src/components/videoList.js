angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    selectVideo: '<',
    currentIndex: '='
  },
  templateUrl: 'src/templates/videoList.html'
});
