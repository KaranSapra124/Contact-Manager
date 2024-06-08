// // // Browser
// // // Javascript Engine -> Javascript engine , environment for running / executing javascript in browser.

// // // Chrome -> Google -> V8 engine -> best javascript engine
// // // Apple -> Safari -> SpiderMonkey -> Apple

// // // Variables
// // // Variables are a type of containers in a programming language

// // // Data types

// // // Primitive and Non Primitive

// // // Primitive -> this datatype is responsible for storing one value at a time.
// // // eg: String,Boolean,Numbers,undefined,null
// // // String-> "" " " "APPLE IS A DELICIOUS FRUIT"
// // // NUMBERS -> 2 3 4 5 67
// // // BOOLEAN -> TRUE or FALSE

// // // NON primitive datatypes -> Non primitive data types are those data types which can store multiple values at a time.

// // // "KARAN","SAURABH",'MANISH' ...1000
// // // EG: array , objects [] {}

// // // VARIABLES

// // // Javascript -> 3 types -> var , let , const

// // // Initialization and Declaration
// // // Var keyword variables are Global Scoped
// // // var b; //Declaration
// // // b = 100; //Initialization

// // // // console.log(a); //100

// // // var b = 200;

// // // console.log(b)

// // // a = 200;

// // // var a = undefined
// // // // console.log(a); //200

// // // // Let -> Block Scoped Variables
// // // var a = undefined; //undefined is a placeholder type value which helps to make an empty varibale to get initialized
// // // Unique name
// // // var a = undefined;

// // // console.log(a);
// // // let a = 10;
// // // console.log(a)
// // // 2
// // // const c = 20;
// // // c = 40;
// // // console.log(c)

// // // var a = 10;
// // // const a = 20;
// // // console.log(a)

// // // If Else Conditional Statements -> To change flow of code according to conditions

// // // let speed = 150;
// // // let isBreaker = true;

// // // if (isBreaker == true) {
// // //   speed = 50;
// // //   console.log(speed, "Breaks accessible and Car Stopped");
// // // } else {
// // //   console.log("Accident hogaya rabba rabba");
// // // }

// // // let temperature = 40;

// // // if (temperature > 35) {
// // //   alert("Haye Haye Garmi!");
// // // }else{
// // //     alert("Thandi Hai")
// // // }

// // // Arithmetic Operators -> + , - , * , / , %
// // // Conditional Operators -> == , === , && , || , > , < , >= , <=

// // // Grading System

// // // let marks = prompt("Enter Your Marks...");

// // // // Grading system logic

// // // if (marks > 95) {
// // //   alert("A+ Grade");
// // // } else if (marks > 90 && marks < 95) {
// // //   alert("A Grade");
// // // } else if (marks > 80 && marks < 90) {
// // //   alert("B+ Grade");
// // // } else if (marks > 80 || marks < 80) {
// // //   alert("B Grade");
// // // } else {
// // //   alert("Work Hard");
// // // }

// // // && => this operator checks whether both of the conditions are true , if any of the condition gets false , the whole condition wil be false ,
// // // || => this operator states that if any of the condtion gets true , then whole condition will get true

// // // const isMeetup = false;

// // // if (isMeetup) {
// // //   alert("They Met Up");
// // // } else {
// // //   alert("They did'nt met up");
// // // }

// // // let num = prompt("Enter Your Number..");
// // // if (num % 2 == 0) {
// // //   num = 10;
// // //   console.log(num);
// // //   alert("even");
// // // } else {
// // //   alert("odd");
// // // }

// // // // '/' Divide (Quotient) , '%' Divide (Remainder)

// // // Loops -> loops are a concept in js / programming languages which helps to perform repetitive tasks

// // // For Loop , while , do while

// // // Loops has 3 statements -> iterator , condition , incrementor

// // // 1 - 10

// // // for (let i = 1; i <= 10; ) {
// // //   i++;
// // //   console.log(i);
// // // }

// // // // i = 0,1,2,3,4,5,6,7,8,9,10

// // // // 0 1 2 3 4 5 6 7 8 9
// // // let i = 0;
// // // while (i < 10) {
// // //   console.log(i);
// // //   i++;
// // // }

// // // let i = 0;
// // // do {
// // //   i++;
// // //   console.log(i);
// // // } while (i < 5);

// // // let num = prompt("Enter the number...");

// // // for (let i = 0; i <= 10; i++) {
// // //   console.log(num + " * ", i, " = ", num * i);
// // // }

// // let Name = prompt("Enter Your Name...")

// // console.log("Hello " + Name)

// // var a = 10;
// // var b = 20;
// // console.log(a+b)

// // // 11 - may - 2024
// // // Arrays

// // // Primitve , non primitive
// // // [1,2,3,4,5] -> Programming , counting , start from 0,1 2,3,4
// // // Array , store indexing form

// // // const arr = [1, 2, 3, 4, 5, "A", "B", true, false];
// // // // // 1,0
// // // for (let i = 0; i < arr.length; i++) {
// // //   console.log(arr[i] + 1); //true -> 1 + 1 = 2 , false -> 0 + 1 = 1
// // // }

