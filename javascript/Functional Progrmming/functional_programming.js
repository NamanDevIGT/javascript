// Functional programing to calucate the area diameter and circumfrence of the circle.
var radius = [2,4,6,8,9,7];


function area(radius){
    return Math.PI * radius *radius;
}

function circumfrence(radius){
    return 2 * Math.PI * radius; 
}

function diameter(radius){
    return 2 * radius;
}

function calculate(logic){
    var output = [];
    for(var i = 0; i < radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(area));
console.log(calculate(circumfrence));
console.log(calculate(diameter));
