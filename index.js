let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodCabinet = food.split(",").sort();
console.log(foodCabinet);

let equipmentCabinet = equipment.split(",").sort();
console.log(equipmentCabinet);

let petsCabinet = pets.split(",").sort();
console.log(petsCabinet);

let sleepAidsCabinet = sleepAids.split(",").sort();
console.log(sleepAidsCabinet);

//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [];

cargoHold.push(foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet);

console.log(cargoHold);


//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
const input = require('readline-sync');

let cabinet = input.question("Select a cabinet (1-4) in the cargo hold: \n1. Food Cabinet\n2. Equipment Cabinet\n3. Pets Cabinet\n4. Sleep Aids Cabinet\n");


//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (cargoHold[cabinet - 1] === undefined) {
  console.log(`Sorry, cabinet ${cabinet} does not exist.`);
} else if (cabinet === '1') {
  console.log(`\nContents of Food Cabinet:\n${cargoHold[cabinet - 1]}`);  
} else if (cabinet === '2') {
  console.log(`\nContents of Equipment Cabinet:\n${cargoHold[cabinet - 1]}`);
} else if (cabinet === '3') {
  console.log(`\nContents of Pets Cabinet:\n${cargoHold[cabinet - 1]}`);
} else if (cabinet === '4') {
  console.log(`\nContents of Sleep Aids Cabinet:\n${cargoHold[cabinet - 1]}`);
}

//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

let item = input.question("Which item would you like?");

if (cargoHold[cabinet - 1].includes(item) == false){
  console.log(`Cabinet ${cabinet} DOES NOT contain ${item}`);
} else {
  console.log(`Cabinet ${cabinet} DOES contain ${item}`);
}