// // // const str = "A";
// // // const str2 = 2;
// // // console.log(str + str2);

// // // aryabhatta -> 0 , counting -> 0 , humans -> 1
// // const arr = [1, 2, 3, 4, 5, 6, 7];

// // // arr.push(8, 9, 10, 11, 12, 13, 14, 15, 16, 17); // push method adds a new element at end of array
// // // // // console.log(arr); //[1,2,3,4,5,6,7,8]
// // // // [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
// // // arr.pop(); // removes element from last index
// // // console.log(arr);

// // // Loop + if-else -> search

// // // Function
// // // function is a block of code which helps to perform a same task again and again

// // // Java -> int , string , void
// // // Javascript

// // // function add(a, b) {
// // //   //Declaration
// // //   console.log(b);
// // //   console.log(a + b);
// // // }

// // // // Call
// // // add(21, 1, 2); //NaN -> Not a Number

// // // // a = 21 , b = undefined , 21 + undefined -> "*******" (NaN)

// // // Search of array

// // // function findElem(num, elem) {
// //   for (let i = 0; i < arr.length; i++) {
// //     if (5 == arr[i]) {
// //       console.log("Found ", arr[i]);
// //       break;
// //     } else {
// //       console.log("Not Found!");
// //     }
// //   }
// // // }
// // // findElem(arr, 5);
// // // [4,1,2,2,3424,234,234,234,234,23,423,4,4,234,23,4,234,234,23,423,4,234,23,423,4]

// //arrays continued
// const arr = [2, 4, 6, 8, 11, 67, 68, 43, 24];
// const newArr = [];
// // Step 1 -> array empty
// // Step 2 -> iterate array
// // Step 3 -> Conditional Statements

// let count = 0; //Step 1 done
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     newArr.push(arr[i]);
//   }
// }

// // let i = 0;
// // while (i < newArr.length) {
// //   if (i >! newArr.length) {
// //     if (newArr[i] < newArr[i + 1]) {
// //         // console.log(newArr[i])
// //         i++;
// //       } else {
// //         let temp = newArr[i];
// //         newArr[i] = newArr[i + 1];
// //         newArr[i + 1] = temp;
// //         // console.log(newArr[i])
// //         i++;
// //       }
// //   }
// // }
// // console.log(newArr);

// // const arr1 = arr.concat(newArr);
// // arr.reverse();
// // console.log(arr)

// // console.log(arr.unshift(7));
// // console.log(arr);

// // String

// let str = "$25000 per year";
// // let phrase = "Not Give Up!";
// // console.log(str.concat(phrase));
// // console.log(str)
// const newStr = str.substring(1, 6);
// console.log(typeof 3);

// let head = document.getElementById("head");
// let btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   head.innerHTML = "HEADING";
//   head.style.color = "red";
//   let li = document.createElement("li"); //<li>
//   li.innerHTML = "Hi";
//   head.append(li);
// });

// TO DO LIST 👇

// let txtinp = document.getElementById("txtinp");
// let btn = document.getElementById("btn");
// let box = document.getElementById("box");
// let taskArr = [];
// //create
// btn.addEventListener("click", function () {
//   taskArr.push(txtinp.value);
//   displayToDo(taskArr);
// });
// //read
// function displayToDo(arr) {
//   box.innerHTML = "";
//   for (let i = 0; i < arr.length; i++) {
//     box.innerHTML += `<li>${arr[i]}
//     <button onclick="deleteToDo(${i})">Delete</button>
//     </li>`;
//   }
// }
// //delete
// function deleteToDo(index) {
//   taskArr.splice(index, 1); //[hello]
//   displayToDo(taskArr)
// }

// Objects
// const userData = [
//   {
//     username: "Karan",
//     age: 23,
//   },
//   {
//     username: "Saurabh",
//     age: 25,
//   },
//   {
//     username: "John",
//     age: 28,
//   },
// ];

// for (let index = 0; index < userData.length; index++) {
//   console.log(userData[index].username,userData[index].age);
// }

const txtinp = document.getElementById("txtinp");
const numinp = document.getElementById("numinp");
const btn = document.getElementById("btn");
const userProfiles = document.getElementById("userProfiles");
const dataArr = [];
btn.addEventListener("click", function () {
  const newObj = {
    username: txtinp.value,
    userNumber: numinp.value,
  };
  dataArr.push(newObj);
  displayArr(dataArr);
});

// READ
function displayArr(arr) {
  userProfiles.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    userProfiles.innerHTML += `
  <div class="flex justify-evenly items-center shadow-lg p-4">
      <h4 class="text-lg font-semibold">${arr[i].username}</h4>
      <h5 class="text-sm text-gray-500">${arr[i].userNumber}</h5>
      <button onclick="deleteFn(${i})" class="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition">Delete</button>
    </div>
    `;
  }
}

// Delete
function deleteFn(index) {
  dataArr.splice(index, 1);
  displayArr(dataArr);
}
