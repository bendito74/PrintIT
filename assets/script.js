const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Récupération des éléments du DOM
let ArrowLeft = document.querySelector(".arrow_left");
let ArrowRight = document.querySelector(".arrow_right");
let bannerImg = document.querySelector(".banner-img");
let bannerText = document.querySelector("#banner p");
let dots = document.querySelectorAll(".dot");

// Variable pour suivre l'index du slide actuel
let currentSlideIndex = 0;

// Fonction pour afficher le slide actif
function showSlide(index) {
    bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
    bannerText.innerHTML = slides[index].tagLine;
    // Supprimer la classe "dot_selected" de tous les dots
    dots.forEach(dot => dot.classList.remove("dot_selected"));
    // Ajouter la classe "dot_selected" au dot correspondant à l'index
    dots[index].classList.add("dot_selected");
}

// Ajout d'écouteurs d'événements pour détecter les clics sur les flèches
ArrowLeft.addEventListener("click", function() {
    console.log("Flèche gauche cliquée");
	// Décrémenter l'index du slide actif
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    // Afficher le nouveau slide
    showSlide(currentSlideIndex);
});

ArrowRight.addEventListener("click", function() {
    console.log("Flèche droite cliquée");
	// Incrémenter l'index du slide actif
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    // Afficher le nouveau slide
    showSlide(currentSlideIndex);
});
