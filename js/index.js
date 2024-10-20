


import ModalBlog from "./blogModal.js";
const modalBlog = new ModalBlog("NUEVA RECETA");
modalBlog.crearModalBlog();

import ModalFormulario from "./formularioModal.js";
const modalFormulario = new ModalFormulario("FORMULARIO");
modalFormulario.crearModalFormulario();

import Blog from "./blogReceta.js";


const recetasLectores = [
    {
        "nombre": "Ensalada César",
        "foto": "url_foto_cesar",
        "calorías": 350,
        "ingredientes": [
            "lechuga romana",
            "pollo a la parrilla",
            "crutones",
            "queso parmesano",
            "aderezo César"
        ]
    },
    {
        "nombre": "Tacos de Pollo",
        "foto": "url_foto_tacos",
        "calorías": 450,
        "ingredientes": [
            "tortillas de maíz",
            "pollo desmenuzado",
            "cebolla",
            "cilantro",
            "salsa"
        ]
    },
    {
        "nombre": "Pasta al Pesto",
        "foto": "url_foto_pasta_pesto",
        "calorías": 600,
        "ingredientes": [
            "espaguetis",
            "salsa pesto",
            "piñones",
            "queso parmesano",
            "aceite de oliva"
        ]
    },
    {
        "nombre": "Sushi de Salmón",
        "foto": "url_foto_sushi",
        "calorías": 300,
        "ingredientes": [
            "arroz para sushi",
            "salmón fresco",
            "alga nori",
            "aguacate",
            "salsa de soja"
        ]
    },
    {
        "nombre": "Pizza Margherita",
        "foto": "url_foto_pizza",
        "calorías": 800,
        "ingredientes": [
            "masa para pizza",
            "salsa de tomate",
            "mozzarella",
            "albahaca",
            "aceite de oliva"
        ]
    }
];


const miBlog = new Blog("Recetas", "blog");


for (const post of recetasLectores) {
    
    miBlog.createPost(post.title, post.urltitle, post.content, post.content2);
}

const form = document.getElementsByClassName("nuevo-post")[0];

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    
    const formDatos = e.target;
    const title = formDatos.title.value; 
    const urltitle = formDatos.urltitle.value;
    const content = formDatos.content.value; 
    const content2 = formDatos.content2.value;


    
    if (!title || !content) {
        alert("El formulario esta vacioy"); 
        return; 
    }

    
    miBlog.createPost(title, urltitle, content, content2);
    formDatos.reset();
});



