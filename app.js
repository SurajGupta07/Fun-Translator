let btnTranslate = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
let outputDiv = document.querySelector("#output");
let serverURL = "https://api.funtranslations.com/translate/groot.json";

const getTranslationURL = (text) => serverURL + "?" + "text=" + text; 

const errorHandler => (error){
    console.log("Error", error);
    alert("Server is down, please try again later");
}

const clickHandler = () =>{
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
