//console.log("Hi");
var random=(Math.floor(Math.random()*6))+1;  // generating random no. from 1-6

var randomDiceImage="images/dice"+random+".png";  // creating required image reference

var image1=document.querySelectorAll("img");
//console.log(image1)
image1[0].setAttribute("src",randomDiceImage);  // setting the value

// Setting the values for img-2
var random2=(Math.floor(Math.random()*6))+1;  // generating random no. from 1-6
var randomDiceImage2="images/dice"+random2+".png";  // creating required image reference

var image2=document.querySelectorAll("img");
//console.log(image1)
image2[1].setAttribute("src",randomDiceImage2);  // setting the value

if(random>random2){
  document.querySelector("h1").innerHTML="Player 1 Wins!🥳";
}
else if(random2>random){
  document.querySelector("h1").innerHTML="Player 2 Wins!🥳";
}
else{
    document.querySelector("h1").innerHTML="Draw!🥳";
}
