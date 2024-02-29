function Shoe([name,main_category,sub_category,image,link,ratings,no_of_ratings,discount_price,actual_price]){
    this.name = name;
    this.main_category = main_category;
    this.sub_category = sub_category;
    this.image = image;
    this.link = link;
    this.ratings = ratings;
    this.no_of_ratings = no_of_ratings;
    this.discount_price = discount_price;
    this.actual_price = actual_price;
}

async function CreateImageGallery(img_array){
    let flexbox = await document.getElementById("gallery");
    for (let shoe_img of await img_array) {
        let card = document.createElement("div");
        card.classname = "card";
        let img = document.createElement("img");
        img.src = await shoe_img.image;
        await card.append(img);
        await flexbox.append(card);
    }
}

async function getCSV(){
    let data = await fetch('../data/shoesAmazon.txt');
    data = await data.text();
    data = await data.split("\n");
    listOfShoes = [];
    for (let shoe of data){
        shoe_prop = shoe.split("\t")
        let newShoe = new Shoe(shoe_prop);
        listOfShoes.push(newShoe);
    }
    slice_ = listOfShoes.slice(2,4);
    CreateImageGallery(slice_);
}