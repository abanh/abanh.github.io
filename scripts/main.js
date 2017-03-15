var myHeading = document.querySelector('h1');
myHeading.textContent = 'Lets Play A Game';

var myImage = document.querySelector('img.im1');
var myImage2 = document.querySelector('img.im2');
var myImage3 = document.querySelector('img.im3');
var myImage4 = document.querySelector('img.im4');
var myImage5 = document.querySelector('img.im5');
var myImage6 = document.querySelector('img.im6');
var myImage7 = document.querySelector('img.im7');
var myImage8 = document.querySelector('img.im8');
var myImage9 = document.querySelector('img.im9');

myImage.onclick = function () {
    imchange(myImage);
    imchange(myImage2);
    imchange(myImage4);
    wincheck();
}

myImage2.onclick = function () {
    imchange(myImage);
    imchange(myImage2);
    imchange(myImage3);
    imchange(myImage5);
    wincheck();
}

myImage3.onclick = function () {
    imchange(myImage3);
    imchange(myImage2);
    imchange(myImage6);
    wincheck();
}

myImage4.onclick = function () {
    imchange(myImage);
    imchange(myImage4);
    imchange(myImage5);
    imchange(myImage7);
    wincheck();
}

myImage5.onclick = function () {
    imchange(myImage2);
    imchange(myImage4);
    imchange(myImage5);
    imchange(myImage6);
    imchange(myImage8);
    wincheck();
}

myImage6.onclick = function () {
    imchange(myImage3);
    imchange(myImage5);
    imchange(myImage6);
    imchange(myImage9);
    wincheck();
}
myImage7.onclick = function () {
    imchange(myImage4);
    imchange(myImage7);
    imchange(myImage8);
    wincheck();
}

myImage8.onclick = function () {
    imchange(myImage5);
    imchange(myImage7);
    imchange(myImage8);
    imchange(myImage9);
     wincheck();
}

myImage9.onclick = function () {
    imchange(myImage6);
    imchange(myImage8);
    imchange(myImage9);
     wincheck();
}
function imchange(currentimage){
    var mySrc = currentimage.getAttribute('src');
    if(mySrc === 'images/23.PNG') {
      currentimage.setAttribute ('src','images/13.PNG');
    } else {
      currentimage.setAttribute('src','images/23.PNG');
    }
    
}
function wincheck(){
    var mySrc = myImage.getAttribute('src');
    var mySrc2 = myImage2.getAttribute('src');
    var mySrc3 = myImage3.getAttribute('src');
    var mySrc4 = myImage4.getAttribute('src');
    var mySrc5 = myImage5.getAttribute('src');
    var mySrc6 = myImage6.getAttribute('src');
    var mySrc7 = myImage7.getAttribute('src');
    var mySrc8 = myImage8.getAttribute('src');
    var mySrc9= myImage9.getAttribute('src');
    
    if (mySrc==mySrc2&&mySrc==mySrc3&&mySrc==mySrc4&&mySrc==mySrc5&&mySrc==mySrc6&&mySrc==mySrc7&&mySrc==mySrc8&&mySrc==mySrc9)
        {
            var audio = new Audio('win.mp3');
            audio.play();
            alert('Winner!');
        }
    else 
        {}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Game Time, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}