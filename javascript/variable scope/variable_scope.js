function var_scope(){
    var a = 5;

    if(true){
        var a  = 4;
        console.log(a);
    }

    console.log(a);
}

function let_scope(){
    let b = 5;

    if(true){
        let b = 4;
        console.log(b);
    }

    console.log(b);
}
// Main Function Calling
var_scope();
let_scope();