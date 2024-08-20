//https://teachablemachine.withgoogle.com/models/GD2sHD8_a/

barking = 0
meowing = 0
chirping = 0
roaring = 0

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
    if (error) {
        console.error(error);
    }

    else { 
        console.log(results);

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = "I can hear - "+results[0].label;
        document.getElementById("result_accuracy").innerHTML = "Accuracy - "+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_accuracy").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img1 = document.getElementById('ear1');

        if (results[0].label == "barking")
            {
                img1.src = "dog img animal.png"
                barking + 1 
            }

            else if (results[0].label == "meowing")
                {
                    img1.src = "just cat.webp" 
                    meowing + 1
                }

                else if (results[0].label == "chirping")
                    {
                        img1.src = "mr parrot.png"
                        chirping + 1 
                    }

                    else if (results[0].label == "roaring")
                        {
                            img1.src = "the lion.jpg"
                            roaring + 1 
                        }

                        else
                            {
                                img1.src = "IlkL.gif" 
                            }


    }

}