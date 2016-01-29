angular.module('infinite', [])

angular.module('infinite')
	.controller('conScroller',['$scope','$interval', function($scope, $interval){
			
			console.log('hello')
			
			//Create a year's worth of days and place them in the year array

			$scope.today = new Date();

			$scope.year = []
			
			for (i = 1 ; i <= 365 ; i ++){
				var now = new Date();
				now.setDate(now.getDate() + i);
				$scope.year.push(now);
			}


			// Monitor user's progress down the page and toggle ng-repeat to increase limit

			
			$interval(function(){
				var scrollTop = document.scrollingElement.scrollTop;
				var scrollHeight = document.documentElement.scrollHeight;
				var pageRatio =  scrollHeight / scrollTop   ;

				// console.log(scrollTop, scrollHeight, pageRatio)

					if(pageRatio < 1.25) {
						$scope.pagesDisplayed += 3
					}

			},300)



			$scope.pagesDisplayed = 10;

		


			$scope.hours = [

				{
					time : 1200
				},

				{
					time : 100
				},

				{
					time : 200
				},

				{
					time : 300
				},

				{
					time : 400
				},

				{
					time : 500
				},

				{
					time : 600
				},

			]

	}])