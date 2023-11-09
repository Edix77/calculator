var display = document.querySelector(".display"); 
//con query selector all se nos hace un array y alli tenemos todos los btn y podemos recorrerlos con un ciclo for
var buttons = document.querySelectorAll(".btn");

buttons.forEach(boton => {
    boton.addEventListener("click", () => {
        const btnClick = boton.textContent;

        if(boton.id === "clear"){
            display.textContent = "0";
            return;
        }
        if(boton.id === "delete"){
            if(display.textContent.length === 1 || display.textContent === "0" || display.textContent === "No se puede dividir por 0"){
                display.textContent = "0";
            }else{
                //slice para contar los numeros de atras hacia adelante y borrar el ultimo
                display.textContent = display.textContent.slice(0,-1)
            }
            return;
        }  
        
        if(boton.id === "equal"){
            try{
                //con el metodo eval evaluamos distintos string y devolvemos un solo string modificado con la evaluacion matematica
                display.textContent = eval(display.textContent)

                if(display.textContent === "Infinity"){
                    display.textContent = "No se puede dividir por 0"
                }
            }catch{
                display.textContent = ("Error!")
            }
            return
        }       
        
        if(display.textContent === "0"  || display.textContent=== "Error!" ){
            display.textContent = btnClick
        }else{
            display.textContent += btnClick
        }
    });
})




