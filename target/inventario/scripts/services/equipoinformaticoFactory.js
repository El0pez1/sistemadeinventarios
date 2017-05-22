angular.module('inventario').factory('equipoinformaticoResource', function($resource){
    var resource = $resource('rest/equipoinformaticos/:equipoinformaticoId',{equipoinformaticoId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});