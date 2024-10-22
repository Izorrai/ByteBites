import { app_id, app_key } from "./apiKeys.js";

const BASE_URL = "https://api.edamam.com/api/recipes/v2";

const cuisineType = [
    "American", "Asian", "British", "Caribbean", "Central Europe",
    "Chinese", "Eastern Europe", "French", "Indian", "Italian",
    "Japanese", "Kosher", "Mediterranean", "Mexican", "Middle Eastern",
    "Nordic", "South American", "South East Asian"
];

const health = [
     "keto-friendly", "Mediterranean", "pescatarian",
     "vegan", "vegetarian"
];

 const alergias = [
    "celery-free", "egg-free", "fish-free", "gluten-free",
     "peanut-free", "pescatarian", "shellfish-free", "soy-free"
];


const calorieRanges = [
    { value: "100-300", text: "100 - 300 kcal" },
    { value: "300-500", text: "300 - 500 kcal" },
    { value: "500-700", text: "500 - 700 kcal" },
    { value: "700-1000", text: "700 - 1000 kcal" },
    { value: "1000+", text: "1000+ kcal" }
]

const mealType = ["Breakfast", "Dinner", "Lunch", "Snack"];




let inputElement;
let tipoDieta = ""; 
let tipoPais = "";
let tipoAlergia = "";
let tipoCaloria = "";
let tipoMealType= "";

async function fetchData(query, searchParams = {}) {
    try {
        const url = new URL(BASE_URL);
        url.searchParams.append("type", "public");
        url.searchParams.append("app_id", app_id);
        url.searchParams.append("app_key", app_key);
        url.searchParams.append("q", query);
        
        if (tipoPais) url.searchParams.append("cuisineType", tipoPais);
        if (tipoDieta) url.searchParams.append("health", tipoDieta);
        if (tipoAlergia) url.searchParams.append("health", tipoAlergia);
        if (tipoCaloria) url.searchParams.append("calories", tipoCaloria)
        if (tipoMealType) url.searchParams.append("mealType", tipoMealType)

        
        
        for (const key of Object.keys(searchParams)) {
            url.searchParams.append(key, searchParams[key]);
        }

        const response = await fetch(url.toString());
        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error(error);
        return { error: error.message };
    }
}

function createSearchInput() {
    const contenedor = document.getElementById("search-container"); 
    inputElement = document.createElement("input");
    inputElement.placeholder = "Buscar recetas...";
    contenedor.appendChild(inputElement);
}

function crearSelectorDieta() {
    const selectorDieta = document.getElementById("selector");
    const elementoSelectDieta = document.createElement("select");
    const opcionSelect = document.createElement("option");
    opcionSelect.innerText = "Diet";
    opcionSelect.value = "";
    elementoSelectDieta.appendChild(opcionSelect);
    
    health.forEach(dieta => {
        const opcionSelect = document.createElement("option");
        opcionSelect.innerText = dieta;  
        opcionSelect.value = dieta;       
        elementoSelectDieta.appendChild(opcionSelect); 
    });

    selectorDieta.appendChild(elementoSelectDieta);
    
    elementoSelectDieta.addEventListener("change", (e) => {
        tipoDieta = e.target.value;   
    });

    return selectorDieta;
}

function crearSelectorAlergias() {
    const selectorAlergia = document.getElementById("selector");
    const elementoSelectAlergia = document.createElement("select");
    const opcionSelect = document.createElement("option");
    opcionSelect.innerText = "Todas las Alergias";  
    opcionSelect.value = "";
    elementoSelectAlergia.appendChild(opcionSelect);
    
    
    alergias.forEach(alergia => {
        const opcionSelect = document.createElement("option");
        opcionSelect.innerText = alergia;  
        opcionSelect.value = alergia;       
        elementoSelectAlergia.appendChild(opcionSelect); 
    });

    selectorAlergia.appendChild(elementoSelectAlergia);
    
    
    elementoSelectAlergia.addEventListener("change", (e) => {
        tipoAlergia = e.target.value;   
    });

    return selectorAlergia;
}

