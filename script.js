var clicky= new Date().getTime();
setTimeout(myShapeAppear,Math.random() * 2000 );
quickAppear();

//1 
function myShapeAppear(){
    var vert = Math.random() * 400;
    var hori = Math.random() * 400;
    var big = (Math.random() * 400) + 100;

if (Math.random() > 0.5){
    document.getElementById("click").style.borderRadius ="50%";

} else{
    document.getElementById("click").style.borderRadius = "0";
}

    document.getElementById("click").style.backgroundColor = randomColor();
    document.getElementById("click").style.top = vert + "px";
    document.getElementById("click").style.left = hori + "px";
    document.getElementById("click").style.display="block";
    document.getElementById("click").style.width= big + "px";
    document.getElementById("click").style.height= big + "px";
    clicky= new Date().getTime();
} 

//2
document.getElementById("click").onclick=function(){
    document.getElementById("click").style.display="none";
    var end= new Date().getTime();
    var timeTaken = (end-clicky) / 1000;
    document.getElementById("timer").innerHTML = timeTaken+ "s";
    quickAppear();
}

//3
function quickAppear(){
    setTimeout(myShapeAppear,Math.random() * 2000 );
}

//4
function randomColor(){
    var letters = '0123456789ABCDEF'.split('');
    var color ='#';
    for (var i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}
