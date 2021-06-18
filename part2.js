// Make a request to the Deck of Cards API to request a single card from a newly shuffled deck. Once you have the card, console.log the value and the suit (e.g. “5 of spades”, “queen of diamonds”).
let deck_id = null;

//request new deck
$.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    //save deck_id
    .then(data => {
        deck_id = data.deck_id;
        console.log(`Deck id 1 is: ${deck_id}`)
        //draw a card from deck
        //have to return a promise in the .then method to use another .then afterwards
        return $.getJSON(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
    })
    .then(data => {
        let value = data.cards[0].value;
        let suit = data.cards[0].suit;
        console.log('card from part 1 is: ', `${value} of ${suit}`);
    })



// Make a request to the deck of cards API to request a single card from a newly shuffled deck. Once you have the card, make a request to the same API to get one more card from the same deck.

// Once you have both cards, console.log the values and suits of both cards.
let deck_id2 = null;
let card1 = null;
let card2 = null;

//request new deck
$.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    //save deck_id2
    .then(data => {
        deck_id2 = data.deck_id;
        console.log(`Deck id 2 is: ${deck_id2}`)
        //draw a card from deck
        return $.getJSON(`https://deckofcardsapi.com/api/deck/${deck_id2}/draw/?count=1`);
    })
    .then(data => {
        let value = data.cards[0].value;
        let suit = data.cards[0].suit;
        card1 = `${value} of ${suit}`;
        //draw second card
        return $.getJSON(`https://deckofcardsapi.com/api/deck/${deck_id2}/draw/?count=1`);
    })
    .then(data => {
        let value = data.cards[0].value;
        let suit = data.cards[0].suit;
        card2 = `${value} of ${suit}`;
        console.log('2 cards from part 2 are', card1, card2)
    })
    .catch(err => {
        console.log('This API is sucking atm.')
    })


// Build an HTML page that lets you draw cards from a deck. When the page loads, go to the Deck of Cards API to create a new deck, and show a button on the page that will let you draw a card. Every time you click the button, display a new card, until there are no cards left in the deck.
let deck_id3 = null;

//request new deck on document load
$(() => {
    $.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    //save deck_id3
    .then(data => {
        deck_id3 = data.deck_id;
        console.log(`Deck id 3 is: ${deck_id3}`)
    })
})

//draw new card when clicked from deck3
$('#draw').on('click', () => {
    console.log('clicked')
    $.getJSON(`https://deckofcardsapi.com/api/deck/${deck_id3}/draw/?count=1`)
        .then(data => {
            let image_url = data.cards[0].image;
            $('#cards').append(`<img src="${image_url}" style="position:absolute; top:40px;left:20%; transform:rotate(${rand(360)}deg);">`)
        })
})


let rand = function(num) {
    //returns a random integer 1-num
    let rand = Math.floor(Math.random() * num) + 1;
    return rand;
}