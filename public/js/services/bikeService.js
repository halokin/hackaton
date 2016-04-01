// TODO SERVICE
function bikeService($http) {
    return {
        get : function() {
<<<<<<< HEAD
            return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json')

=======
            return $http.get('/bikes');
>>>>>>> edbcd059523abb11653f57ee05f5b6124dc7482e
        },
        update : function(id, data){
            return $http.put('/bikes/' + id, data);
        },
        create : function(data) {
            return $http.post('/bikes', data);
        },
        delete : function(id) {
            return $http.delete('/bikes/' + id);
        }
    }
};
