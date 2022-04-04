// Code your solutions in this 

for(let age=30; age<40; age++) {
    console.log(`I'm ${age} years old. Happy Birthday to me!`);
    //debugger;
}

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i=0; i<gifts.length; i++) {
        console.log (`wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);


const nameArray = ["Ada", "Brendan", "Ali"];
const event = "birthday";
function writeCards(nameArray, event){
    let thankYouCards = []
    for( let j=0; j<nameArray.length; j++) {
        thankYouCards.push(`thank you ${nameArray[j]} for a wonderful ${event} gift!`)
    }
    //debugger;
    return thankYouCards;
}

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    let i=0;
    while(i<gifts.length) {
        console.log (`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }
    return gifts;
}

function countDown(i=10) {
    //let i=10;
    while(i<10){
        console.log(i);
        i--;
    }
}
