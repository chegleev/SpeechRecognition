window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

var words = document.getElementById("words");
var start = document.getElementById("start");
var svet = document.getElementById("svet");

var rec = new SpeechRecognition();
rec.interimResults = true;

words.innerHTML = "...";

start.addEventListener("click", function() {
    rec.start();
    this.disabled = true;
    this.innerHTML = "ГОВОРИТЕ...";
});

rec.addEventListener("result", function(e) {
    var text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

    if(text === "Включить свет") {
        svet.style.background = "#ffff00";
    } else if (text === "Выключить свет") {
        svet.style.background = "#000000";
    }
    
    words.innerHTML = text;
});

rec.addEventListener("end", function() {
    rec.start();
});
