// TREK SERVICE
function trekService($http) {
    return {
        get : function() {
            return $http.get('/treks');
        },
        update : function(id, data){
            return $http.put('/treks/' + id, data);
        },
        create : function(data) {
            return $http.post('/treks', data);
        },
        delete : function(id) {
            return $http.delete('/treks/' + id);
        }
    }
};
