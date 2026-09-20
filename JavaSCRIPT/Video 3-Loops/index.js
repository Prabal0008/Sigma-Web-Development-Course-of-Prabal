console.log("Welcome to the world of loops in java script");


// Normal For Loop
// for (let i = 0; i <10;  i++) {
//     console.log(i);

// }


// for in loop
let obj = {
    name: "Prabal",
    role: "Dev",
    company: "Yardi"
}
for (const key in obj) {

    const element = obj[key];
    console.log(key);

}

// // for of loop
// for (const element of "Harry") {
//      console.log(element);
// }

// let i=0;
// while (i<6) {

//      console.log(i);
//      i++;
// }

let i=0;
do {

     console.log(i);
     i++;
    
} while (i<5);

