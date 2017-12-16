angular.module('video-player')

.component('app', {
  controller: function() {
    this.videos = window.exampleVideoData;
    this.video = this.videos[0];
    this.selectVideo = function(index) {
      this.video = this.videos[index];
    };
    this.searchResults = function() {

    };
  },
  templateUrl: 'src/templates/app.html'
});
