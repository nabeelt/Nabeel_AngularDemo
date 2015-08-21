app.controller("addCategory",['$scope','$localStorage',function ($scope,$localStorage) {
		$scope.activity;
		if($localStorage.categoryJSON){
			$scope.categoryJSON = $localStorage.categoryJSON;
		}
		$scope.addNewCategory = function(){
			if($scope.new_category){
				$scope.categoryJSON.push({
					category : $scope.new_category,
					activities : []
				});
			$localStorage.categoryJSON = $scope.categoryJSON;
			}	
		}
		$scope.removeCategory = function(index){
			$scope.categoryJSON.splice(index,1);
		}
		$scope.addNewActivity = function(index,activity){
			if(activity){
				$scope.categoryJSON[index].activities.push(activity);
				$localStorage.categoryJSON = $scope.categoryJSON;
			}
		}
		$scope.removeActivity = function(index,parent){
			$scope.categoryJSON[parent].activities.splice(index,1);
		}
		$scope.todoSortable = {
			cursor : "move",
			tolerance : "intersect"
		}
	}]);

