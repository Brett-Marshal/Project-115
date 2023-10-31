function preload()
{}

function setup()
{
    canvas = createCanvas(450,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("poseNet Library is Initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("the x position of the Upper Lip is ", results[0].pose.nose.x);
        console.log("the y position of the Upper Lip is ", results[0].pose.nose.y-37);
    }
}

function draw()
{
    image(video, 0, 0, 450, 400);
}

function capture()
{
    save("filteredImage.png");
}