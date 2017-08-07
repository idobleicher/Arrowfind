app.controller('monitormainController', ['$rootScope','$scope','$timeout','SweetAlert','$sce', function ($rootScope,$scope, $timeout, SweetAlert, $watch, $sce) {
    $scope.resultSearchData = 
[{
	"id": 22223046,
	"Product_Source": "https://www.walmart.com/ip/22223046",
	"SourcePrice": 339,
	"Ebay_Link": "http://www.ebay.com/itm/222598835197",
	"Ebay_Price": 524,
    "Title": "Fishing boat ",
    "Margin" : 26
}, {
	"id": 22223046,
	"Product_Source": "https://www.walmart.com/ip/22223046",
	"SourcePrice": 339,
	"Ebay_Link": "http://www.ebay.com/itm/222598835197",
	"Ebay_Price": 524,
    "Title": "Home boat ",
    "Margin" : 26
}, {
	"id": 22223046,
	"Product_Source": "https://www.walmart.com/ip/22223046",
	"SourcePrice": 339,
	"Ebay_Link": "http://www.ebay.com/itm/222598835197",
	"Ebay_Price": 524,
    "Title": "cooking ",
    "Margin" : 26
}, {
	"id": 34719050,
	"Product_Source": "https://www.walmart.com/ip/34719050",
	"SourcePrice": 15,
	"Ebay_Link": "http://www.ebay.com/itm/112504916573",
	"Ebay_Price": 22,
    "Title": "football ",
    "Margin" : 23}
, {
	"id": 34719050,
	"Product_Source": "https://www.walmart.com/ip/34719050",
	"SourcePrice": 15,
	"Ebay_Link": "http://www.ebay.com/itm/112504916573",
	"Ebay_Price": 22,
     "Title": "soccer ",
    "Margin" : 23}
, {	"id": 34719050,
	"Product_Source": "https://www.amazon.com/dp/B0123232",
	"SourcePrice": 122,
	"Ebay_Link": "http://www.ebay.com/itm/112504916573",
	"Ebay_Price": 165,
     "Title": "sony ",
    "Margin" : 29}]

    $scope.PaidDays = 5;

$scope.precent = 0;
    $scope.resultsSearchUpdated = $scope.resultSearchData;
    // $scope.$watch('precent', function () {
    //     $scope.precent = 200;
    //   });
$scope.allitems = "";

$scope.nichename = "";

$scope.nichechecked = false;
$scope.dollars = 0;

$scope.BREAK_EVEN = 0.82;


$scope.copyall = function(name){
   window.swal("Good job! " + name + " Items" , "The Items Has been saved to CLIPBOARD - Cntrl + C!", "success");
};

$scope.copyset = function(name){
var copies = "";
for(var current=0;current<$scope.resultsSearchUpdated.length;current++) 
{
    
   

    if(name == "amazon" && $scope.resultsSearchUpdated[current].Product_Source.indexOf("amazon")!= -1)
    {
         copies += $scope.resultsSearchUpdated[current].id + " <br/> ";
    }
    else if(name == "walmart" && $scope.resultsSearchUpdated[current].Product_Source.indexOf("walmart")!= -1)
    {
        copies += $scope.resultsSearchUpdated[current].id + " <br/> ";
    }
    else if(name == "all")
    {
        copies += $scope.resultsSearchUpdated[current].id + " <br/> ";
    }
}
   $scope.allCopyData = copies;
$scope.trustedHtml = $sce.trustAsHtml($scope.allCopyData);
};



 $scope.changePrecent = function(precent) {
        if(precent != -1)
        {
        // Precent is changing
        $scope.precent = precent;
        //var indexdown  = 0;
        }

        $scope.resultsSearchUpdated = [];

        for(var current=0;current<$scope.resultSearchData.length;current++) 
        {
            if(angular.lowercase($scope.resultSearchData[current].Title).indexOf(angular.lowercase($scope.nichename)) != -1
             && $scope.resultSearchData[current].Margin >= $scope.precent && 
             $scope.resultSearchData[current].Ebay_Price * $scope.BREAK_EVEN - $scope.resultSearchData[current].SourcePrice>= $scope.dollars)
            {

                $scope.resultsSearchUpdated.push($scope.resultSearchData[current]);

            }
        }
      };


 $scope.changeDollars = function(dollars) {
        if(dollars != -1)
        {
        // Precent is changing
        $scope.dollars = dollars;
        //var indexdown  = 0;
        }

        $scope.resultsSearchUpdated = [];

        for(var current=0;current<$scope.resultSearchData.length;current++) 
        {
            if(angular.lowercase($scope.resultSearchData[current].Title).indexOf(angular.lowercase($scope.nichename)) != -1
             && $scope.resultSearchData[current].Margin >= $scope.precent && 
             $scope.resultSearchData[current].Ebay_Price * $scope.BREAK_EVEN - $scope.resultSearchData[current].SourcePrice>= $scope.dollars)
            {
                $scope.resultsSearchUpdated.push($scope.resultSearchData[current]);
            }
        }
      };




 $scope.updateFillterNiche = function(myniche,event) {

        $scope.resultsSearchUpdated = [];

        if(event.keyCode == 8 && myniche.length != 0)
        {
            myniche = myniche.substring(0,myniche.length - 1);
            // How to Fillter Both
        }

        $scope.nichename = myniche;

        for(var current=0;current<$scope.resultSearchData.length;current++) 
        {
            if(angular.lowercase($scope.resultSearchData[current].Title).indexOf(angular.lowercase($scope.nichename)) != -1
             && $scope.resultSearchData[current].Margin >= $scope.precent && 
             $scope.resultSearchData[current].Ebay_Price * $scope.BREAK_EVEN - $scope.resultSearchData[current].SourcePrice>= $scope.dollars)
            {
                $scope.resultsSearchUpdated.push($scope.resultSearchData[current]);
            }
        }

      };

}]);   