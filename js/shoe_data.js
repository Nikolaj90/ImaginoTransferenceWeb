// Define the shoe class
class ShoeConstructor{
    constructor(path,name,type,color){
        // For each shoe define attributes
        this.path = path;
        this.name = name;
        this.type = type;
        this.color = color;
    }
    addCard() {
        // Function for adding shoes to product gallery as cards
        // First create a card element
        const div = document.createElement("div");
        div.classList.add("card");

        // Then create the h2 element for the name of the shoe
        const title = document.createElement("h2");
        const node = document.createTextNode(this.name);
        title.appendChild(node);
        div.appendChild(title);

        // Import the image of the shoe and create an image
        const img = document.createElement("img");
        img.src = this.path;
        div.appendChild(img);

        // Finally append the card to the flex-box - shoe-gallery
        const card_gallery = document.getElementById("shoe-gallery");
        card_gallery.appendChild(div);
    }
}

// Make the shoe objects and collect them in an array
sneak_1 = new ShoeConstructor('img/Shoes/sneak_1.png','Super Sneaker 2000','Sneakers','Black');
sneak_2 = new ShoeConstructor('img/Shoes/sneak_2.png','Super Sneaker 2001','Sneakers','Black');
sneak_3 = new ShoeConstructor('img/Shoes/sneak_3.png','Super Sneaker 2002','Sneakers','Brown');
sneak_4 = new ShoeConstructor('img/Shoes/sneak_4.png','Super Sneaker 2003','Sneakers','Pink');
sandal_1 = new ShoeConstructor('img/Shoes/sandal_1.png','SuperSandal 1000', 'Sandal', 'White');
sandal_2 = new ShoeConstructor('img/Shoes/sandal_2.png','SuperSandal 1001', 'Sandal', 'Brown');
sandal_3 = new ShoeConstructor('img/Shoes/sandal_3.png','SuperSandal 1002', 'Sandal', 'Brown');

const shoe_all = [sneak_1,sneak_2,sneak_3,sneak_4,sandal_1,sandal_2,sandal_3];

// Define the function to be called onload of page - called within HTML
function addCards(){
    for (let shoe of shoe_all) {
        shoe.addCard();
    }
}
