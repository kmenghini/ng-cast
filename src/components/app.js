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
    // this.searchResults = function() {
    //   //this.videos = result of ajax request
    //   youTube(searchObj);
    // },
    this.searchResults = function(searchText) {    
      this.searchObj = {
        'max': 5,
        'query': searchText,
      };
      this.videos = youTube.$$state.value;
      // searchObj = search;
      console.log(youTube);//array of videos
      console.log(this.searchObj);
      //run youTube function with input 'search'
      // youTube();
      //store result as this.result  
    }.bind(this);
  },
  templateUrl: 'src/templates/app.html'
});


//window.YOUTUBE_API_KEY