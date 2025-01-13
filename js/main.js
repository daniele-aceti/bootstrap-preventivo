//don't repeat yourself

//Dichiarazione ed inizializzazione dei value e del button
const submitCost = document.querySelector("#submitCost");
const backend = document.querySelector("#backend");
const frontend = document.querySelector("#frontend");
const analysis = document.querySelector("#analysis");
const typeOfWork = document.querySelector("#typeOfWork")
const finalPrice = document.querySelector("#finalPrice")

//codici promozionali 
const promoCode = ["YHDNU32","JANJC63", "PWKCN25", "SJDPO96"," POCIE24"];
const promotion = document.querySelector("#promotion");


//Funzione per calcolare il prezzo e trasformarlo in forma unmana
function price (value){
    const result = value * 10;
    const finalResult = `${result.toFixed(2).replace(".", ",")}€`
    finalPrice.innerHTML = `${finalResult}`;
    finalPrice.classList.toggle("d-none")
    return finalResult
};


//click
submitCost.addEventListener("click", function(event){
    event.preventDefault()
    finalPrice.classList.toggle("d-none")

//trasformo il codice promozionale in maiuscolo e controllo se quello inserito è uno dei codici pomozionali
    const codeValidation = promotion.value.toUpperCase()
    const promo = promoCode.includes(codeValidation)
    const withoutCode = codeValidation.split()
    if(withoutCode.length === 0 ){
        return
   }

//calcolo sconto
    function discountPrice (value){
        const sale = (1-25/100)
        return price(value * sale);
    }

//codice promozionale valido con stampa del preventivo
function promoValidation (value){
    if(!promo){
      promotion.classList.add("is-invalid")
       price(value);
      return 
    }else{
        promotion.classList.add("is-valid")
        discountPrice(value);
        return 
    }
}


const checkPrivacy = document.querySelector("#checkPrivacy")

//Definizione prezzo/ora e codice promozionale, checked (method) da un valore booleano se il checkbox è selezionato o meno 
if(typeOfWork.value === "backend" && checkPrivacy.checked){
    return promoValidation(20.50)
  }else if(typeOfWork.value  === "frontend" && checkPrivacy.checked){
    return promoValidation(15.30)
}else if(typeOfWork.value  === "analysis" && checkPrivacy.checked){
    return promoValidation(33.60)
  }

//Validazione e controllo nome e cognome 
function validText (value){
    if(isNaN(value.value)){
    value.classList.add("is-valid")
}else{
    value.classList.add("is-invalid")
}

}
const userName = document.querySelector("#userName");
const nameValidation = validText(userName)
const userSurname = document.querySelector("#userSurname");
const surnameValidation = validText(userSurname)


/*//select
const select = document.querySelector("#select")
if(typeOfWork.value === "select"){
    typeOfWork.classList.add("is-invalid")
    return false
}else{
    typeOfWork.classList.add("is-valid")
}
  
//text-area
const userQuestion = document.querySelector("#userQuestion");
if(userQuestion){
    userQuestion.classList.add("is-valid")
}

//check privacy (separato dall'if prezzo/ora piu leggibile)
if(!checkPrivacy.checked){
    checkPrivacy.classList.add("is-invalid")
    return false
}else{
    checkPrivacy.classList.add("is-valid")
    
}*/

})

    
