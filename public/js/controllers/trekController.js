// trek CONTROLLER
function trekController($scope, $http, trekService) {


    $scope.title = "Trek List";


      var kmlUrl = 'http://gmaps-samples.googlecode.com/svn/trunk/ggeoxml/cta.kml';
  
  $scope.kmlLayerOptions = {
    url: kmlUrl,
  };
  $scope.map = {
    //Chicago
    center: {
      latitude: 41.875696,
      longitude: -87.624207
    },
    zoom:8,
    showWeather: false,
    showTraffic: false,
    showCloud: false,
    showKml: true,
  };


    function load() {
        trekService.get().then(function (res) {
            $scope.treks = res.data;
        });

    }

    $scope.add = function () {
        var data = {};
        data.description = $scope.description;
        data.distance = $scope.distance;
        data.time = $scope.time;
        data.badge = $scope.badge;
        data.image = $scope.imageFile;
        treksService.create(data).then(function (res) {
            load();
        });
        $scope.description = "";
        $scope.distance = "";
        $scope.time = "";
        $scope.badge = "";
        $scope.imageFile = "";
        location.reload();
    }
    $scope.update = function (treks) {
        treksService.update(treks._id, treks).then(function (res) {});
    }
    $scope.delete = function (treks) {
        treksService.delete(treks._id).then(function (res) {
            load();
        });
    }
    $scope.previewFile = function () {
        var preview = document.querySelector('#preview');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            preview.src = reader.result;
            $scope.imageFile = reader.result;
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }

    $scope.content = '';

    load();
}
