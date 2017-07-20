



angular.module("feira-app").controller("listaSeriesCtrl", function ($state,$scope,$http,$mdSidenav,$mdDialog) {
	$scope.app = "Lista De Séries";
	$scope.series = [];
	$scope.minhasSeries = [];
	$scope.watchlist = [];
	$scope.idSerieBuscada = {};
	$scope.notasSeries = [];
	$scope.serieDoPerfil = {};
	$scope.seriesUsuario = [];
	$scope.emailLogado = "";

	    $scope.cadastrar = function(email, senha,nome){

	        var url = "/cadastro";

	        console.log(nome);
	        var data = {

	            "email": email,
	            "senha": senha,
	            "nome":nome
	        };


	        $http.post(url, data).then(function (response) {
	        	
	            alert("Usuário cadastrado com sucesso!");

	        }, function (response) {


	            $scope.postResultMessage = "Fail!";
	        });
	    }



	    $scope.logar = function(email,senha){
	        var url = "/logar";


	        var data = {

	            email: email,
	            senha: senha
	        };

	        $http.post(url, data).then(function (response) {


	            if(response.data){

	              
	              
	                $state.go("main.home");
	                $scope.emailLogado = email;
	            }else{
	                alert("Dados inválidos ou usuário não cadastrado");
	            }



	        }, function (response) {

	            console.log("deu errado");
	            $scope.postResultMessage = "Fail!";
	        });
	    }
	
	
	

	
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
	
	$scope.pegaSerie = function(){
		var url = "/serie/" + $scope.emailLogado;
		$http.get(url).then(function (response) {
			$scope.seriesUsuario = response.data;
			$scope.buscaNaApi();
			
    	 }, function (response) {
    		 

            $scope.postResultMessage = "Fail!";
        });
		
	}
	
	$scope.buscaNaApi = function(){
		console.log($scope.seriesUsuario);
		for (var i = 0; i < $scope.seriesUsuario.length; i++) {
			$http.get("https://omdbapi.com/?i="+ $scope.seriesUsuario[i].id_imbdb +"&apikey=93330d3c&type=series").then(function(response) {
				$scope.minhasSeries.push(response.data);
					
				
				
		});
			
		}
	}

	$scope.addSeriePerfil = function(serie){
		var url = "/seriesperfil";
        var data = {
            "id_imbdb":serie.imdbID,
            "userId": $scope.emailLogado
        };
        console.log($scope.emailLogado);
        $http.post(url, data).then(function (response) {
        	if(response.data){
        		alert("série já pertence ao seu perfil");
        	}
        	else{
    		 //	$scope.minhasSeries.push(serie);
    		 //	$scope.notasSeries.push({serie,"nota":"","episodio":""});
    		 	$scope.addBD(serie);
    		 	
    		 }
    		 $scope.removeSerieWatchlist(serie);
    		
    		 
    		 $scope.pegaSerie();
    		
    	 }, function (response) {
    		 

            $scope.postResultMessage = "Fail!";
        });

		
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

	
	
	
	$scope.addBD = function(serie){
		var url = "/salvar";
        var data = {
            "id_imbdb":serie.imdbID,
            "userId": $scope.emailLogado,
          
        };
        


        $http.post(url, data).then(function (response) {
    	 }, function (response) {


            $scope.postResultMessage = "Fail!";
        });

	}
	
	
	
	$scope.removeSerieWatchlist = function(serie){
		for (var i = $scope.watchlist.length - 1; i >= 0; i--) {
			if($scope.watchlist[i].Title == serie.Title){
				$scope.watchlist.splice(i, 1);
				
			}
		}
	}






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