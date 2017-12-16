angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    onClick: '<',
    index: '<',
    selectVideo: '<'
  },
  controller: function() {
    
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
