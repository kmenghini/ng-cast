angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    onClick: '<',
    index: '<',
    selectVideo: '<'
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
