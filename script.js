//Array de las monedas a implemetar en las opciones

const exchanges = ['Dolar','Peso Mexicano','Peso Colombiano','Euro','Libra Esterlina'];

const selectFrom = document.querySelector("#countries-from");
const selectTo = document.querySelector("#countries-to");
const screen = document.querySelector("#result");

//Menu DropDown, recorrer el array con forEach y asignarlos al option del select del html, se realiza con createElement y appendChild()
exchanges.forEach((exchange) => {
    let option = document.createElement("option");
    option.textContent = exchange;
    selectFrom.appendChild(option);
});

//Menu DropDown, recorrer el array con forEach y asignarlos al option del select del html, se realiza con createDocumentFragment y appendChild()

let fragment = document.createDocumentFragment();

exchanges.forEach((exchange) => {
    let option = document.createElement("option");
    option.textContent = exchange;
    fragment.appendChild(option);
});

selectTo.appendChild(fragment);

let show;
let getQuantity = function(){
    const quantity = document.getElementById("quantity").value;
    let result;
//DOLAR
    if(selectFrom.value === "Dolar" && selectTo.value === "Peso Mexicano"){
        result = quantity * 20.34;
        return show = `${quantity} USD = ${result} MXN`;
    }

    else if(selectFrom.value === "Dolar" && selectTo.value === "Peso Colombiano"){
        result = quantity * 3869;
        return show = `${quantity} USD = ${result} COP`;
    }

    else if(selectFrom.value === "Dolar" && selectTo.value === "Euro"){
        let result = quantity * 0.85;
        return show = `${quantity} USD = ${result} EUR`;
    }

    else if(selectFrom.value === "Dolar" && selectTo.value === "Libra Esterlina"){
        let result = quantity * 0.73;
        return show = `${quantity} USD = ${result} GBP`;
    }
//PESO MEXICANO
        else if(selectFrom.value === "Peso Mexicano" && selectTo.value === "Dolar"){
        let result = quantity * 0.049;
        return show = `${quantity} MXN = ${result} USD`;
    }

        else if(selectFrom.value === "Peso Mexicano" && selectTo.value === "Peso Colombiano"){
        let result = quantity * 191.06;
        return show = `${quantity} MXN = ${result} COP`;
    }

        else if(selectFrom.value === "Peso Mexicano" && selectTo.value === "Euro"){
        let result = quantity * 0.042;
        return show = `${quantity} MXN = ${result} EUR`;
    }

        else if(selectFrom.value === "Peso Mexicano" && selectTo.value === "Libra Esterlina"){
        let result = quantity * 0.036;
        return show = `${quantity} MXN = ${result} GBP`;
    }
//PESO COLOMBIANO
        else if(selectFrom.value === "Peso Colombiano" && selectTo.value === "Dolar"){
        let result = quantity * 0.00026;
        return show = `${quantity} COP = ${result} USD`;
    }

        else if(selectFrom.value === "Peso Colombiano" && selectTo.value === "Peso Mexicano"){
        let result = quantity * 0.0053;
        return show = `${quantity} COP = ${result} MXN`;
    }

        else if(selectFrom.value === "Peso Colombiano" && selectTo.value === "Euro"){
        let result = quantity * 0.00022;
        return show = `${quantity} COP = ${result} EUR`;
    }

        else if(selectFrom.value === "Peso Colombiano" && selectTo.value === "Libra Esterlina"){
        let result = quantity * 0.00019;
        return show = `${quantity} COP = ${result} GBP`;
    }
//EURO
        else if(selectFrom.value === "Euro" && selectTo.value === "Dolar"){
        let result = quantity * 1.17;
        return show = `${quantity} EUR = ${result} USD`;
    }

        else if(selectFrom.value === "Euro" && selectTo.value === "Peso Mexicano"){
        let result = quantity * 23.87;
        return show = `${quantity} EUR = ${result} MXN`;
    }

        else if(selectFrom.value === "Euro" && selectTo.value === "Peso Colombiano"){
        let result = quantity * 4559;
        return show = `${quantity} EUR = ${result} COP`;
    }

        else if(selectFrom.value === "Euro" && selectTo.value === "Libra Esterlina"){
        let result = quantity * 0.86;
        return show = `${quantity} EUR = ${result} GBP`;
    }
//LIBRA ESTERLINA
        else if(selectFrom.value === "Libra Esterlina" && selectTo.value === "Dolar"){
        let result = quantity * 1.37;
        return show = `${quantity} GBP = ${result} USD`;
    }

        else if(selectFrom.value === "Libra Esterlina" && selectTo.value === "Peso Mexicano"){
        let result = quantity * 27.90;
        return show = `${quantity} GBP = ${result} MXN`;
    }

        else if(selectFrom.value === "Libra Esterlina" && selectTo.value === "Peso Colombiano"){
        let result = quantity * 5329;
        return show = `${quantity} GBP = ${result} COP`;
    }

        else if(selectFrom.value === "Libra Esterlina" && selectTo.value === "Euro"){
        let result = quantity * 1.17;
        return show = `${quantity} GBP = ${result} EUR`;
    }
        else if(selectFrom.value === selectTo.value || quantity <= 0 ){
        return show = "Ingresa un valor valido";
    }
        else if(isNaN(quantity)){
        return show = "Ingresa un numero";
    }
         
}

function showToScreen(){
    let p = document.createElement("p");
    p.textContent = show;
    screen.appendChild(p);
};

function changeColor(){
    document.getElementsByTagName("p")[0].setAttribute("class", "newClass");
}
