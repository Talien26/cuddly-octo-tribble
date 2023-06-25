var noseX = 0;
var noseY = 0;
var leftWristX = 0;
var rightWristX = 0;
var difference = 0;

function setup(){
canvas = createCanvas (550, 365);
canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size (550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("Green");
    textsize(difference);
    fill("blue");
    document.getElementById("text_size").innerHTML = "The size of text is"+difference+"px";
    Text("Food", noseX, noseY);
 }
 function modelLoaded(){
    console.log("model Loaded")
}

function gotPoses(results){
    if(results.length > 0){
        console.log (results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X =" + noseX + " Nose Y= " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX + " Right Wrist X = " + rightWristX + " Difference =" + difference); 
    }
 }
