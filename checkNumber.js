function checkNumber(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            console.log("fish bash");
        } else if (i % 5 === 0) {
            console.log("bash");
        } else if (i % 3 === 0) {
            console.log("fish");
        } else {
            console.log(i);
        }
    }
}
  
module.exports = checkNumber;