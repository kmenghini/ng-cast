angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    selectVideo: '<',
    currentIndex: '='
  },
  controller: function($scope) {
    // this.onClick = function(index) {
      
    // };
  },
  templateUrl: 'src/templates/videoList.html'
});
