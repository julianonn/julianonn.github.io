

var textArray = new Array("Julia", "Nonnenkamp");

var speed = 150; // time delay of print out
var index = 0; // start printing array at this posision
var textArrayLength = textArray[0].length; // the length of the text array
var scrollAt = 20; // start scrolling up at this many lines
var textPos = 0; // initialise text position
var contents = ''; // initialise contents variable
var row; // initialise current row
    
function typewriter()
{ 
    contents =  ' ';
    row = Math.max(0, index-scrollAt);
    var destination = document.getElementById("typewriter");
    
    while ( row < index ) {
        contents += textArray[row++] + '<br />';
    }
    destination.innerHTML = contents + textArray[index].substring(0, textPos) ;
    if ( textPos++ == textArrayLength ) {
        textPos = 0;
        index++;
        if ( index != textArray.length ) {
            textArrayLength = textArray[index].length;
            setTimeout("typewriter()", 500);
        }
        else {
            console.log("DONE TYPING");
            destination.dispatchEvent(new Event("doneTyping"));
        }
    } else {
        setTimeout("typewriter()", speed);
    }
}

typewriter();
