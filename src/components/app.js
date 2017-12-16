angular.module('video-player')

.component('app', {
  controller: function($scope) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.selectVideo = function(index) {
      console.log(index);
      this.currentVideo = this.videos[index];
    }.bind(this);
    this.searchResults = function() {
      
    };
  },
  templateUrl: 'src/templates/app.html'
});


//window.YOUTUBE_API_KEY