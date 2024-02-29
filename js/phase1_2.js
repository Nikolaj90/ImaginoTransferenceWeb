// Asyncr..
// let func = () => {console.log("works")};

// setTimeout(()=>{
//     console.log("Also works");
//     func();
// },2000);

// Promises
let myPromise = new Promise((res,rej) => {
    setTimeout(()=>{
        res("I love you!");
    },2000)
});

// myPromise.then((value)=>{
//     console.log(value);
// });

// let getFile = new Promise((resolve,reject)=>{
//     let req = new XMLHttpRequest(); // Only integrated in browsers, does not work here
//     req.open("GET","text.html");
//     req.onload = function(){
//         if (req.status === 200){
//             resolve(req.response);
//         }else{
//             reject("File not found");
//         }
//     };
//     req.send();
// });

// getFile.then(
//     function(value){console.log(value);},
//     function(error){console.log(error);}
// );