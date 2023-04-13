// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];// origin Array


function arrayFunctions(){   
beforeEach(function() {
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
    });
}
// self explanotory
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

function appendCat(name) {
    const newCats= [...cats];//cloned Array
    console.log("This is the value of the new cats Array: ", newCats); 
    newCats.push(name);//adds cat to end of cats cloned array
    return newCats;
}

appendCat("Kwame");

function prependCat(name) {
    const newCatsOnTheBlock= [...cats];//cloned array
    console.log("This is the value of the new cats Array: ", newCatsOnTheBlock);
    newCatsOnTheBlock.unshift(name);//adds cat to the beginning of the cats array 
    return newCatsOnTheBlock;
}

prependCat("sylvester");

function removeLastCat() {
    const theseCatsGottaGo = [...cats];//cloned array
    theseCatsGottaGo.pop();//removes last cat from cloned array
    return theseCatsGottaGo;

}
function removeFirstCat() {
    const catsCatsCats = [...cats];//cloned array
    catsCatsCats.shift();//removes first cat from cloned cats array
    return catsCatsCats;

 
}