function crearMealType() {
    const selector = document.getElementById("selector");
    const elementoSelect = document.createElement("select");
    const opcionSelect = document.createElement("option");
    opcionSelect.innerText = "All type of meals"; 
    opcionSelect.value = "";
    elementoSelect.appendChild(opcionSelect); 

    mealType.forEach(meal => {
        const opcionSelect = document.createElement("option");
        opcionSelect.innerText = meal;
        opcionSelect.value = meal;
        elementoSelect.appendChild(opcionSelect); 
    });

    selector.appendChild(elementoSelect);
    elementoSelect.addEventListener("change", (e) => {
        tipoMealType = e.target.value; 
    });

    return elementoSelect;
}




function crearSelectorPais() {
    const selector = document.getElementById("selector");
    const elementoSelect = document.createElement("select");
    const opcionSelect = document.createElement("option");
    opcionSelect.innerText = "Countries";
    opcionSelect.value = "";
    elementoSelect.appendChild(opcionSelect); 

    cuisineType.forEach(pais => {
        const opcionSelect = document.createElement("option");
        opcionSelect.innerText = pais;  
        opcionSelect.value = pais;       
        elementoSelect.appendChild(opcionSelect); 
    });

    selector.appendChild(elementoSelect);
    elementoSelect.addEventListener("change", (e) => {
        tipoPais = e.target.value; 
    });
    
    return elementoSelect;
}



function crearSelectorCalorias() {
    const selector = document.getElementById("selector");
    const elementoSelect = document.createElement("select");
    const opcionSelect = document.createElement("option");
    opcionSelect.innerText = "Calorias";
    opcionSelect.value = "";
    elementoSelect.appendChild(opcionSelect); 

    calorieRanges.forEach(caloria => {
        const opcionSelect = document.createElement("option");
        opcionSelect.innerText = caloria.text;  
        opcionSelect.value = caloria.value;       
        elementoSelect.appendChild(opcionSelect); 
    });

    selector.appendChild(elementoSelect);
    elementoSelect.addEventListener("change", (e) => {
        tipoCaloria = e.target.value; 
    });
    
    return elementoSelect;
}





function crearBotonBusqueda() {
    const boton = document.getElementById("selector");
    const searchButton = document.createElement("button");
    searchButton.innerText = "Buscar";

    searchButton.addEventListener("click", async () => {
        const query = inputElement.value;
        await displayResults(query);
    });

    boton.appendChild(searchButton);
}



async function displayResults(query) {
    const datos = await fetchData(query, { });
    
    const contenedor = document.getElementById("results");
    contenedor.innerHTML = "";

    if (datos.hits && datos.hits.length > 0) {
        datos.hits.forEach(hit => {
            const receta = hit.recipe;
            const recetaElement = document.createElement("div");
            recetaElement.classList.add("carta");

            const imagen = document.createElement("img");
            const titulo = document.createElement("h4");
            //const ingredientes = document.createElement("p");
            const calories = document.createElement("p");
            const link = document.createElement("a");

            titulo.innerText = receta.label;
            imagen.src = receta.image;
            link.href = receta.url;
            link.innerText = "Ir a la receta";
            //ingredientes.innerText = receta.ingredients.map(ing => ing.text).join(", ");
            calories.innerText = receta.calories;

            recetaElement.appendChild(imagen);
            recetaElement.appendChild(titulo);
            //recetaElement.appendChild(ingredientes);
            recetaElement.appendChild(calories);
            recetaElement.appendChild(link);

            contenedor.appendChild(recetaElement);
        });
    } else {
        contenedor.innerHTML = "<p>No se encontraron recetas.</p>";
    }
}



createSearchInput()
crearSelectorDieta()
crearSelectorAlergias()
crearSelectorPais()
crearSelectorCalorias()
crearMealType()
crearBotonBusqueda()
 