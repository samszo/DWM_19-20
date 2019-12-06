<?php

if(isset($_POST['valider']))
{
$rubrique=$_POST['rubrique']; 
$content=$_POST['content']; 
echo "Votre rubrique est : " . $rubrique . "<br>Votre message est : " . $content; 

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
$sql='INSERT INTO rubrique (id,titre,texte,date) VALUES (NULL,"'.$rubrique.'", "'.$content.'",NOW())'; 
// Execution de la requête sql avec $connect->query()
/*$retour = $connect->query($sql);
if($retour) echo "<br>" . "écriture de la rubrique réussie"; 
else echo "Erreur de la rubrique"; */
$req=mysqli_query($connect,$sql) or die('<br> Bug sql '.$sql.'<br>'.mysqli_error($connect));
}
?>







<html>
    <head>
        
        <title>

        </title>
    </head>
    <body>
                
                <form action=" " method="post">
                <p>
                  Rubrique :  <input type="text" name="rubrique" />
                  <br/>
                  Texte :  <textarea name="content" id="" cols="30" rows="10"></textarea>
                  <br/>
                    <input type="submit" value="Valider" name="valider" />
                </p>
            
                    
            </form>
        
    </body>
</html>