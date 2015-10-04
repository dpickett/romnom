let jQuery = require('jquery');
let Slick = require('../vendor/slick-carousel/slick/slick.min.js');

export default function($rootScope, $timeout){
  return {
    restrict: 'A',
    link: function(scope, element, attrs){
      if(scope.$last){
        $timeout(function() {
          let slick = jQuery(element).parent().slick({
            accessibility: true,
            centerMode: true,
            dots: false,
            infinite: false,
            focusOnSelect: true
          });

          jQuery('.slick-slide:first-child', slick).
            focus();
        });
      }
    }
  }
}
