// MAIN CONTROLLER
function myprofileController($scope, $http, myprofileService, $location) {
 $scope.i = 0;
 $scope.j = 0;
 $scope.profile = {};
 //--------------------------------ng-show-----
 $scope.plusj = function(j){
   $scope.j = 1;
 };
 $scope.plusk = function(k){
   $scope.k = 1;
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
            $scope.imageFile = reader.result;
        };
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
};
	load();
}
