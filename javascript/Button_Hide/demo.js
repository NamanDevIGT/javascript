
function hide(){
    document.getElementById('btn1').style.visibility = 'hidden';
}

function add_btn(){
    document.getElementById('btn2').insertAdjacentHTML("afterend", "<div style = 'background-color: #ff0000'> button 3 </div>");


}

// hide();

setTimeout(() => {hide()},2000);

setTimeout(() => {add_btn()}, 3000);
// add_btn();
// a = prompt("What is you age??");