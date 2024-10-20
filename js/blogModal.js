
class BlogModal {
    constructor(titulo) {
        this.titulo = titulo;
        this.modalBlog = null;
        
    }

    crearModalBlog() {
        this.modalBlog = document.createElement("div");
        this.modalBlog.classList.add("modal-blog", "hidden-blog");

        const tituloElemento = document.createElement("h2");
        tituloElemento.innerText = this.titulo; 
        this.modalBlog.appendChild(tituloElemento);

        const post = document.createElement("form");
        post.classList.add("nuevo-post");

        const set = document.createElement("section");
        //const legenda = document.createElement("legend");
        //legenda.textContent = "TU RECETA";

        const titleLabel = document.createElement("label");
        titleLabel.setAttribute("for", "title");
        titleLabel.textContent = "Nombre receta: ";
        const titleInput = document.createElement("input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("name", "title");
        titleInput.setAttribute("id", "title");
        titleInput.required = true;


        const urlLabel = document.createElement("label");
        urlLabel.setAttribute("for", "title");
        urlLabel.textContent = "URL Imagen de la receta: ";
        const urlInput = document.createElement("input");
        titleInput.setAttribute("type", "text");
        titleInput.setAttribute("name", "title");
        titleInput.setAttribute("id", "urltitle");
        titleInput.required = true;

        const contentLabel = document.createElement("label");
        contentLabel.setAttribute("for", "content");
        contentLabel.textContent = "Ingredientes:";
        
        const textareaIngredientes = document.createElement("textarea");
        textareaIngredientes.classList.add("text-ingredientes");
        textareaIngredientes.setAttribute("name", "content");
        textareaIngredientes.setAttribute("id", "content");
        textareaIngredientes.setAttribute("rows", "8");
        textareaIngredientes.setAttribute("cols", "40");
        textareaIngredientes.required = true;

        const contentLabel2 = document.createElement("label");
        contentLabel2.setAttribute("for", "content");
        contentLabel2.textContent = "Receta";

        const textareaReceta = document.createElement("textarea");
        textareaReceta.classList.add("text-receta");
        textareaReceta.setAttribute("name", "content");
        textareaReceta.setAttribute("id", "content2");
        textareaReceta.setAttribute("rows", "18");
        //textareaReceta.setAttribute("cols", "40");
        textareaReceta.required = true;



        const createButton = document.createElement("button");
        createButton.setAttribute("type", "submit");
        createButton.textContent = "Crear receta";

        const clearButton = document.createElement("button");
        clearButton.setAttribute("type", "reset");
        clearButton.textContent = "Borrar";

        
        //set.appendChild(legenda);
        set.appendChild(titleLabel);
        set.appendChild(titleInput);
        set.appendChild(urlLabel);
        set.appendChild(urlInput);
        set.appendChild(contentLabel);
        set.appendChild(textareaIngredientes);
        set.appendChild(contentLabel2);
        set.appendChild(textareaReceta);
        set.appendChild(createButton);
        set.appendChild(clearButton);

       
        post.appendChild(set);
        this.modalBlog.appendChild(post); 

        const botonCerrar = document.createElement("img");
        botonCerrar.classList.add("boton-cerrar-blog");
        botonCerrar.src = "imagenes/x.png";
        tituloElemento.appendChild(botonCerrar); 

        document.body.appendChild(this.modalBlog);

        const hamburguesa = document.getElementsByClassName("blog")[0];
        if (hamburguesa) {
            hamburguesa.addEventListener("click", () => this.show());
        }

        botonCerrar.addEventListener("click", () => this.hide());

        
        this.modalBlog.addEventListener("click", (e) => {
            if (e.target === this.modalBlog) { 
                this.hide();
            }
        });
    }

    show() {
        this.modalBlog.classList.remove("hidden-blog");
    }

    hide() {
        this.modalBlog.classList.add("hidden-blog");
    }





}





export default BlogModal;


