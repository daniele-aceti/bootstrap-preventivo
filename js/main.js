//don't repeat yourself

//Dichiarazione ed inizializzazione dei value e del button
const submitCost = document.querySelector("#submitCost");
const backend = document.querySelector("#backend");
const frontend = document.querySelector("#frontend");
const analysis = document.querySelector("#analysis");
const typeOfWork = document.querySelector("#typeOfWork")
const finalPrice = document.querySelector("#finalPrice")

//codici promozionali 
const promoCode = [ "YHDNU32","JANJC63", "PWKCN25", "SJDPO96"," POCIE24"];
const promotion = document.querySelector("#promotion");


//Funzione per calcolare il prezzo e trasformarlo in forma unmana
function price (value){
    const result = value * 10;
    const finalResult = `${result.toFixed(2).replace(".", ",")}€`
    finalPrice.innerHTML += `<p class="fw-bold fs-3"> ${finalResult}</p>`;
    return finalResult
};


//click
submitCost.addEventListener("click", function(event){
    event.preventDefault()
    let priceOfWork = 0;
    const codeValidation = promotion.value.toUpperCase()
    const promo = promoCode.includes(codeValidation)
  

    //Definizione prezzo/ora e codice promozionale
    if(typeOfWork.value === "backend"){
        if(promo){
            priceOfWork = price(20.50 * (1-25/100));
        }else{
            priceOfWork = price(20.50);
        }
    }else if(typeOfWork.value  === "frontend"){
        if(promo){
            priceOfWork = price(15.30 * (1-25/100));
        }else{
            priceOfWork = price(15.30);
        }
    }else if(typeOfWork.value  === "analysis"){
        if(promo){
            priceOfWork = price(33.60 * (1-25/100));
        }else{
            priceOfWork = price(33.60);
        }
    }



})

    
