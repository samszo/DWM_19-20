<?php
$row = 1;
$fichier = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRYChirvPQ02QIu5UwLfx3uDcUlTMQxqhOsFikyIvGoy32mQmzCc7t5NFD2vCo-mvTlZusEeXvE6SCl/pub?gid=334952637&single=true&output=csv";
$fp = fopen($fichier, "r"); // ouverture du fichier
$lesdonnees = fgetcsv($fp, 100, ",");
$num = count($lesdonnees);

$row++;
for ($c = 0; $c < $num; $c++) {
    foreach($lesdonnees as $ladonnee){
        echo $ladonnee[$c]. '<br>';
        $row++;
    }
}
fclose($fp);
