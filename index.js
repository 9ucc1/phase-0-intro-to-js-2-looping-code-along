function writeCards(names, event){
    let cardArray = []
    for(let i=0;i<names.length;i++){
        let cardMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        cardArray.push(cardMessage)
    }
    return cardArray
}
function countDown(number){
    while (number>=0){
    console.log(number--)
    }
    return number
}