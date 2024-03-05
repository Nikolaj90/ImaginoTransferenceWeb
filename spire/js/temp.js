
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
    let container = document.getElementById("skills");
    const myObj = JSON.parse(this.responseText);
    for (const skill in myObj){
        let innerContainer = document.createElement("div");
        let headline = document.createElement("h3");
        let element = document.createElement("p");
        headline.innerHTML = skill;
        element.innerHTML = myObj[skill];

        innerContainer.append(headline);
        innerContainer.append(element);
        container.append(innerContainer);
    }
};
xmlhttp.open("GET", "../attributes/skills.txt");
xmlhttp.send();

