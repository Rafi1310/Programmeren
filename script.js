const words = ["Laptop", "Etui", "Potlood", "Papier", "Boek"];
const hints = ["Hier kan je al je schoolwerk op vinden", "Bewaar je pennen in", "Kan je mee schrijven", "Kan je op schrijven", "Kan je lezen"];
let displayWord = ""
//De woorden die tevoorschijn kunnen komen.

//Bron: https://www.geeksforgeeks.org/word-scramble-game-using-javascript/?ref=lbp
function shuffle(str){
    strArray = Array.from(str);
    for (let i = 0; i < strArray.length - 1; ++i){
        let j = Math.floor(Math.random() * strArray.length);
        let temp = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = temp;
    }
    return strArray.join(" ");
}
//De code hierboven zorgt ervoor dat de letters gehusseld worden.

//Bron: https://www.geeksforgeeks.org/word-scramble-game-using-javascript/?ref=lbp
function check(){
    let input = document.querySelector("#input");
    let output = document.querySelector("#output");
    if (
        input.value.toLocaleLowerCase() ===
        displayWord.toLocaleLowerCase()
    )
    output.innerHTML = "Result: Correct";
    else output.innerHTML = "Result: Incorrect";
}
//De code hierboven zorgt ervoor dat er gecontroleerd word of het woord dat je in typt hetzelfde is als het gehusselde woord. 

//Bron: https://www.geeksforgeeks.org/word-scramble-game-using-javascript/?ref=lbp
function refresh(){
    index = Math.floor(Math.random() * 5);
    displayWord = words[index];
    displayHint = hints[index];
    scrambleWord = document.querySelector("#scrambleWord");
    scrambleWord.innerText = shuffle(displayWord).toUpperCase();
    let hint = document.querySelector("#hint");
    hint.innerHTML = "<b>Hint:</b>" + displayHint;
    document.querySelector("#output").innerText = "Result:";
}
//De code hierboven zorgt ervoor dat het een ander woord wordt.

refresh();