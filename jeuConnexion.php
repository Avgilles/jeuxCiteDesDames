
<?php

$titreJeu = "MatrimoineGo";

$link = new PDO('mysql:host=127.0.0.1;dbname=jcdd', 'root', '', array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));


$clefApiMapbox= 'clef_mapbox';



$accueil_jeu="Relis chaque Portait de chaque femme en les déplaçant avec ton doigt, mais attention à ton score ! Si tu te trompes celui-ci descendras, par contre si tu réussis il augmentera ! Tu peux t'aider des indices en appuyant sur le point d'interrogation en haut des photos de femme ou en appuyant sur les marqueurs. Bonne chance !";


$accueil_drag="Classe les artistes ensemble, grâce aux informations que tu as eu à la première étape tu peux maintenant classer ces femmes en 2 catégories la scène et le salon. Déplace les photos des femmes vers l'endroit qui te semble le plus approprié.";

$choix_jeu="Choisis le parcours que tu veux effectuer.";

    
$bienvenue=" <p><strong>Bienvenue sur MatrimoineGo !</strong></p><p>Grâce à MoitrimoineGo tu vas pouvoir connaître les grandes artistes de ta ville.Le but est de retrouver quelle femmes correspond à quelle oeuvres.</p><p>Tu peux décider de le faire depuis chez toi ou en allant sur place:</p>";

?>