let numberSecret = Math.floor(Math.random() * 100) + 1;
let numberUser = document.getElementById("userNumber");
let btnEnviar = document.getElementById("btnEnviar");
// Box Mensaje
let box = document.getElementById("message");
let newMess = document.getElementById("mess-action");
// Intentos
let intentos = 1;
let maxIntentos = 5;

console.log(numberSecret);

btnEnviar.addEventListener("click", () => {
    if(numberUser.value > 100) {
        newMess.textContent = "Limite superado, elige un número entre 1 al 100";
        setTimeout(() => {
            newMess.textContent = "";
        }, 2000);
    } else {
        if(numberUser.value == numberSecret) {
            box.style.display = "none";
            newMess.textContent = `¡GANASTE!, el número secreto era: ${numberSecret}`;
            document.getElementById("imgChange").src = "Img_Win.png";
            numberUser.disabled = true;
            btnEnviar.disabled = true;
        } else {
            if(parseInt(numberUser.value) > numberSecret) {
                let item = document.createElement("li");
                item.setAttribute("id", "msgFun");
                item.textContent = "El número debe ser MENOR";
                
                item.classList = "not shake-horizontal";
                box.appendChild(item);
                
                let ani = document.getElementById("msgFun");
                
                setTimeout(() => {
                    box.removeChild(item);
                    ani.style.display = "none";
                }
                , 7000);

                clear();
            } else {
                let item = document.createElement("li");
                item.setAttribute("id", "msgFun");
                item.textContent = "El número debe ser MAYOR";

                item.classList = "not shake-horizontal";
                box.appendChild(item);

                let ani = document.getElementById("msgFun");
                
                setTimeout(() => {
                    box.removeChild(item);
                    ani.style.display = "none";
                }
                , 7000);

                clear();
            }
    
            intentos++
    
            if(intentos > maxIntentos) {
                box.style.display = "none";
                document.getElementById("imgChange").src = "Img_No.png";
                newMess.textContent = `¡Alcanzaste el número máximo de intentos!, el número secreto era: ${numberSecret}`;
                numberUser.disabled = true;
                btnEnviar.disabled = true;
            }
        }
    }
});

function clear() {
    numberUser.value = "";
    numberUser.focus();
}