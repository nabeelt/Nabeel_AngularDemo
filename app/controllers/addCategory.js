app.controller("addCategory",['$scope','$localStorage',function ($scope,$localStorage) {
		$scope.categoryJSON =[];
		$scope.activity;
		if($localStorage.categoryJSON){
			$scope.categoryJSON = $localStorage.categoryJSON;
		}
		$scope.addNewCategory = function(){
			$scope.categoryJSON.push({
					category : $scope.category,
					activities : []
				});
			$localStorage.categoryJSON = $scope.categoryJSON;
		}
		$scope.removeCategory = function(index){
			$scope.categoryJSON.splice(index,1);
		}
		$scope.addNewActivity = function(index,activity){
			$scope.categoryJSON[index].activities.push(activity);
			$localStorage.categoryJSON = $scope.categoryJSON;
		}
		$scope.removeActivity = function(index,parent){
			debugger;
			$scope.categoryJSON[parent].activities.splice(index,1);
		}
	}]);

