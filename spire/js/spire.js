function tips(inputurl){
    let url = "attributes/" + inputurl + ".html";
    window.open(url, "Popup", "location,status,scrollbars,resizable,width=800, height=800");
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      content.style.display = "none";
    } else {
      content.style.display = "block";
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
// Import content for skills and domains 
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
    let container = document.getElementById("skills");
    const myObj = JSON.parse(this.responseText);
    for (const skill in myObj){
        let innerContainer = document.createElement("div");
        let headline = document.createElement("h3");
        let element = document.createElement("p");
        headline.innerHTML = skill +": ";
        element.innerHTML = myObj[skill];

        innerContainer.append(headline);
        innerContainer.append(element);
        container.append(innerContainer);
    }
};
xmlhttp.open("GET", "../attributes/skills.txt");
xmlhttp.send();

const xmlhttp2 = new XMLHttpRequest();
xmlhttp2.onload = function() {
    let container = document.getElementById("domains");
    const myObj = JSON.parse(this.responseText);
    for (const domain in myObj){
        let innerContainer = document.createElement("div");
        let headline = document.createElement("h3");
        let element = document.createElement("p");
        headline.innerHTML = domain +": ";
        element.innerHTML = myObj[domain];

        innerContainer.append(headline);
        innerContainer.append(element);
        container.append(innerContainer);
    }
};
xmlhttp2.open("GET", "../attributes/domains.txt");
xmlhttp2.send();