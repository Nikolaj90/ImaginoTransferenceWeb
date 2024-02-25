function func_close(){
    const img_element = document.getElementById("image-description");
    img_element.style.display = "none";
}

function func_open(path){
    const img_box = document.getElementById("image-description");
    const img_element = document.getElementById("desc-img-item");
    img_box.style.display = "flex";
    img_element.src = "img/" + path + ".jpg";

    const content_container = document.getElementById("desc-content");
    const content = document.getElementById(path);
    content.style.display = "block";
    content_container.appendChild(content);

}

/*
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  img_element.style.display = "none";
}
*/