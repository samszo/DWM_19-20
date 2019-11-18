<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link href="style.css" rel="stylesheet">
    <title>cms</title>
</head>
<body>
    

<?php

if( isset($_POST['submit']) )
{
$rubrique = $_POST['rubrique']; 
$texte = $_POST['texte']; 
$date = date("d-m-Y");
$heure = date("H:i");
Print(" Date création rubrique : $date à $heure");
echo "Votre rubrique est : " . $rubrique . "<br>Votre message est : " . $texte; 
//connexion au mysql: 
$connect = mysqli_connect('localhost', 'root', '', 'cms'); 
$sql = "INSERT INTO page(rubrique, texte) VALUES ('$rubrique', '$texte')"; 
// Execution de la requête
$retour = mysqli_query($connect, $sql); 
if($retour) echo '<div class="alert alert-success">connexion reussie</div>'; 
else echo '<div class="alert alert-danger">Erreur de connexion</div>';  
}
?>
    <form action=""  method="post">
        <div class="form-group col-md-6">
            <label for="nom">Rubrique :</label>
            <input class="form-control" type="text" name="rubrique" placeholder="votre rubrique">
        </div>
        <div class="form-group col-md-6">
            <label for="texte">texte :</label>
            <textarea class="form-control" rows="15" name="texte" placeholder="écrire votre texte"></textarea>
        </div>
            <div class="button col-md-6">
            <button class="btn btn-primary" type="submit" name="submit">Enregistrer</button>
            </div>
     </form>

    
</body>
</html>



