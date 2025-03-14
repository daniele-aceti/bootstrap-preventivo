//Dichiarazione ed inizializzazione dei value-input e del button
const submitCost = document.querySelector("#submitCost");
const backend = document.querySelector("#backend");
const frontend = document.querySelector("#frontend");
const analysis = document.querySelector("#analysis");
const typeOfWork = document.querySelector("#typeOfWork")
const finalPrice = document.querySelector("#finalPrice")


//click
submitCost.addEventListener("click", function(event){
    event.preventDefault()

//Funzione per calcolare il prezzo e trasformarlo in forma unmana manipolazione del prezzo per far diventare i numeri dopo la virgola grigi
function price (value){
    const result = value * 10;
    const finalResult = `${result.toFixed(2).replace(".", ",")}€`
    const point = finalResult.indexOf(",") //l'indice della virgola non è sempre uguale (centinaia di euro, migliaia di euro ecc)
    const changeColorText = finalResult.substring(point) //substring con un parametro parte da quell'indice fino alla fine
    finalPrice.innerHTML =`${finalResult.substring(0, point)}<span class="fw-normal text-secondary fs-3">${changeColorText}</span>`//substring "da" "a"
}

//calcolo sconto
    function discountPrice (value){
        const sale = (1-25/100)
        return price(value * sale);
    }

//codici promozionali 
const promoCode = ["YHDNU32","JANJC63", "PWKCN25", "SJDPO96"," POCIE24"];
const promotion = document.querySelector("#promotion");



//trasformo il codice promozionale in maiuscolo e controllo se quello inserito è uno dei codici pomozionali
    const codeValidation = promotion.value.toUpperCase()
    const promo = promoCode.includes(codeValidation)


    
//funzioni di validazione e non validazione con la risolizione dell'aggiunta di elementi in errore o in validazione 
function valid (value){
    value.classList.add("is-valid")
    value.classList.remove("is-invalid")
}

function invalid (value){
    value.classList.add("is-invalid")
    value.classList.remove("is-valid")
}


//codice promozionale valido con stampa del preventivo

function promoValidation (value){
    if(codeValidation.length === 0 ){
        //non fare niente il valore è opzionale
        promotion.classList.remove("is-valid")
        promotion.classList.remove("is-invalid")
        return price(value)
    }else{
        if(promo){
            valid(promotion) //inserito il codice promozionale corretto
            return discountPrice(value);
     
        }else{
            invalid(promotion) //inserito il codice promozionale non corretto
            return price(value);
        
         }
    }
}

const checkPrivacy = document.querySelector("#checkPrivacy")

//Definizione prezzo/ora e codice promozionale, checked (method) da un valore booleano se il checkbox è selezionato o meno 
if(typeOfWork.value === "backend" && checkPrivacy.checked){
        promoValidation(20.50)
      }else if(typeOfWork.value  === "frontend" && checkPrivacy.checked){
    promoValidation(15.30)
    }else if(typeOfWork.value  === "analysis" && checkPrivacy.checked){
        promoValidation(33.60)
      }

//Validazione e controllo nome e cognome 
    function validText (value){
        if(isNaN(value.value)){
        valid(value)
    }else{
        invalid(value)
    }
   }
const userName = document.querySelector("#userName");
    validText(userName)
const userSurname = document.querySelector("#userSurname");
    validText(userSurname)


//select
   if(typeOfWork.value === "select"){
   invalid(typeOfWork)
   finalPrice.innerHTML = "-"
   }else{ 
    valid(typeOfWork)
   }

//email
const userEmail = document.querySelector("#userEmail")
   if(userEmail.value.includes("@")){
       valid(userEmail)
   }else{
       invalid(userEmail)
   }

//check privacy (separato dall'if prezzo/ora piu leggibile)
    if(checkPrivacy.checked){
        valid(checkPrivacy)
    }else{
        invalid(checkPrivacy)
        finalPrice.innerHTML = "-"
    }

})

    
