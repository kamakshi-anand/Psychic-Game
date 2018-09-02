var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

var wins11 = 0;
var losses11 = 0;
var tries11 = 0;
var allowedTries = 10;

// first generate code for allowedTries:

document.getElementById("tries").innerHTML = allowedTries;
//create onkeyup event

document.onkeyup = function (event) {
    //This function will get executed when user typed a letter
    var userTyped = document.getElementById("myGuess");
    if (tries11 == 0) {
        var rnum = Math.random() * characters.length;
        // alert(rnum);
        var randomN = Math.floor(rnum);
        // alert(randomN);
        // Math.floor(Math.random() * 1000)
        // var rnum = Math.floor(randomN * characters.length);
        randomstring = characters.substring(randomN, randomN + 1);
        //alert("The random alphabet is " + randomstring);
        randomstring = randomstring.toLowerCase();

        userTyped.innerHTML = userTyped.innerHTML + event.key;
    } else {
        userTyped.innerHTML = userTyped.innerHTML + ", " + event.key;
    }

    if (tries11 < allowedTries) {
        var userAlphabet = event.key;
      //  alert("computer generated is " + randomstring);
        tries11++;
        document.getElementById("tries").innerHTML =
            allowedTries - tries11;
        if (userAlphabet.toLowerCase() === randomstring) {
            wins11++;
            tries11 = 0;
            document.getElementById("tries").innerHTML = allowedTries;
            userTyped.innerHTML = "";

            document.getElementById("wins").innerHTML = wins11;
            alert("Great Job!!! You Won.");
        } else if (tries11 == 10) {
            losses11++;
            document.getElementById("losses").innerHTML = losses11;
            tries11 = 0;
            document.getElementById("tries").innerHTML = allowedTries;
            userTyped.innerHTML = "";
            alert("Sorry you lost. Please try again.");
        }


    } else {
        tries11 = 0;
        document.getElementById("tries").innerHTML = allowedTries;
        userTyped.innerHTML = "";


    }
};

