



angular.module("feira-app").controller("listaSeriesCtrl", function ($state,$scope,$http,$mdSidenav,$mdDialog) {
	$scope.app = "Lista De Séries";
	$scope.series = [];
	$scope.minhasSeries = [];
	$scope.watchlist = [];
	$scope.idSerieBuscada = {};
	$scope.notasSeries = [];
	$scope.serieDoPerfil = {};


	
	$scope.pesquisarSerie = function(nomeSerie){
		$http.get("https://omdbapi.com/?s=" + nomeSerie + "&apikey=93330d3c&type=series").then(function(response) {
			if(response.data.Response == "True"){
				$scope.series = response.data.Search;

				
			}else{
				alert("a série nao existe");
			};

			delete $scope.nomeSerie;
	});
	}	


	


		      

	$scope.buscaInfoSerie = function (key,ev) {
		        $http.get("https://omdbapi.com/?i="+ key +"&apikey=93330d3c&type=series").then(function (response) {
		        	$scope.idSerieBuscada = response.data;
		          
                    console.log(ev);
		        	
		          $mdDialog.show({
		            controller: DialogController,
		            templateUrl: 'alert.html',
		            parent: angular.element(document.body),
		            targetEvent: ev,
		            clickOutsideToClose:true,
		            locals: {
		              idSerieBuscada: $scope.idSerieBuscada
		            }
		          });
		        });



		      }	      
		
		
	function DialogController($scope, $mdDialog, idSerieBuscada) {
		    $scope.idSerieBuscada = idSerieBuscada;

		    $scope.hide = function() {
		      $mdDialog.hide();
		    };

		    $scope.cancel = function() {
		      $mdDialog.cancel();
		    };

		    $scope.answer = function(answer) {
		      $mdDialog.hide(answer);
		    };
		  }	

	$scope.mudaSerieDaVez = function(serie){
		for (var i = $scope.notasSeries.length - 1; i >= 0; i--) {
			if($scope.notasSeries[i].serie.Title == serie.Title){
				$scope.serieDoPerfil = $scope.notasSeries[i];
				
			}
		}
	}


	$scope.addNota = function(serie,notaSerie){
		for (var i = $scope.notasSeries.length - 1; i >= 0; i--) {
			if($scope.notasSeries[i].serie.Title == serie.Title){
				$scope.notasSeries[i].nota = notaSerie;
				
			}
		}
		delete $scope.notaSerie;

	}
	$scope.addEpisodio = function(serie,numeroEp){
		for (var i = $scope.notasSeries.length - 1; i >= 0; i--) {
			if($scope.notasSeries[i].serie.Title == serie.Title){
				$scope.notasSeries[i].episodio = numeroEp;
				
			}
		}
			delete $scope.numeroEp;
	}

	$scope.pertencePerfil = function(serie){


		for (var i = $scope.notasSeries.length - 1; i >= 0; i--) {
			if($scope.notasSeries[i].serie.Title == serie.Title){

				return true;
				
			}
		}
		return false;
	}

	$scope.verificaArray = function(serie,array){
		for (var i = array.length - 1; i >= 0; i--) {
			if(array[i].imdbID == serie.imdbID){
				return true;
				
			}
		}
		return false;
	}
	$scope.addSerieWatch = function(serie){
		if($scope.verificaArray(serie,$scope.watchlist)){
			alert("série já pertence ao seu watchlist");
		}else if ($scope.verificaArray(serie,$scope.minhasSeries)){ 
			alert("série já pertence ao seu perfil");

		}else{

		 
	 
		$scope.watchlist.push(serie);
		}
		
	}

	$scope.addSeriePerfil = function(serie,email){
        console.log(serie.imdbID);
        var url = "/salvar";
            var data = {
                "id_imbdb":serie.imdbID,
                "estaNoPerfil":serie.imdbID,
                "estaNoWatchlist":serie.imdbID,
                "avaliacaoUsuario":serie.imdbID,
                "epAssistido":serie.imdbID
            };


            $http.post(url, data).then(function (response) {
        		if(!response.data){
                        alert("série já pertence ao seu perfil");
        		}



            }, function (response) {


                $scope.postResultMessage = "Fail!";
            });





	    // if($scope.verificaArray(serie,$scope.minhasSeries)){
        //
		// 	alert("série já pertence ao seu perfil");
		// }else{
		// 	$scope.minhasSeries.push(serie);
		// 	$scope.notasSeries.push({serie,"nota":"","episodio":""});
		// }
		// $scope.removeSerieWatchlist(serie);
	}
	$scope.removeSerieWatchlist = function(serie){
		for (var i = $scope.watchlist.length - 1; i >= 0; i--) {
			if($scope.watchlist[i].Title == serie.Title){
				$scope.watchlist.splice(i, 1);
				
			}
		}
	}




    // $scope.addSeriePerfil() = function(serie, email){
    //
    //     var url = "/salvar";
    //     var data = {
    //
    //         "id_imbdb":serie.id_imbdb,
		// 	"estaNoPerfil":email
    //     };
    //
    //
    //     $http.post(url, data).then(function (response) {
		// 		if(!response.data){
    //                 alert("série já pertence ao seu perfil");
		// 		}
    //
    //
    //
    //     }, function (response) {
    //
    //
    //         $scope.postResultMessage = "Fail!";
    //     });
    // }





	$scope.confirmaExclusao = function(serie) {
    	var confirmacao = confirm("Deseja excluir " + serie.Title + " do seu perfil?");

    	if (confirmacao) {
    		$scope.removeSeriePerfil(serie);
    	} 
}

	$scope.removeSeriePerfil = function(serie){


		for (var i = $scope.minhasSeries.length - 1; i >= 0; i--) {
			if($scope.minhasSeries[i].Title == serie.Title){
				$scope.minhasSeries.splice(i, 1);
				$scope.removerNotas(serie);
			}
		}
	}	

	$scope.removerNotas = function(serie){
		for (var i = $scope.notasSeries.length - 1; i >= 0; i--) {
			if($scope.notasSeries[i].serie.Title == serie.Title){
				$scope.notasSeries.splice(i, 1);
				
			}
		}
	}
	

  

  



  
  

});