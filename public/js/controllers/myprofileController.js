// MAIN CONTROLLER
function myprofileController($scope, $http, myprofileService, $location, meteoService, NgMap) {

  $scope.i = 0;
  $scope.u = 0;
  $scope.j = 0;
  $scope.l = 0;
  $scope.k = 0;
  $scope.myprofile = {};
  NgMap.getMap().then(function(map) {
    console.log(map.getCenter());
    console.log('markers', map.markers);
    console.log('shapes', map.shapes);
  });
  //--------------------------------ng-show-----
  $scope.plusj = function(j){
    $scope.j = 1;
  };
  $scope.plusl = function(l){
    $scope.l = 1;
  };
  $scope.send = function($locationProvider){
    $location.path('/');
  };

  $scope.plus = function(i){
    $scope.i ++;
  };
  $scope.moins = function(i){
    $scope.i --;
  };
  $scope.pluss = function(u){
    $scope.u ++;
  };
  $scope.moinss = function(u){
    $scope.u --;
  };
  //--------------------------------ng-show-----Fin
  function load(){
    myprofileService.get().then(function(res){
      $scope.myprofiles = res.data;
    });
  }
  $scope.add = function(){

    myprofileService.create($scope.myprofile).then(function(res){
      load();
    });
  };
  $scope.update = function(myprofile){
    myprofileService.update(myprofile._id, myprofile).then(function(res){
      load();
    });
  };
  $scope.delete = function(myprofile){
    myprofileService.delete(myprofile._id).then(function(res){
      load();
    });
  };
  // import photos
  $scope.previewFile = function(){
    var preview = document.querySelector('#preview');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    reader.onloadend = function () {
      preview.src = reader.result;
      $scope.myprofile.imageFile = reader.result;
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  };

  // $scope.search = function(){
  // 	$http.get("api.openweathermap.org/data/2.5/weather?q="+$scope.city+"&APPID="+"295594b2f0f74cb1eafdf26d818de19b"+"&units=metric")
  // 	.success(function(res) {
  // 							$scope.meteo = res.data;
  //             });
  //
  //
  // };
// $scope.cities =[Paris, London];
// $scope.citiesres=[];
//   $scope.cities= function(){
//
//     for( var i = 0; i < $scope.cities.length; i++){
//     meteoService.get($scope.cities[i]).then(function(res){
//       $scope.citiesres.push(res.data);
//
//     });
//   }
// };

  $scope.search = function (){
    meteoService.get($scope.city).then(function(res){
      $scope.meteo = res.data;
      console.log ($scope.meteo);
    });
  };



  load();
}
