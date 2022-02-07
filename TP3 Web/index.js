
/**
 * Fonction et variable nécessaire pour l'implémentation des fonction des différents games : game1 et game2
 */

//
const globalGame = document.getElementById('game_selection');
//
const game1 = document.getElementById('game1');
//
const game2 = document.getElementById('game2');

/**
 * 
 * @param {*} element 
 */
 function show(element) {
    element.style.display = '';
}

/**
 * 
 * @param {*} element 
 */
function hide(element) {
    element.style.display = 'none';
}

/**
 * 
 */
function new_game() { // fonction qui montre l’ ́ecran de s ́election du mode de jeu
    show(globalGame);
    hide(game1);
    hide(game2);
}

 
                    /************************************************************************ */


/**
 * Game 1
 */

//
const inputRestartButton = document.getElementById('restart_button1'); 
//

var computer_number;
//
const tryButton = document.getElementById('try_button');

//
const playerInput = document.getElementById('player_input');

//
const startGame1 = document.getElementById('start_game1');

//
const message1 = document.getElementById('message1');

/**
 * Affichage du game 1
 */
 const start_player_guess_game = () => {
    computer_number = Math.floor(Math.random() *(100-0)+0);
    hide(globalGame);
    show(game1);
    hide(inputRestartButton);
    hide(game2);
}

tryButton.addEventListener('click', ()=>{
    const valeurRecuperer = parseInt(playerInput.value);
    if(valeurRecuperer < computer_number){
        message1.innerText = "Non , c'est plus grand"
    }
    if(valeurRecuperer > computer_number){
        message1.innerText = "non , c'est plus petit"
    }
    if(valeurRecuperer == computer_number){
        message1.innerText = "Bravo"
        show(inputRestartButton)
    }
    playerInput.innerText ='';
    console.log(computer_number)
})

startGame1.addEventListener('click', start_player_guess_game)


inputRestartButton.addEventListener('click',new_game)




                /************************************************************************* */


/**
 * Game 2
 */

// 
const startGame2 = document.getElementById('start_game2');
console.log(startGame2)

// 
const message2 = document.getElementById('message2')

//
const smallerButton = document.getElementById('smaller_button')

//
const biggerButton = document.getElementById('bigger_button');

//
const foundButton = document.getElementById('found_button');

//
const restartButton2 = document.getElementById('restart_button2');

// Valeur entrer par le joueur, pour qu'elle soit trouver par l'ordinateur
const valueToFind = document.getElementById('value_to_find')

// Le bouton valider, valide la valeur choisir par le joueur
const validateButton = document.getElementById('validate_button')



//
 var min = 0;

//
var max = 100;

//
//
var comptuerTry = Math.trunc((min + max) / 2);

validateButton.addEventListener('click', ()=> {
    message2.innerText = "Est ce que la valeur est " + comptuerTry + " ?";
    show(smallerButton);
    show(biggerButton);
    show(foundButton);
})


smallerButton.addEventListener('click', ()=> {
    max = comptuerTry - 1;
    comptuerTry = Math.trunc((min + max) / 2);
    message2.innerText = "Est ce que la valeur est " + comptuerTry + " ?";
    show(smallerButton);
    show(biggerButton);
    show(foundButton);
} )

biggerButton.addEventListener('click', ()=> {
    min = comptuerTry + 1;
    comptuerTry = Math.trunc((min + max) / 2);
    message2.innerText = "Est ce que la valeur est " + comptuerTry + " ?";
    show(smallerButton);
    show(biggerButton);
    show(foundButton);
})

foundButton.addEventListener('click', ()=> {
    console.log(min);
    console.log(max);
    message2.innerText = "Bravo !";
    show(restartButton2);


})

restartButton2.addEventListener('click',new_game);

const start_player_guess_game2 = () => {
    hide(globalGame);
    hide(game1);
    hide(inputRestartButton);
    show(game2);
    hide(smallerButton);
    hide(biggerButton);
    hide(foundButton);
    hide(restartButton2);
}

startGame2.addEventListener('click', start_player_guess_game2);

new_game();



    







