let a;
a = prompt("Enter your age");
if(a >= 18){
    confirm("are you sure you are 18+")
    alert("you can drive");
    // location.href = "www.google.com";
    // document.body.style.backgroundColor = "red";
}
else if(a < 18 & a > 0){
    alert("you can not drive");
    // document.body.style.backgroundColor = "yellow";
}

else{
    console.error("Please enter the positive age");
}



