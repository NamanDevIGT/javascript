// Function statement & function declaration
function a(){
    console.log("A called");
}

// Function Declaration
var b = function (){
    console.log("B called");
}

// Anonymous Function

// <----------- A function without a name is anonymous function
//              We can use this function to assingn value to a variable or pass these function as an parameter ----------->


// Named Function expression
var c = function xyz(){
    console.log("xyz called"); //It will give an error if we try to call the function outsite this scope and if try to acces this within this scope the function will be printed.
}


// Parameter & Arguments
function add(a, b){     //parameters
    console.log(a+b);
}
add(3,"naman");         //arguments



// First class function   
var z = function (fun1){        //When we pass function inside a function we called it as first class function
    console.log(fun1);
}

z(function (){
    
});


// arrow functions