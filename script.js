const words = ["Laptop", "Etui", "Potlood", "Papier", "Boek"];
const hints = ["Hier kan je al je schoolwerk op vinden", "Bewaar je pennen in", "Kan je mee schrijven", "Kan je op schrijven", "Kan je lezen"];
let displayWord = ""

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

refresh();