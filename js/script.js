console.log('js ok')

// Individuare gli elementi nel DOM
const userDistance = document.getElementById(distance);
const userAge = document.getElementById(age);
console.log(userDistance , userAge)

// *********VALIDAZIONE***********
if (!userDistance || userDistance <= 0){
    alert('ATTENTIONE \n I dati inseriti non sono validi');
} else {
    let price = 0.21;
    price *= userDistance;
    if (userAge === "Meno di 18 anni") {
        const discount = 0.8
        price *= discount
    } 
    else (userAge === "65 anni o più") 
        const discount = 0.8
        price *= discount
        console.log(price)
    }

