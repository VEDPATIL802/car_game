canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10;
background_image = "backgoundpic.jpg";
rover_image = "rover.png";

car_width = 100;
car_height = 90;
car_x = 10;
car_y = 250;
car_image = "Tesla1.jpg";


function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;

   car_imgTag = new Image();
   car_imgTag.onload = uploadcar;
   car_imgTag.src = car_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}


function uploadRover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);

}

function uploadcar() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
    if (car_y >= 0) {
        car_y = car_y - 10;
        console.log("When up arrow is pressed, x = " + car_x + " | y = " + car_y);
        uploadBackground();
        uploadcar();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
    if (car_y <= 500) {
        car_y = car_y + 10;
        console.log("When down arrow is pressed, x = " + car_x + " | y = " + car_y);
        uploadBackground();
        uploadcar();
    }
}


function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
    if (car_x >= 0) {
        car_x = car_x - 10;
        console.log("When left arrow is pressed, x = " + car_x + " | y = " + car_y);
        uploadBackground();
        uploadcar();
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadRover();
    }
   
    }
    {
        if (car_x <= 700) {
            car_x = car_x + 10;
            console.log("When right arrow is pressed, x = " + car_x + " | y = " + car_y);
            uploadBackground();
            uploadcar();
        }
       
        }
}
