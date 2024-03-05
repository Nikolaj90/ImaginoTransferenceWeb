function capitalize(name){
  firstLetter = name[0].toUpperCase();
  return firstLetter + name.slice(1,);
}

async function func_close(){
    const removeElement = document.getElementById("desc-content-inner");
    removeElement.remove();
    const img_element = document.getElementById("image-description");
    img_element.style.display = "none";
}

async function func_open(deity){
    let textContent = await getText(deity)
    const img_box = document.getElementById("image-description");
    const img_element = document.getElementById("desc-img-item");
    img_box.style.display = "flex";
    img_element.src = "attributes/img/" + deity + ".jpg";

    const content_container = document.getElementById("desc-content");

    const content = document.createElement("div");
    content.id = "desc-content-inner"
    content.style.display = "block";

    const deityName = document.createElement("h2");
    deityName.innerHTML = capitalize(deity);
    const desc = document.createElement("p");
    const deityText = document.createTextNode(textContent);
    desc.append(deityText);
    content.append(deityName);
    content.append(desc);
    content_container.append(content);
}

async function getText(deity){
  let myObject = await fetch("attributes/" + deity + ".txt");
  let myText = await myObject.text();
  return myText;
}

/*

*/