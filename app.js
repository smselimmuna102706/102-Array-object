// Home Task on Array :
// Task related to Array: (45 Marks) 
//Write programs for Array method ?
// Ans: 

// 1 . concat() method in Array 
let num1 = [ 1,2,3,4];
let num2 = [ 5,6,7,8];

let concatArray = num1.concat(num2);
document.write(" Concat : " + concatArray);
document.write("</br>");

// 2 . every method in Array 

let num3 = [1,2,3,4,5,6];

let greaterCheck = num3.every(num3 => num3<9);
document.write ( "Greater : " + greaterCheck );

document.write("</br>");

let lessCheck = num3.every(num3 => num3<5);
document.write ( "Less : " + lessCheck );

document.write("</br>");

// 3. fill in Array 

let num4 = new Array(4);
// document.write(num4);
document.write("Fill : " + num4.fill(5));

document.write("</br>");

// 4 . filter in Array 

let num5 = [ 1,2,3,4,5];
let result1 = num5.filter(num5 => num5>2 || num5>5);
document.write("filter : " + result1);

document.write("</br>");

// 5. find in Array 

let num6 = [ 1,2,3,4,5];
let result2 = num6.find(num6 => num6>2);
document.write("find : " + result2);

document.write("</br>");

// 6 . findIndex in Array

let num7 = ["bangladesh", "india", "pakistan"];
let result3 = num7.findIndex(num7 => num7 === "india");
document.write ("findIndex : " + result3);

document.write("</br>");

// 7 .forEach() in Array 

let num8 = [1,2,3,4,5,6];
num8.forEach(element => {
      document.write(element  + ",");
      // console.log(element);
});

document.write("</br>");

// 8 . from in Array 
document.write(Array.from("Bangladesh"));
document.write("</br>");

// 9 . includes() in Array 
let num9 = [1,2,3,4,5,6];
document.write(num9.includes(2));
document.write("</br>");
document.write(num9.includes(10));

document.write("</br>");

// 10 . isArray() in Array 
let num10 = [1,2,3,4,5];
let result4 = Array.isArray(num10);
document.write(result4);

document.write("</br>");

// 11 . join() in Array 

let num11 = [1,2,3,4,5];
let result5 = num11.join("+");
document.write(result5);

document.write("</br>");

// 12. map in Array 
let num12 = [1,2,3,4];
let result6 = num12.map(element => element + 10);
document.write("Map :" + result6);

document.write("</br>");

//13 . push in Array

let num13= [1,2,3,4,5];
let result7 = num13.push("7");
document.write( "Push : " + num13);

document.write("</br>");

// 14 . pop in Array 

let num14= [1,2,3,4,5];
let result8 = num14.pop();
document.write( "Pop :" + num14);
document.write("</br>");

//15 . reverse in Array 
let num15= [1,2,3,4,5];
let result9 = num15.reverse();
document.write( "Reverse :" + num15);
document.write("</br>");

// 16 . shift in Array 

let num16= [1,2,3,4,5];
let result10 = num16.shift();
document.write( "shift : " + num16);

document.write("</br>");

// 17 . unshift in Array 

let num17= [1,2,3,4,5];
let result11 = num17.unshift("7");
document.write( "unshift : " + num17);

document.write("</br>");

// 18 . slice in Array 
let num18= [1,2,3,4,5];
let result12 = num18.slice(2,4);
document.write( "slice : " + result12);
document.write("</br>");

// 19 . splice in Array 
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
let result13 = fruits.splice(2,4); 
document.write("Splice : " + result13);
document.write("</br>");

//20 . sort in Array 

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let result14 = fruits1.sort();
document.write("sort : " + result14);

document.write("</br>");
//21. some in Array 

const ages = [3, 10, 18, 20];

      ages.some(checkAdult);
      function checkAdult(age) {
        return age > 18;
      }
      document.write("</br>");

// Write a program for concatenation two array (using spread operator) . 
// Ans : 

let names1 = ["Bangladesh","india","pakistan"];
let names2 =  ["Banana2", "Orange2", "Apple2", "Mango2"];


let result15 = ([...names1,...names2]);
document.write("Concat in spreed : " + result15);

document.write("</br>");


//  Task related to Object: (20 Marks)

// Write programs for entries(), hasOwn(), keys(), values() methods.

// 1. entries in object
const obj2 = { 10: 'arvind', 2: 'rahul', 7: 'Ankit' };  

document .write(Object.entries(obj2)[2]);
document.write("</br>");

// 2. hasOwn() in Object 

let movie = {  
      name: 'iron man',  
      genre: 'super hit',  
  }  
    
  let song = {  
      name: 'cardigan',  
  }  

  let resultObject1 = movie.hasOwnProperty('name'); 
  document.write(resultObject1);

  document.write("</br>"); 

  let resultObject2 = movie.hasOwnProperty('type'); 
  document.write(resultObject2);

  document.write("</br>"); 

//   3 . keys() in Object 
let movies = {  
      name: 'iron man',  
      genre: 'super hit',  
  }  

  let resultKeys = Object.keys(movies);
  document.write("keys : " + resultKeys);

  document.write("</br>"); 

  // 4. Value in Object 
  let movies1 = {  
      name: 'iron man',  
      genre: 'super hit',  
  }  

  let resultKeys1 = Object.values(movies1);
  document.write("Value : " + resultKeys1);

  document.write("</br>"); 


////Write a program for merging two object (using spread operator).

// Ans:

let myVehicle = {
      brand: 'Ford',
      model: 'Mustang',
      color: 'red'
    }
    
    let updateMyVehicle = {
      type: 'car',
      year: 2021, 
      color: 'yellow'
    }
    
    let myUpdatedVehicle = {...myVehicle , ...updateMyVehicle};
//     document.write(myUpdatedVehicle);
     console.log(myUpdatedVehicle);

     document.write("</br>"); 


     
// Task related to Loop: (15 Marks)

//Write a program using simple for loop.
//Ans: 
let = 0 ;
for(let i = 0 ; i<10; i++){
  document.write("</br>" + i);
}

document.write("</br>"); 

// Write a program using for-of loop.
//Ans: 
let numbers = [1,2,3,4,5];
for(let x of numbers){
  document.write("</br>" + x);
}

document.write("</br>"); 

// Write a program using for-in loop.
//Ans: 

let numbers1 = { id: 102, name: "Bangladesh",roll : 2345};
for(let y in numbers1){
  document.write("</br>" + `${y}:${numbers1[y]}`);
}



    
   







































