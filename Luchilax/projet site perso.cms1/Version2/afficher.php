<?php 
//connexion au mysql: 
try
{
$connect = mysqli_connect('localhost', 'root', 'root', 'Site Perso'); 
}
catch (Exeption $e)
{
    die('BUG : ' .$e->getMessage());
    echo "pb conct";
}
$sql='SELECT * FROM rubrique ORDER BY date DESC'; 
// Execution de la requête sql avec $connect->query()
$req=mysqli_query($connect,$sql) or die ('<br> Bug sql'.$sql.'<br>'.mysqli_error($connect));

while($donnee=mysqli_fetch_assoc($req))
{
    echo "<a href='page.php?id=".$donnee['id']."'>".$donnee['titre']."</a><br>";
    echo "_________________________________________<br>";
}
?>