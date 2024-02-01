//  async function get_api(){
//      try{
//          const error = false;
//
//          if(error == true){
//              console.log("Error!!!")
//          }else {
//              const a = await fetch("https://www.boredapi.com/api/activity")
//                  .then((result)=> result.text())
//                  .then((data) => console.log(data))
//          }
//      }
//      finally {
//          console.log("Out of try")
//      }
//  }
//
//  get_api().then((r) => console.log(r));
//
//
//  console.log("Normal main function")
//
// const a = '{"username" : "naman", "password" : "123"}';
//
// const obj = JSON.parse(a);
//
// obj.username = new obj();

// try{
//     let a  =  10;
//     let b = a / 0;
//
//     if (b >> 0){
//         console.log(b);
//     }
//
// }
//
// catch (err){
//     console.log(err);
// }
//
// finally
// {
//     console.log("Enter no greater than 0");
// }

function x(){
    for(let i = 1; i<=5; i++){
        setTimeout(function (){|
            console.log(i);
        },i*1000)
    }
}

x();