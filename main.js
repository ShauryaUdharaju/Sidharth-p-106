//https://teachablemachine.withgoogle.com/models/GD2sHD8_a/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/GD2sHD8_a/model.json", modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
    console.log("model is loaded")
}

function gotResults(error, results)
{
    

}