
// Logical AND(&&)
    // true && false = false;
    // false && false = false;
    // true && true = true

// Logical OR(||)
    // true || false = true;
    // false || false = false;
    // true || true = true


// Logical Not (!)

var isEighteen = true;
var hasDrivingLicense = false;

if(isEighteen || hasDrivingLicense){
 console.log("Can drive a car");
}else{
    console.log("Cannot drive a car");
}

console.log(!isEighteen);
















































// // #############  LOGICAL AND ################
// // AND(&&) Operator cheatsheet.

// // true && false = false;
// // false && false = false;
// // true && true = true

// const a = true, b = false;
// const c = 4;

// console.log(a && a); // true
// console.log(a && b);  // false

// console.log((c > 2) && (c < 2)); // false


// // Use the code snippet below to determine if a person is eligble to drive
// // USING THE AND(&&) OPERATOR

// let canDrive = true;
// let hasLicense = false;

// const readyToDrive = canDrive && hasLicense;

// console.log(readyToDrive) //OUTPUT: false



// // ########### LOGICAL OR ####################
// // OR(||) Operator cheatsheet.

// // true || false = true;
// // false || false = false;
// // true || true = true

// const d = true, e = false, f = 4;

// console.log(d || e); // true
// console.log(e || e); // false
// console.log((f>2) || (f<2)); // true


// // USING THE OR(||) OPERATOR

// let canDrive2 = true;
// let hasLicense2 = false;

// const readyToDrive2 = canDrive2 || hasLicense2;

// console.log(readyToDrive2) // OUTPUT: true





// // ############# LOGICAL NOT ##################

// const g = true, h = false;

// // logical NOT
// console.log(!g); // false
// console.log(!h); // true

// const author = "Franklin";

// if (author != "Franklin") {
//     console.log("This is not the author")
// }

// // USING THE NOT(!) OPERATOR

// let canDrive3 = true;
// let hasLicense3 = false;

// if (!canDrive3 && !hasLicense3) {
//      console.log("Sorry, you are not eligible to drive")
// }

// //OUTPUT: "Sorry, you are not eligible to drive"