"use strict";


const inputKilograms = document.querySelector(`.kg`);
const inputKilogramsTwo = document.querySelector(`.kg-2`);
const inputPounds = document.querySelector(`.lb`);
const inputPoundsTwo = document.querySelector(`.lb-2`);
const buttonChange = document.querySelector(`.change`);
const buttonConvert = document.querySelector(`.convert`);
const overlayOne = document.querySelector(`.overlay-1`);
const overlayTwo = document.querySelector(`.overlay-2`);


overlayOne.classList.remove(`hidden-1`);

let isChange = true;

buttonChange.addEventListener(`click`, () =>{

    if(isChange === false){

        inputKilogramsTwo.value = ``;
        inputPoundsTwo.value = ``;

        overlayOne.classList.remove(`hidden-1`);
        overlayTwo.classList.add(`hidden-2`);

    }

    if(isChange === true){

        inputKilograms.value = ``;
        inputPounds.value = ``;

        overlayOne.classList.add(`hidden-1`);
        overlayTwo.classList.remove(`hidden-2`);

    }

    isChange = !isChange;

});

buttonConvert.addEventListener(`click`, () =>{

    if(isChange === true){

        if(inputKilograms.value > 0){
            
            inputPounds.value = inputKilograms.value * 2.2;

        }

    }

    if(isChange === false){

        if(inputPoundsTwo.value > 0){

            inputKilogramsTwo.value = inputPoundsTwo.value * 0.45;

        }

    }

});