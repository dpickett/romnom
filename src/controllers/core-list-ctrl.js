export default function($scope) {
  'ngInject';

  $scope.cores = [
    {
      id: 'snes',
      name: 'Super Nintendo (SNES)'
    },
    {
      id: 'nes',
      name: 'Nintendo (NES)'
    },
    {
      id: 'gba',
      name: 'Gameboy Advance'
    }
  ];
}
