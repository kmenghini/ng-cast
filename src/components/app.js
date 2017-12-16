angular.module('video-player')

.component('app', {
  controller: function($scope) {
    this.videos = window.exampleVideoData;
    this.currentIndex = 0;
    this.currentVideo = this.videos[this.currentIndex];
    this.selectVideo = function(index) {
      console.log(index);
      this.currentVideo = this.videos[index];
    }.bind(this);
    this.searchResults = function() {

    };
  },
  templateUrl: 'src/templates/app.html'
});
