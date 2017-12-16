angular.module('video-player')

.component('search', {
  controller: function($scope, youTube) {

    // youTube();

    this.searchYouTube = function(searchText) {    
      var search = {
        'max': 5,
        'query': searchText,
      };
      console.log(search);
      //run youTube function with input 'search'
      // youTube();
      //store result as this.result  
    };

 
  },
  templateUrl: 'src/templates/search.html'
});
