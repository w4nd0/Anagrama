function alphabetize(typedText) {
    return typedText.toLowerCase().split("").sort().join("").trim();
}

function getAnagramsOf(typedText){
    let sameSizeWords = palavras.filter(word => word.length === typedText.length)
    let arrayWords = [];
    let word = alphabetize(typedText);

    for (let i = 0; i < sameSizeWords.length; i++) {
        let wordToCompare = alphabetize(sameSizeWords[i]);
        if(word === wordToCompare) arrayWords.push(sameSizeWords[i]);
    }

    return arrayWords;    
}

function clean(boxResult){
    boxResult.removeChild(boxResult.firstChild);
}

const button = document.getElementById("findButton");

button.addEventListener("click", function () {
    let boxResult = document.getElementById('boxResult');
    if(boxResult.hasChildNodes()) clean(boxResult);

    let typedText = document.getElementById("input").value;
    let result = document.createElement('div');
    
    result.textContent = getAnagramsOf(typedText);
    result.classList.add('result')
    
    boxResult.appendChild(result);

});