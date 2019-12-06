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
$sql='SELECT * FROM rubrique WHERE id='.$_GET['id'].''; 
// Execution de la requête sql avec $connect->query()
$req=mysqli_query($connect,$sql) or die('<br> Bug sql '.$sql.'<br>'.mysqli_error($connect));

while($donnee=mysqli_fetch_assoc($req))
{
    echo "Titre : ".$donnee['titre']."<br>";
    echo "Texte : ".$donnee['texte']."<br>";
}
?>