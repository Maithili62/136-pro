objects = [];
status1 = "";

function setup()
{
    canvas = createCanvas(480 , 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380 , 380)
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status = Detecting objects";
    object = document.getElementById("obj_name").value;
}

function modelLoaded()
{
    console.log("modal loaded");
    status1 = true;
}

function draw()
{
    image(video , 0 , 0 , 480 , 380);
}