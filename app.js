// ***Q2 Convert Hours into Seconds***


// function hoursIntoSeconds(hours){
//     let seconds = hours * 3600
//     return seconds
// }

// console.log(hoursIntoSeconds(2))

// *** Q3 CALCULATE THE PERIMETER OF A RECTANGLE **

// function perimeter(length, width){
//     let p = length*2 + width*2
//     return p
// }


// console.log(perimeter(20,10))


// ** Q4 CALC THE AREA OF A TRIANGLE **



// function calcTriangleArea(base, height){
//     area = 1/2 *(base *height)
//     return area
// }


// console.log(calcTriangleArea(20,20))

// **Q5 EXTEND A STRING. write a function accepts a string and adds 'Frontend' onto the end of it **

// function appendFrontend(string){
//     return string +"Frontend"

// }

// console.log(appendFrontend('apple'))



//  ** Q6 GREATER THAN 100?


// function sumGreaterThan100(num1, num2){

// if(num1 + num2 > 100){
//     return true
// }
// else{
//     return false
// }

// }

// console.log(sumGreaterThan100(24,1))


// ** Q7  less than or equal to zero?**


// function lessThan(num){
//     return num<= 0
// }

// console.log(lessThan(0))


// **Q8 opposite boolean **

// function oppositeBoolean(bool){
//     return !bool
// }

// console.log(oppositeBoolean(true))


// ** QUESTION 9 **


// function isNotZero(element){
//  return element !==0
// }
// console.log(isNotZero(''))


// ** Q 10 calculate the remainder **

// function calcRemainder(num1, num2){
//     let remainder = num1 % num2
//     return remainder
// }

// console.log(calcRemainder(5,3))




// ** Q11 is the number odd**

// function isOdd(num){

//     if(num % 2 !==0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(isOdd(3))




// ** Q12 **

// function booleanInteger(num){
//     if(num % 2 ===0){
//         return 1
//     }
//     else{
//         return -1
//     }
// }

// console.log(booleanInteger(1))

// QUESTION 12 USING THE TERNINARY OPERATOR ** IMPORTANT ****

// function booleanInteger(num){
//     return num % 2 ===0 ? 1 : -1;
// }
// console.log(booleanInteger(5))





//  ** Q13/q14  check if user is logged in and subscribed** 

// function isLoggedInAndSubscribed(string1, string2){
//     return (string1 === "LOGGED_IN") || (string2 ==="SUBSCRIBED")

// }

// console.log(isLoggedInAndSubscribed("LOGGED_IN","SUBSCRIBED"))
// console.log(isLoggedInAndSubscribed("LOGGED_OUT","UNSUBSCRIBED"))

// ** Medium Challenges




// q1


// function falsyorTruthy(elem1, elem2){
//     return (!elem1) ? elem1: elem2;

// }
// console.log(falsyorTruthy(null,5));


// Q2 Return the length of any given array, then get the last element of the array Q3

// function arrLength(arr){
//  return arr [arr.length -1];
// }

// console.log(arrLength([1, 2, 3, 4, 5, 6, 7])




// Q4 find the sum of an arrau


// function arrSum(arr){
//     let sum = 0;

//     for (let i = 0; i<arr.length; i++){
//         sum = sum + arr[i]
//     }
//     return sum;

// }
// console.log(arrSum([1,2,3]))


//Q5 add up the numbers from a single number

// function progressiveSum(num){
//     let sum = 0
//     for (let i = 1; i<=num; i++){
//         sum = sum + i
//     }
//     return sum;
// }

// console.log (progressiveSum(4))
// console.log (progressiveSum(600))


// Q6 Calculate the Time

// function calcTime(seconds){
// let timerMinutes = Math.floor(seconds/60)
// let timerSeconds = seconds % 60;
// if(timerMinutes.toString().length ===1){
//     timerMinutes = '0' + timerMinutes
// }

// return timerMinutes + ':' + timerSeconds
// }

// console.log(calcTime(590))


// Q7 Find the Largest Number HARD


// function getMax(arr){
//     let max = arr[0]
//     for( let i = 1; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i]
//         }
//     }
//     return max;
// }

// console.log(getMax([-100, -200, -300, 600]))

// Q8 Reverse a String

// function reverseString(string){
//     let reverse = '';
//    for( let i = 0; i<string.length; i++){
//     reverse =  string[i]+ reverse ;

//    }
//    return reverse;
// }

// console.log(reverseString('hello'))

//same question using array reverse property IMPORTANT TO UNDERSTAND 


// function reverseString(str){
//     return str.split('').reverse().join('')
    
// }

// console.log(reverseString('hi how are you'))


// TURH EVERY ELEMENT IN AN ARRAY INTO 0 Q9


// function convertToZeros(arr){
//     for(let i = 0; i < arr.length; i++){
//         arr[i] = 0
//     }
//     return arr
// }
// console.log(convertToZeros([1,2,3,4,4,5,5,5,5,5,5,5,6,7,7,78,45,456,456,]))


//Q9 USING ARRAY.MAP

// function convertToZeroes(arr){
//     return arr.map(elem => 0)
// }

// console.log(convertToZeroes([1,2,3,4]))



// Q10 FILTER OUT ALL THE APPLES 

// function removeApples(arr){
//     let noApples = []
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] !== 'apples'){
//             noApples.push(arr[i])
//         }
//     }
//     return noApples
    
// }
// console.log(removeApples(['Banana','apples','dog','apples','apples']))


//q10 using filter out property


//  function removeApples(arr){
//     return arr.filter( elem => elem !=='apples')

//  }

//  console.log(removeApples(['Banana','apples','dog','apples','apples']))


// Filter out all the falsy values

// function filterOutFalsy(arr){
//     return arr.filter(elem => !!elem ===true)
// }

// console.log(filterOutFalsy(['apple',null,NaN,0,undefined])) 

// function filterOutFalsy(arr){
//     let truthyArr = [];

//     for( let i = 0; i < arr.length; i++){
//         if(!!arr[i] === true){
//             truthyArr.push(arr[i])
//         }
//     }
//     return truthyArr
// }

// console.log(filterOutFalsy([1,2,0, null, "", []]))


//Q12 Truthy to true, falsy to false


// function convertToBoolean(arr){
//     newArr = []

//     for (let i = 0; i < arr.length; i++){
//         if(!!arr[i] ===false){
//             newArr.push("false")
//         }
//         else{
//             newArr.push("true")
//         }
//     }
   
//     return newArr
// }
    // console.log(convertToBoolean([500, 0 ,"bob","", []]))

// function convertToBoolean(arr){
//     return arr.map(elem => !!elem)
// }

// console.log(convertToBoolean([500, 0 ,"bob","", []]))


