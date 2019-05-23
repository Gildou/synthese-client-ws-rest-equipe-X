function chargerProduits() {
	$.getJSON("http://localhost:8080/synthese-serveur-ejb-ws-equipe-3.1/magasins/allProduits",function(data) {
		$("#tableBody").html("");
		for(i in data) {
			$tr=$("<tr>");
			$td=$("<td>").append(data[i]['idProduit']);$tr.append($td);
			$td=$("<td>").append(data[i]['nomProduit']);$tr.append($td);
			$td=$("<td>").append(data[i]['stock']);$tr.append($td);
			$td=$("<td>").append(data[i]['prix']);$tr.append($td);
			$td=$("<td>").append(data[i]['magasin']);$tr.append($td);
			$("#tableBody").append($tr);
		}
	});
	
}

function chargerMagasins() {
	$.getJSON("http://localhost:8080/synthese-serveur-ejb-ws-equipe-3.1/magasins/allMagasins",function(data) {
		$("#tableBody").html("");
		for(i in data) {
			$tr=$("<tr>");
			$td=$("<td>").append(data[i]['idMagasin']);$tr.append($td);
			$td=$("<td>").append(data[i]['nomMagasin']);$tr.append($td);
			$td=$("<td>").append(data[i]['codeMagasin']);$tr.append($td);
			$td=$("<td>").append(data[i]['prixDuLocal']);$tr.append($td);
			$("#tableBody").append($tr);
		}
	});
	
}