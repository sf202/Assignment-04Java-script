usedLocation=[]; 

usedLocationCounter=0;

clicked=null;

clickedId=null;

correct=[];

correctLen=0;

function start(){


$("#instructions").hide();

gridSize=$("#gridSize").val();

revealTime=$("#revealTime").val()*1000;

if (gridSize == "lvl1") {
    Size = 8;
    gameOverTime = 120000 + revealTime;
} else if (gridSize == "lvl2") {
    Size = 10;
    gameOverTime = 150000 + revealTime;
} else if (gridSize == "lvl3") {
    Size = 12;
    gameOverTime = 180000 + revealTime;
}


//the timer
    var startTime = new Date().getTime();
    var interval = setInterval(function () {
        var currentTime = new Date().getTime();
        var elapsedTime = currentTime - startTime;
        var remainingTime = Math.max(0, (gameOverTime - elapsedTime) / 1000);

        document.getElementById("timer").innerHTML = "Time remaining: " + remainingTime + " seconds";

        if (elapsedTime > gameOverTime) {
            clearInterval(interval);
            alert("Out of Time!");
            location.reload(); 
            return;
        }
    }, 1000);



if(gridSize=="lvl1"){

Size=8;

gameOverTime=120000+revealTime;

for(i=1;i<5;i++){

var rand=getNumber([1,2,3,4,5,6,7,8]); 

var rand1=getNumber([1,2,3,4,5,6,7,8]);


$("#"+gridSize).find("td#"+rand).find("img").attr("src",i+".png");

$("#"+gridSize).find("td#"+rand).find("img").attr("name",i);

$("#"+gridSize).find("td#"+rand1).find("img").attr("src",i+".png");

$("#"+gridSize).find("td#"+rand1).find("img").attr("name",i);

}

setTimeout(function(){

for(i=1;i<9;i++){

$("#"+gridSize).find("td#"+i).find("img").attr("src","q.png");

$("#"+gridSize).find("td#"+i).find("img").attr("onclick","check(this)");

}

}, revealTime);

}else if (gridSize=="lvl2") {

Size=10;

gameOverTime=150000+revealTime;

for(i=1;i<6;i++){

var rand=getNumber([1,2,3,4,5,6,7,8,9,10]); 
var rand1=getNumber([1,2,3,4,5,6,7,8,9,10]);


$("#"+gridSize).find("td#"+rand).find("img").attr("src",i+".png");

$("#"+gridSize).find("td#"+rand).find("img").attr("name",i);

$("#"+gridSize).find("td#"+rand1).find("img").attr("src",i+".png");

$("#"+gridSize).find("td#"+rand1).find("img").attr("name",i);

}


setTimeout(function(){

for(i=1;i<11;i++){

$("#"+gridSize).find("td#"+i).find("img").attr("src","q.png");

$("#"+gridSize).find("td#"+i).find("img").attr("onclick","check(this)");

}

}, revealTime);

}else if (gridSize=="lvl3") {

Size=12;

gameOverTime=180000+revealTime;

for(i=1;i<7;i++){

var rand=getNumber([1,2,3,4,5,6,7,8,9,10,11,12]); 

var rand1=getNumber([1,2,3,4,5,6,7,8,9,10,11,12]);


$("#"+gridSize).find("td#"+rand).find("img").attr("src",i+".png");

$("#"+gridSize).find("td#"+rand).find("img").attr("name",i);

$("#"+gridSize).find("td#"+rand1).find("img").attr("src",i+".png");

$("#"+gridSize).find("td#"+rand1).find("img").attr("name",i);

}


setTimeout(function(){

for(i=1;i<13;i++){

$("#"+gridSize).find("td#"+i).find("img").attr("src","q.png");

$("#"+gridSize).find("td#"+i).find("img").attr("onclick","check(this)");

}

}, revealTime);

}


$("#"+gridSize).show();


var startTime = new Date().getTime();

var interval = setInterval(function(){

if(new Date().getTime() - startTime > gameOverTime){

clearInterval(interval);

alert("Out of Time!");

location.reload(); 

return;

}

}, 1000);

}

function getNumber(set){

var rndm = Math.floor(Math.random() * set.length);

while(jQuery.inArray(set[rndm],usedLocation)!=-1){

rndm = Math.floor(Math.random() * set.length);

}

usedLocation[usedLocationCounter]=set[rndm];

usedLocationCounter++;

return set[rndm];

}

function check(e){

$(e).attr("src",$(e).attr("name")+".png"); 

$(e).attr("onclick",""); 

if(clicked==null){

clicked=$(e).attr("name");

clickedId=$(e).attr("id");

}

else{

if(clicked==$(e).attr("name")){


correct[correctLen]=clickedId;

correctLen++;

correct[correctLen]=$(e).attr("id");

correctLen++;


if(correct.length==Size){

$("#win").show();


}



clicked=null;

}

else{


clicked=null;

}

for(i=0;i<Size+1;i++){

if(jQuery.inArray(""+i,correct)!=-1){


continue;

}


$("#"+gridSize).find("td#"+i).find("img").attr("src","q.png");

$("#"+gridSize).find("td#"+i).find("img").attr("onclick","check(this)");

}

}

}