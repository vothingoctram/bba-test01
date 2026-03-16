const { log } = require("node:console");

const playerName = "Mario";
const currentLives = 3;
const level1 = 25;
const  level2 = 30;
const level3 = 45;

function calculateTotalCoin(level1, level2, level3){
    return level1+level2+level3;
};
console.log(calculateTotalCoin(level1, level2, level3));

function averageCoin(level1, level2, level3){
 return calculateTotalCoin(level1, level2, level3)/3;
}
console.log(averageCoin(level1, level2, level3));
console.log("so du khi chia tong coin cho 3: " + averageCoin(level1, level2, level3)%3);
    
