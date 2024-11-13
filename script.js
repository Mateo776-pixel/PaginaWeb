// Diccionario de comentarios (genéricos y de Steve)
const comentariosDiccionario = {
    genericos: [
        "Legendary", "Let them sleep", "Good project", "Nice work!", "Can't believe it", 
        "🔥", "Mr. roo help me out", "This is the best slot video", "Love this!", "Amazing spin!",
        "yuh", "Congratulations", "Guys don’t play it 😂😂", "Big win!", "Nice hit!",
        "absolutely insane", "The best", "This is crazy", "Unbelievable!", "This is fire",
        "Total fraud", "He cooked", "Ya man!", "This is rigged", "What a scam!",
        "Savage", "Bro the rizzler needs that", "Holy cow", "Insane!", "That’s my boy"
    ],
    steve: [
        "STEVEEEEEEEEE THE GOATTTTT", "Good stuff Steve", "yesssir steve", "StevewillWIN", 
        "Crazy steve", "Stevedidit", "Steve is so hot", "Good man Steve", "Steve for president", 
        "My favorite white person", "God bless you steve", "That’s my Steve!", "Job Steve"
    ]
};

// Lista de cuentas de Instagram
const cuentas = [
    "stailyspencer", "justingriffindc", "ale.rojasig7", "_pinto.martin", 
    "Roberto.Madero97", "lera.juli20"
];

// Función para generar comentarios aleatorios para cada cuenta
document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const postLink = document.getElementById("postLink").value;
    const commentCount = parseInt(document.getElementById("commentCount").value);
    const commentType = document.querySelector('input[name="commentType"]:checked')?.value;

    // Verificar el valor capturado de commentType
    console.log("Tipo de comentario seleccionado:", commentType);

    // Aseguramos que commentType tenga un valor válido
    if (!commentType || !comentariosDiccionario[commentType]) {
        alert("Por favor selecciona un tipo de comentario válido.");
        return; // Salir de la función si no se selecciona un tipo de comentario válido
    }

    const postContainer = document.getElementById("postContainer");
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    const linkElement = document.createElement("a");
    linkElement.href = postLink;
    linkElement.textContent = postLink;
    linkElement.target = "_blank";
    postDiv.appendChild(linkElement);

    // Creamos un conjunto para hacer un seguimiento de las cuentas y comentarios seleccionados
    let cuentasUsadas = new Set();
    let comentariosUsados = new Set();

    // Generamos comentarios aleatorios
    for (let i = 1; i <= commentCount; i++) {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        // Seleccionamos una cuenta aleatoriamente sin repetir
        let cuentaAleatoria;
        do {
            cuentaAleatoria = cuentas[Math.floor(Math.random() * cuentas.length)];
        } while (cuentasUsadas.has(cuentaAleatoria)); // Aseguramos que la cuenta no se repita
        cuentasUsadas.add(cuentaAleatoria);

        // Seleccionamos un comentario aleatorio sin repetir
        let comentarioAleatorio;
        do {
            comentarioAleatorio = comentariosDiccionario[commentType][Math.floor(Math.random() * comentariosDiccionario[commentType].length)];
        } while (comentariosUsados.has(comentarioAleatorio)); // Aseguramos que el comentario no se repita
        comentariosUsados.add(comentarioAleatorio);

        // Generamos el comentario con la cuenta y el comentario aleatorio
        commentElement.textContent = `@${cuentaAleatoria}: ${comentarioAleatorio}`;
        postDiv.appendChild(commentElement);
    }

    postContainer.appendChild(postDiv);
    document.getElementById("postLink").value = "";
    document.getElementById("commentCount").value = "";
});
