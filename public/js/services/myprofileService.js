// MYPROFILE SERVICE
function myprofileService($http) {
    return {
        get : function() {
            return $http.get('/myprofiles');
        },
        update : function(id, data){
            return $http.put('/myprofiles/' + id, data);
        },
        create : function(data) {
            return $http.post('/myprofiles', data);
        },
        delete : function(id) {
            return $http.delete('/myprofiles/' + id);
        }
    };
}
