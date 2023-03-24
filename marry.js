let question = window.prompt("Digite uma frase para escolher ex: Quer casar comigo?");
document.getElementById("frase").innerHTML = question;

if(question ===  ""){
    window.alert("Necessario digitar uma frase");
    window.location.reload();
}


let opt = window.prompt("Escolha um botão para fugir");
let result = opt.toLowerCase();

if (result === "sim") {
    let b = document.querySelector('button.button-yes')
    b.addEventListener("mouseover", moveHover)

    function moveHover() {
        const i = Math.floor(Math.random() * 500) + 1;
        const j = Math.floor(Math.random() * 500) + 1;

        b.style.left = i + "px"
        b.style.top = j + "px"
    }

    function mouseClick(){
        document.getElementById("img").innerHTML = "<img src=\"./monk.jpeg\" width=\"300px\" height=\"100px\">";
    }

} else if (result === "nao") {
    let b = document.querySelector('button.button-no')
    b.addEventListener("mouseover", moveHover)

    function moveHover() {
        const i = Math.floor(Math.random() * 500) + 1;
        const j = Math.floor(Math.random() * 500) + 1;

        b.style.left = i + "px"
        b.style.top = j + "px"
    }
    
    function mouseClick(){
        document.getElementById("img").innerHTML = "<img src=\"./monk.jpeg\" width=\"300px\" height=\"100px\">";
    }

}else{ 
    window.alert("Necessario escolher uma opção")
    window.location.reload();
}