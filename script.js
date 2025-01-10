// Traducción por idiomas
const textos = {
    es: {
        titulo: "Receta de Pizza Margherita Casera",
        ingredientes: "Ingredientes",
        descripcionIngredientes: "Para preparar esta deliciosa pizza necesitarás:",
        instrucciones: "Instrucciones",
        descripcionInstrucciones: "Sigue estos pasos para preparar tu pizza:",
        curiosidades: "Curiosidades sobre la Pizza Margherita",
        textoCuriosidad: "La pizza Margherita fue creada en honor a la Reina Margarita de Saboya en 1889. Sus colores representan la bandera italiana: rojo (salsa), blanco (queso) y verde (albahaca).",
    },
    en: {
        titulo: "Homemade Margherita Pizza Recipe",
        ingredientes: "Ingredients",
        descripcionIngredientes: "To prepare this delicious pizza you'll need:",
        instrucciones: "Instructions",
        descripcionInstrucciones: "Follow these steps to prepare your pizza:",
        curiosidades: "Curiosities about Margherita Pizza",
        textoCuriosidad: "The Margherita pizza was created in honor of Queen Margherita of Savoy in 1889. Its colors represent the Italian flag: red (sauce), white (cheese), and green (basil).",
    },
    it: {
        titulo: "Ricetta Pizza Margherita Fatta in Casa",
        ingredientes: "Ingredienti",
        descripcionIngredientes: "Per preparare questa deliziosa pizza hai bisogno di:",
        instrucciones: "Istruzioni",
        descripcionInstrucciones: "Segui questi passaggi per preparare la tua pizza:",
        curiosidades: "Curiosità sulla Pizza Margherita",
        textoCuriosidad: "La pizza Margherita è stata creata in onore della Regina Margherita di Savoia nel 1889. I suoi colori rappresentano la bandiera italiana: rosso (salsa), bianco (formaggio) e verde (basilico).",
    },
};

// Cambiar idioma
document.getElementById("cambiar-idioma").addEventListener("change", function (e) {
    const idioma = e.target.value;
    document.getElementById("titulo-principal").textContent = textos[idioma].titulo;
    document.getElementById("titulo-ingredientes").textContent = textos[idioma].ingredientes;
    document.getElementById("descripcion-ingredientes").textContent = textos[idioma].descripcionIngredientes;
    document.getElementById("titulo-instrucciones").textContent = textos[idioma].instrucciones;
    document.getElementById("descripcion-instrucciones").textContent = textos[idioma].descripcionInstrucciones;
    document.getElementById("titulo-curiosidades").textContent = textos[idioma].curiosidades;
    document.getElementById("texto-curiosidad").textContent = textos[idioma].textoCuriosidad;
});

// Barra de progreso
window.addEventListener("scroll", () => {
    const scrollTotal = document.body.scrollHeight - window.innerHeight;
    const scrollActual = window.scrollY;
    const porcentaje = (scrollActual / scrollTotal) * 100;
    document.getElementById("barra-progreso").style.width = porcentaje + "%";
});

// Efecto parallax
window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    document.querySelector(".decoracion-izquierda img").style.setProperty("--scroll", `${scroll * 0.3}px`);
    document.querySelector(".decoracion-derecha img").style.setProperty("--scroll", `${scroll * 0.3}px`);
});

// Modal de video
const modalVideo = document.querySelector(".modal");
const cerrarModal = document.getElementById("cerrar-modal");

modalVideo.addEventListener("click", () => {
    modalVideo.style.display = "none";
});
cerrarModal.addEventListener("click", (e) => {
    modalVideo.style.display = "none";
    e.stopPropagation();
});

// Compartir en redes sociales
document.getElementById("compartir-facebook").addEventListener("click", () => {
    const url = "https://mi-sitio-web.com/receta";
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, "_blank");
});
document.getElementById("compartir-twitter").addEventListener("click", () => {
    const url = "https://mi-sitio-web.com/receta";
    const text = "¡Mira esta deliciosa receta de pizza Margherita!";
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank");
});

// Ventana emergente
document.getElementById("boton-curiosidad").addEventListener("click", () => {
    document.getElementById("curiosidad").style.display = "block";
});
document.getElementById("cerrar-curiosidad").addEventListener("click", () => {
    document.getElementById("curiosidad").style.display = "none";
});

// Imprimir receta
document.getElementById("imprimir-receta").addEventListener("click", () => {
    window.print();
});

// Botón "Volver arriba"
const botonArriba = document.getElementById("volver-arriba");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
});

botonArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
