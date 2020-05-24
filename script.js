//un tableau contenant les sources des images
var imgSrc = ['./img/slide1.jpg', './img/slide2.jpg', './img/slide3.jpg', './img/slide4.jpg', './img/slide5.jpg'];
var img = document.querySelector('#image'); //récupérer la balise d'image par l'id
var i = 0;                                  //identifier le compteur

setInterval(next, 3000);                    // le défilement automatique

// la fonction qui montre l'image suivante
function next() {
  if (i < imgSrc.length - 1) { // si le compteur n'est pas arrivé à la dernière image
    i++;                       // ajouter un au compteur pour passer à l'image suivante
    img.src = imgSrc[i];       // changer la source d'image en fonction du compteur
  } else {
    i = 0;                     // Si le compteur atteint la dernière image, il recommence en mettant la valeur à zéro
    img.src = imgSrc[i]; 
  } 
}

// la fonction qui montre l'image précédente  
function prev() {
  if(i <= 0){ i = imgSrc.length; } //Si le compteur atteint la première image, il recommence en mettant la valeur au max
  i--;                             // faire tomber un du compteur pour passer à l'image précédente
  img.src = imgSrc[i];             // changer la source d'image en fonction du compteur
}  

// la fonction qui ajoute des nouvelles images
document.querySelector('input[type="file"]').addEventListener('change', function(e) { // ajouter un écouteur d'événements au input file
  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;                             // Définir les formats des images autorisées à charger
    
  if (!allowedExtensions.exec(this.files[0].name)) { // si le format d'image ne correspond pas au format autorisé
    alert('Type de fichier invalide');               // afficher cette message 
    return false;                                    // arrêter le processus
  } else {                                           // si le format d'image correspond au format autorisé 
    src = URL.createObjectURL(this.files[0]);        // set src to blob url
    imgSrc.push(src);                                // ajouter le source de l'image au tableau
    alert('New image has been added to the slider'); // message de confirmation
  } 
});
