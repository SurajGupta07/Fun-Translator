var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text 
}

function errorHandler(error){
    console.log("Error", error);
    alert("Server is down, please try again later");
}

function clickHandler(){
    outputDiv.innerText =  txtInput.value
    var textInput = txtInput.value;//taking input
    fetch(getTranslationURL(textInput))
    .then(response => response.json())
    .then(json =>{
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    }) 
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)
