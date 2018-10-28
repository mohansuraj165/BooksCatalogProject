app.controller('MainController',['$scope',
function($scope){
  $scope.title = 'Books Catalog';
  $scope.promo = 'List of books available';
  $scope.products = [
      {
          name: 'The Book of Trees',
          price: 19,
          pubdate: new Date('2014', '03', '08'),
          cover: 'img/bot.jpg',
          likes: 0,
          dislikes: 0
      },
      {
          name: 'Program or be Programmed',
          price: 8,
          pubdate: new Date('2013', '08', '01'),
          cover: 'img/popb.jpg',
          likes: 0,
          dislikes: 0
      },
      {
          name: 'Mahabharat',
          price: 100, pubdate:
          new Date('1800', '03', '08'),
          cover: 'img/mahabharat.jpg',
          likes: 0,
          dislikes: 0
      },
      {
          name: 'Ramayana',
          price: 100,
          pubdate: new Date('1900', '03', '08'),
          cover: 'img/ramayana.jpg',
          likes: 0,
          dislikes: 0
      }];
  $scope.plusOne= function(index) { 
  $scope.products[index].likes += 1; 
};
  $scope.minusOne= function(index) { 
  $scope.products[index].dislikes += 1; 
};
}]);
