// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


function arrayFunctions(){   //Unknown if we suppose to have this here 
beforeEach(function() {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });
}

function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {//spread or splice methods here
    const newCats= [...cats];
    console.log("This is the value of the new cats Array: ", newCats);
    newCats.push(name);
    return newCats;
    //unable to figure out what method works i have tried 20 variations 
    //doesn't matter if i try inside the function or outside, if use nested fuctions, or if i use.apply or if use .push

}

appendCat("Kwame");

function prependCat(name) {
    const newCatsOnTheBlock= [...cats];
    console.log("This is the value of the new cats Array: ", newCatsOnTheBlock);
    newCatsOnTheBlock.unshift(name);
    return newCatsOnTheBlock;
    // why wont any of the arrays im creating become defined inside the functions 
    //they dont register as arrays from outside the function 
    // i cannot seem to create a new array inside the function 
}

prependCat("sylvester");

function removeLastCat() {
    const theseCatsGottaGo = [...cats];
    theseCatsGottaGo.pop(name);
    return theseCatsGottaGo;

}
function removeFirstCat() {
    const catsCatsCats = [...cats];
    catsCatsCats.shift();
    return catsCatsCats;

 
}