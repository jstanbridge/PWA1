/*
Name: James Stanbridge
Date: 10 Arpil 2014
Assignment: JavaScript Practice

Note: I added comments to the problems I had trouble with before to make sure that I understood what was happening in
each one. I did this without listening to the logic offered in Tuesday's cast. Please let me know if I was off in my
understanding of anything. Thank you.
 */


// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

//-----------------------------------------------------------------------------------

    console.log("1. avg of an array of numbers");
    var avgNumbers = function(arr){
        var average = 0;
        for(var i = 0, j = arr.length; i < j; i++){ //This tells the function to go through each item in the array.
            average += arr[i]; //This adds each array index to the average.
        }
        average /= arr.length; //This divides average (which is now the sum of all indexes) by the length of the array.
        return average;
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

//-----------------------------------------------------------------------------------

    console.log("2. concat first and last name");


    function fullName(firstName, lastName){
            return firstName+" "+lastName;
        }

    var name = fullName('James','Bond');

    console.log(name);

//-----------------------------------------------------------------------------------

    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function"


    function wordCount(string){
        return string.split(/\s+/).length;
    }

    console.log(wordCount(ipsum));

//-----------------------------------------------------------------------------------

    console.log("4. sentence char count");


    function charCount(string2){
        return string2.split("").length;
    }

    console.log(charCount(ipsum));

//-----------------------------------------------------------------------------------

    console.log("5. how many vowels in a word");

    function vowelsInWord(string){
        var vowels = ['a','e','i','o','u']; //Create an array with the characters we want to isolate.

        number = 0; //Declare a var to contain the count that will go to the console log.

        this.string = string.toLowerCase().split("");

        for(var i = 0, j = this.string.length; i < j; i++){ //Loop through all characters in the string.
            for(var ii = 0, jj = vowels.length; ii < jj; ii++){  //Loop through each vowel in the vowels array.
                if(this.string[i] === vowels [ii]){ //Check to see if a string character is a vowel.
                    number++; //Increase the count by one if the string character was a vowel.
                };
            };
        };
        return number;
    }

    console.log(vowelsInWord('JavaScript'));

//-----------------------------------------------------------------------------------

    console.log("6. find number and create an array of even or odd numbers");


    function findNum(array, bool){ //Setting up function.
        var numArr = [], //Declare var for array of numbers to be returned.
            value;

        if(bool === undefined || bool){  //Check to see if there is no boolean value, or if the value is true.
            for(var i = 0, j = array.length; i < j; i++){ //Loop through array indexes.
                value = array[i]; //Set value equal to each array index as it loops.
                if(value%2 === 0){ //If index value is evenly divisible by 2...
                    numArr.push(value);  //...add that value to the array that will be returned.
                };
            };
        }else{
            for(var i = 0, j = array.length; i < j; i++){ //Loop through array indexes.
                value = array[i]; //Set value equal to each array index as it loops.
                if(value%2 !== 0){ //If index value is NOT evenly divisible by 2...
                    numArr.push(value); //...add that value to the array that will be returned.
                };
            };
        };

        return numArr;
    }

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();