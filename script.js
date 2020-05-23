//un tableau contenant les sources des images
var imgSrc = ['./img/slide1.jpg', './img/slide2.jpg', './img/slide3.jpg', './img/slide4.jpg', './img/slide5.jpg'];
var img = document.querySelector('#image'); //récupérer la balise d'image par l'id
var i = 0; //identifier le compteur

// la fonction qui montre l'image suivante
function next() {
  if (i < imgSrc.length - 1) { // si le compteur n'est pas arrivé à la dernière image
    i++;                       // ajouter un au compteur pour passer à l'image suivante
    img.src = imgSrc[i];       // changer la source d'image en fonction du compteur
  } else {
    i = 0;     // Si le compteur atteint la dernière image, il recommence en mettant la valeur à zéro
    img.src = imgSrc[i]; 
  } 
}

// la fonction qui montre l'image précédente  
function prev() {
  if(i <= 0){ i = imgSrc.length; } //Si le compteur atteint la première image, il recommence en mettant la valeur au max
  i--;                  // faire tomber un du compteur pour passer à l'image précédente
  img.src = imgSrc[i];  // changer la source d'image en fonction du compteur
}  

var timer = setInterval(next, 3000); //  le défilement automatique

document.querySelector('input[type="file"]').addEventListener('change', function(e) {
  src = URL.createObjectURL(this.files[0]); // set src to blob url
  
  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i; 
    
  if (!allowedExtensions.exec(this.files[0].name)) { 
    alert('Type de fichier invalide'); 
    this.value = ''; 
    return false; 
  } else {
    imgSrc.push(src);
    alert('New image has been added to the slider');
  } 
});
