// Traducción por idiomas
const textos = {
    es: {
        titulo: "Receta de Pizza Margherita Casera",
        ingredientes: "Ingredientes",
        descripcionIngredientes: "Para preparar esta deliciosa pizza necesitarás:",
        listaIngredientes: [
            "250 g de harina",
            "150 ml de agua",
            "25 g de levadura fresca",
            "200 g de salsa de tomate",
            "200 g de queso mozzarella",
            "Hojas frescas de albahaca",
            "1 cucharada de aceite de oliva",
            "Sal al gusto"
        ],
        instrucciones: "Instrucciones",
        descripcionInstrucciones: "Sigue estos pasos para preparar tu pizza:",
        listaInstrucciones: [
            "Precalienta el horno a 220°C.",
            "Disuelve la levadura en agua tibia.",
            "Mezcla la harina con la levadura, el agua y una pizca de sal. Amasa hasta obtener una masa homogénea.",
            "Deja reposar la masa durante 1 hora.",
            "Extiende la masa sobre una superficie enharinada.",
            "Agrega la salsa de tomate, el queso mozzarella y las hojas de albahaca.",
            "Hornea durante 10-15 minutos hasta que esté dorada."
        ],
        curiosidades: "Curiosidades sobre la Pizza Margherita",
        textoCuriosidad: "La pizza Margherita fue creada en honor a la Reina Margarita de Saboya en 1889.",
    },
    en: {
        titulo: "Homemade Margherita Pizza Recipe",
        ingredientes: "Ingredients",
        descripcionIngredientes: "To prepare this delicious pizza you'll need:",
        listaIngredientes: [
            "250 g of flour",
            "150 ml of water",
            "25 g of fresh yeast",
            "200 g of tomato sauce",
            "200 g of mozzarella cheese",
            "Fresh basil leaves",
            "1 tablespoon of olive oil",
            "Salt to taste"
        ],
        instrucciones: "Instructions",
        descripcionInstrucciones: "Follow these steps to prepare your pizza:",
        listaInstrucciones: [
            "Preheat the oven to 220°C.",
            "Dissolve the yeast in warm water.",
            "Mix the flour with yeast, water, and a pinch of salt. Knead until smooth.",
            "Let the dough rest for 1 hour.",
            "Roll out the dough on a floured surface.",
            "Add the tomato sauce, mozzarella cheese, and basil leaves.",
            "Bake for 10-15 minutes until golden."
        ],
        curiosidades: "Curiosities about Margherita Pizza",
        textoCuriosidad: "The Margherita pizza was created in honor of Queen Margherita of Savoy in 1889.",
    },
    it: {
        titulo: "Ricetta Pizza Margherita Fatta in Casa",
        ingredientes: "Ingredienti",
        descripcionIngredientes: "Per preparare questa deliziosa pizza hai bisogno di:",
        listaIngredientes: [
            "250 g di farina",
            "150 ml di acqua",
            "25 g di lievito fresco",
            "200 g di salsa di pomodoro",
            "200 g di mozzarella",
            "Foglie fresche di basilico",
            "1 cucchiaio di olio d'oliva",
            "Sale a piacere"
        ],
        instrucciones: "Istruzioni",
        descripcionInstruzioni: "Segui questi passaggi per preparare la tua pizza:",
        listaInstrucciones: [
            "Preriscalda il forno a 220°C.",
            "Sciogli il lievito in acqua tiepida.",
            "Mescola la farina con il lievito, l'acqua e un pizzico di sale. Impasta fino a ottenere un impasto omogeneo.",
            "Lascia riposare l'impasto per 1 ora.",
            "Stendi l'impasto su una superficie infarinata.",
            "Aggiungi la salsa di pomodoro, la mozzarella e le foglie di basilico.",
            "Cuoci per 10-15 minuti fino a doratura."
        ],
        curiosidades: "Curiosità sulla Pizza Margherita",
        textoCuriosidad: "La pizza Margherita è stata creata in onore della Regina Margherita di Savoia nel 1889.",
    },
};

// Cambiar idioma
document.getElementById("cambiar-idioma").addEventListener("change", function (e) {
    const idioma = e.target.value;

    // Cambiar título principal
    document.getElementById("titulo-principal").textContent = textos[idioma].titulo;

    // Cambiar ingredientes
    document.getElementById("titulo-ingredientes").textContent = textos[idioma].ingredientes;
    document.getElementById("descripcion-ingredientes").textContent = textos[idioma].descripcionIngredientes;

    const listaIngredientes = document.getElementById("lista-ingredientes");
    listaIngredientes.innerHTML = ""; // Vaciar lista de ingredientes
    textos[idioma].listaIngredientes.forEach((ingrediente) => {
        const li = document.createElement("li");
        li.textContent = ingrediente;
        listaIngredientes.appendChild(li);
    });

    // Cambiar instrucciones
    document.getElementById("titulo-instrucciones").textContent = textos[idioma].instrucciones;
    document.getElementById("descripcion-instrucciones").textContent = textos[idioma].descripcionInstrucciones;

    const listaInstrucciones = document.getElementById("lista-instrucciones");
    listaInstrucciones.innerHTML = ""; // Vaciar lista de instrucciones
    textos[idioma].listaInstrucciones.forEach((instruccion) => {
        const li = document.createElement("li");
        li.textContent = instruccion;
        listaInstrucciones.appendChild(li);
    });

    // Cambiar curiosidades
    document.getElementById("titulo-curiosidades").textContent = textos[idioma].curiosidades;
    document.getElementById("texto-curiosidad").textContent = textos[idioma].textoCuriosidad;
});

// Función de imprimir receta
document.getElementById("imprimir-receta").addEventListener("click", () => {
    window.print();
});

// Compartir en Facebook
document.getElementById("compartir-facebook").addEventListener("click", () => {
    const url = "https://tu-sitio-web.com";
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, "_blank");
});

// Compartir en Twitter
document.getElementById("compartir-twitter").addEventListener("click", () => {
    const url = "https://tu-sitio-web.com";
    const text = "¡Descubre esta deliciosa receta de Pizza Margherita casera!";
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, "_blank");
});

// Mostrar dato curioso aleatorio
document.getElementById("boton-curiosidad").addEventListener("click", () => {
    const datosCuriosos = [
        "La pizza Margherita fue creada en honor a la Reina Margarita de Saboya en 1889.",
        "Los colores de la pizza representan la bandera italiana: rojo (salsa), blanco (queso) y verde (albahaca).",
        "El Día Mundial de la Pizza se celebra el 9 de febrero.",
        "La pizza más cara del mundo cuesta más de $12,000 y se llama Louis XIII.",
        "La pizza hawaiana fue inventada en Canadá."
    ];

    const indiceAleatorio = Math.floor(Math.random() * datosCuriosos.length);
    const datoCurioso = datosCuriosos[indiceAleatorio];
    document.getElementById("texto-curiosidad").textContent = datoCurioso;
    document.getElementById("curiosidad").style.display = "block";
});

// Cerrar ventana emergente
document.getElementById("cerrar-curiosidad").addEventListener("click", () => {
    document.getElementById("curiosidad").style.display = "none";
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
