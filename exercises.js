//1. Write code to calculate the average of the following array:
console.log("Exercise 1: Average:");
console.log("\n");


var numbers = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array){
  var temp = 0;
  array.forEach(function(element){
    temp += element;
  })
  return temp / array.length;
}

var average = averageNumbers(numbers);
console.log(average);
// 6
console.log("\n");

//2. Write code to calculate the average length of the strings inside of the following array:
console.log("Exercise 2: Average length:");
console.log("\n");


var words = [
	"seat",
	"correspond",
	"linen",
	"motif",
	"hole",
	"smell",
	"smart",
	"chaos",
	"fuel",
	"palace"
];

function averageWordLength(array){
  var elementLength = 0;
    array.forEach(function(element){
      elementLength += element.length;
  })
  return elementLength / array.length;
}

var averageLength = averageWordLength(words);
console.log(averageLength);
// 5.3


//Write a function that will take in an array of words as one argument, and a word to search for as the other. Return true if it exists, otherwise return false. Don't use indexOf for this one. :)
console.log("\n");
console.log("Exercise 3: Finding Elements:");
console.log("\n");

var words = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience"
];


var doesWordExist = function(array, word){
  var res = false;
  array.forEach(function(element){
    if(word.localeCompare(element) === 0)
      res = true;
    })  
      return res;
};

var hasMatter = doesWordExist(words, "truth");
console.log(hasMatter);
// true

var hasDog = doesWordExist(words, "dog");
console.log(hasDog);
// false
console.log("\n");
//Write a function that will take in an array of words as one argument, and a word to search for as the other. The function will return the number of times that word appears in the array.
console.log("Exercise 4: Counting Repetion:");
console.log("\n");

var words = [
  "machine",
  "matter",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "matter",
  "truth",
  "disobedience",
  "matter"
];



function howManyTimes(array, word){
  var countZi = 0;
  array.forEach(function(element){
    if(word.localeCompare(element) === 0){
      countZi ++;
    }
  })
  return countZi;
}


var howManyMatter = howManyTimes(words, "matter");
console.log(howManyMatter);
// 4

var howManyDog = howManyTimes(words, "dog");
console.log(howManyDog);
// 0
console.log("\n");

//Take the following array, remove the duplicates, and return a new array. You're more than likely going to want to check out the indexOf function.

console.log("Exercise 5: Unique Array:");
console.log("\n");


function uniquifyArray(array){
  var indexCount = 0;
  var uarr = [];
   array.forEach(function(element){
     if(array.indexOf(element) >= indexCount){
       indexCount ++;
       //console.log(indexCount);
     }else{
       uarr.push(element);
     }
   })
   return uarr;
}

var words = [
  "crab",
  "poison",
  "contagious",
  "simple",
  "bring",
  "sharp",
  "playground",
  "poison",
  "communion",
  "simple",
  "bring"
];

var uniqued = uniquifyArray(words);
console.log(uniqued);

// ["crab", "poison", "contagious", "simple", "bring", "sharp", "playground", "communion"]
