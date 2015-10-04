import CoreListCtrl from '../controllers/core-list-ctrl.js';
import Carousel from '../directives/carousel.js'

let RomNom = angular.module('RomNom', []);
RomNom.directive('carousel', Carousel);
RomNom.controller('CoreListCtrl', CoreListCtrl);

window.onload = () => {
  angular.bootstrap(RomNom);
  // $ = require('jquery');
  // element = new Main().getElement();
  // $(document.body).append(element);
}
