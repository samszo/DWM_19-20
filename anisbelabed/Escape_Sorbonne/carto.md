<!DOCTYPE html>
<html>
<head>
	<title>Cartographie</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
	<link href='http://fonts.googleapis.com/css?family=Lato:900,300' rel='stylesheet' type='text/css'>
	<link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
	<style>
		html {background: #222222; padding: 40px 200px;font-family: 'Lato', sans-serif;}
		h2,p {color: white;}
		.gitButton{
			padding:15px 30px;
			background-color: #47a230;
			text-decoration: none;
			font-weight: 900;
			color: white;
			text-transform:uppercase;
			transition: background-color .5s;
			border: none;
    		border-radius: 2px;
    		cursor: pointer;
		}
		.gitButton:hover {background-color: #1d7806}
		.gitButton:visited {color: white;}
		.manualButton {
			padding:15px 30px;
			background-color: #308ba2;
			margin-left: 40px;
			text-decoration: none;
			font-weight: 900;
			color: white;
			text-transform:uppercase;
			transition: background-color .5s;
			border: none;
    		border-radius: 2px;			
    		cursor: pointer;
		}
	</style>


</head>

<body class="easyPrint">
	<h2>La carte  de Escape Sorbonne</h2>
	<div id="map" style="height:400px; width:900px"></div>
	<script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
	<script src="dist/bundle.js"></script>
	<script>
		var map = L.map('map').setView([48.8484556,2.3432774], 16);
		var tiles = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.png', {
			maxZoom: 18,
			attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
		}).addTo(map);
		L.marker([48.8484556,2.3432774]).addTo(map)
		.bindPopup("<b>Bonjour!</b><br />je suis la Sorbonne").openPopup();
		L.circle([48.847337, 2.344193], {
			color: 'red',
			fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 80
		}).addTo(map).bindPopup("sorbonne I.");
		L.polygon([
			[48.848899, 2.343585],
			[48.849354, 2.344539],
			[48.849368, 2.343386]
			]).addTo(map).bindPopup("Bibliothéque de sorbonne.");
		var popup = L.popup();
		var printer = L.easyPrint({
      		tileLayer: tiles,
      		sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
      		filename: 'myMap',
      		exportOnly: true,
      		hideControlContainer: true
		}).addTo(map);
		function manualPrint () {
			printer.printMap('CurrentSize', 'MyManualPrint')
		}
	</script>
	<p class="testing">Vous pouvez imprimer la carte</p>
	<br><br>
	<a href="https://github.com/anisbelabed" target="_blank"><button class="gitButton"><i class="fa fa-github fa-lg"></i>&nbsp;&nbsp; pour accéder a notre page github</button></a>
	<button class="manualButton" onclick="manualPrint()">Imprimer</button>

</body>

</html>
