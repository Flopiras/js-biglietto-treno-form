console.log('js ok')

// Individuare gli elementi nel DOM
const userDistance = document.getElementById("distance").value;
const inputAge = document.getElementById("age");
const button = document.getElementById("button")
console.log(userDistance , inputAge)
console.log(typeof userDistance)

//click utente
button.addEventListener('click', function(){
    // *********VALIDAZIONE***********
    
    if (!userDistance || parseInt(userDistance) <= 0){
        alert('ATTENTIONE \n I dati inseriti non sono validi');
    } 
    else {
        const discount = 1;
        let lastPrice = 0.21 * userDistance ;
        lastPrice *= discount;
        if (inputAge.value === "20-discount") {
            const discount = 0.8
        } 
        else if (inputAge.value === "40-discount") {
            const discount = 0.6
        }
        console.log(lastPrice);
    }
    }
)
