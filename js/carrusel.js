import { displayResultsCarrusel } from "./fotosfuncion.js";
const elements = [
    { name: "Cheese", description: "Delicious cheese", image: "fotos/CHEESE.png" },
    { name: "Desserts", description: "Sweet desserts", image: "fotos/DESSERTS.png" },
    { name: "Cocktails", description: "Refreshing cocktails", image: "fotos/COCKTAILS.png" },
    { name: "Fish Lovers", description: "For fish lovers", image: "fotos/fishLOVERS.png" },
    { name: "Rices", description: "Various types of rice", image: "fotos/rices.png" }
];

class Carrusel {
    constructor(elements,parentId) {
        this.elements=elements;
        this.currentPosition=0;
        this.parentId=parentId;
        this.parentId=document.getElementById(parentId);
        this.createHtml();
        this.render();
        this.intervalTime = 3000;
    }
createHtml(){
    this.html  = document.createElement("section");
    const leftButton = document.createElement("button");
    const rightButton = document.createElement("button");

    leftButton.innerHTML = "&#10094";
    rightButton.innerHTML = "&#10095;";

    const article =document.createElement("article");
    this.imagesContainer = document.createElement("div");
    article.appendChild(this.imagesContainer);
    this.html.append(article, leftButton, rightButton);

    this.parentId.appendChild(this.html)

    leftButton.addEventListener("click",()=>{this.moveLeft();})
    rightButton.addEventListener("click",()=>{this.moveRight();})
}
render() {
    this.imagesContainer.innerHTML = ""; 

    
    const start = this.currentPosition;
    const end = Math.min(this.currentPosition + 3, this.elements.length);

    for (let i = start; i < end; i++) {
        const img = document.createElement("img");
        img.setAttribute("src", this.elements[i].image);
        img.setAttribute("alt", this.elements[i].name);
        this.imagesContainer.appendChild(img);
        img.addEventListener('click', () => {displayResultsCarrusel(this.elements[i].name)});
    }
}
moveLeft() {
    this.currentPosition -= 1;
    if (this.currentPosition < 0) {
        this.currentPosition = this.elements.length - 3;  
    }
    this.render();
}
moveRight() {
    this.currentPosition += 1;
    if (this.currentPosition >= this.elements.length - 2) {
        this.currentPosition = 0; 
    }
    this.render();
}
}


    const miCarrusel = new Carrusel(elements, "miCarrusel");
