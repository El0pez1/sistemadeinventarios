

angular.module('inventario').controller('EditequipoinformaticoController', function($scope, $routeParams, $location, flash, equipoinformaticoResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.equipoinformatico = new equipoinformaticoResource(self.original);
        };
        var errorCallback = function() {
            flash.setMessage({'type': 'error', 'text': 'The equipoinformatico could not be found.'});
            $location.path("/equipoinformaticos");
        };
        equipoinformaticoResource.get({equipoinformaticoId:$routeParams.equipoinformaticoId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.equipoinformatico);
    };

    $scope.save = function() {
        var successCallback = function(){
            flash.setMessage({'type':'success','text':'The equipoinformatico was updated successfully.'}, true);
            $scope.get();
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        $scope.equipoinformatico.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/equipoinformaticos");
    };

    $scope.remove = function() {
        var successCallback = function() {
            flash.setMessage({'type': 'error', 'text': 'The equipoinformatico was deleted.'});
            $location.path("/equipoinformaticos");
        };
        var errorCallback = function(response) {
            if(response && response.data && response.data.message) {
                flash.setMessage({'type': 'error', 'text': response.data.message}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        }; 
        $scope.equipoinformatico.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});