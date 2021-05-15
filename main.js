prediction1 = "";
prediction2 = "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("camera").value;
Webcam.attach('#camera')

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '">'
    })
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SVyuKBGuw/model.json',modelLoaded)
function modelLoaded(){
    console.log("model loaded")
}
function speak(){
    synth = window.SpeechSynthesis;
    speakdata1 = "The First Prediction Is " + prediction1;
    speakdata2 = "The Second Prediction Is " + prediction2;
    utterthis = new SpeechSynthesisUtterance(speakdata1 + speakdata2);
    synth.speak(utterthis)
}