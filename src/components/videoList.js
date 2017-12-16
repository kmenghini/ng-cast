angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    selectVideo: '<'
  },
  controller: function($scope) {
    this.onClick = function(index) {
      console.log(index);
      this.selectVideo(index);
    };
  },
  templateUrl: 'src/templates/videoList.html'
});
