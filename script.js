function bookCalculation(){
    // Default is 1 page per 1 IN GAME minute
    // Default day length is one hour, so if it's 1 hour and 1.0p/m
    // One hour days have 1440 in game minutes
    // One minute IRL is 24 minutes in game
    // AKA 24 pages in one real life minute
    // Say someone has 220 pages, input
    // Default input 1.0 remains
    // Result is...
    // 220 / 24 = minutes irl
    var volSelected = document.getElementById("volumes").value; // Selected book volume
    let readSpeed = parseFloat(document.getElementById('readspeed').value); // Book reading speed as set in the settings
    if(volSelected == "vol1"){
        readBook(220, readSpeed);
    }
    else if (volSelected == "vol2"){
        readBook(260, readSpeed);
    }
    else if (volSelected == "vol3"){
        readBook(300, readSpeed);
    }
    else if (volSelected == "vol4"){
        readBook(340, readSpeed);
    }
    else if (volSelected == "vol5"){
        readBook(380, readSpeed);
    }
}

function readBook(bookLength, readSpeed){
    let readTrait = document.getElementById("readTrait").value;
    let readTraitVal;
    if (readTrait == "slow"){
        readTraitVal = 0.7;
    }
    else if (readTrait == "normal"){
        readTraitVal = 1;
    }
    else if (readTrait == "fast"){
        readTraitVal = 1.3;
    }
    const textToChange = document.getElementById("result");
    if (isNaN(readSpeed)){
        textToChange.innerText = "Speed value cannot be empty!";
    }
    else if (readSpeed < 0){
        textToChange.innerText = "Speed value cannot be less than 0!";
    } else {
        let result = (Math.round(bookLength * (2.5 * readSpeed * readTraitVal) / 60 * 100) / 100).toFixed(1);
        if (result >= 1){
            textToChange.innerText = result + "  minutes to read";
        } else{
            resultInSeconds = (bookLength * (2.5 * readSpeed))
            textToChange.innerText = resultInSeconds + "  seconds to read";
        }
        
    }
}

function materialCost(){
    let valueOne = parseFloat(document.getElementById('wallWidth').value);
    let valueTwo = parseFloat(document.getElementById('wallLength').value);
    let wallCount = (valueOne * 2) + (valueTwo * 2);
    let squareFootage = valueOne * valueTwo;
    let planks = (wallCount * 2) + (wallCount * 2);
    let nails = (wallCount * 2) + (wallCount * 4);
    // Walls cost
    const textToChange = document.getElementById("matCost");
    textToChange.innerText = planks + "  planks\n" + nails + " nails";
    // Door cost
    const doorUpdate = document.getElementById("doorCost");
    doorUpdate.innerText = "4 planks\n4 nails\n2 door hinges\n1 door knob";
    // Floor + Roof cost
    const floorCalculation = document.getElementById("floorRoofCost");
    floorCalculation.innerText = squareFootage * 2 + " planks and " + squareFootage * 2 + " nails";
    // Square footage
    const squareFootageUpdate = document.getElementById("squareFootage");
    squareFootageUpdate.innerText = squareFootage + " tiles";
    // SUM
    const sumUpdate = document.getElementById("sumMaterials");
    let sumPlanks = planks + 4 + squareFootage * 2;
    let sumNails = nails + 4 + squareFootage * 2;
    sumUpdate.innerText = sumPlanks + " planks\n" + sumNails + "nails\n" + "2 door hinges\n1 door knob";

    
}