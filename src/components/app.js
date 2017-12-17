angular.module('video-player')

.component('app', {
  controller: function($scope, youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = this.videos[0];
    this.searchObj = {
      max: 5,
      query: 'cat'
    };
    this.selectVideo = function(index) {
      console.log(index);
      this.currentVideo = this.videos[index];
    }.bind(this);
    this.searchResults = function(searchText, searchObj) {    
      this.searchObj = {
        'max': 5,
        'query': searchText,
      };
      youTube.search(this.searchObj)
        .then(data => this.youtubeVid(data));
    }.bind(this);
    this.youtubeVid = function (data) {
      this.videos = data;
      this.currentVideo = data[0];
    };
  },
  templateUrl: 'src/templates/app.html'
});


//window.YOUTUBE_API_KEY