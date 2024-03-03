function tips(inputurl){
    let url = "tips/" + inputurl + ".html";
    window.open(url, "Popup", "location,status,scrollbars,resizable,width=800, height=800");
}



async function coll_func(){
    const coll = document.getElementById("coll1");
    coll.addEventListener("click", function (){
        console.log("Js is just fun");
    })
}
document.onload = coll_func();
