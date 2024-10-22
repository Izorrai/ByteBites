

class FormularioModal {
    constructor(titulo) {
        this.titulo = titulo;
        this.modalFormulario = null; 
    }

    crearModalFormulario() {
        
        this.modalFormulario = document.createElement("div");
        this.modalFormulario.classList.add("modal-formulario", "hidden-formulario"); 
        this.contenedor = document.createElement("div");
        this.contenedor.classList.add("selector");
        
        const tituloElemento = document.createElement("h2");
        const botonCerrar = document.createElement("img");
        botonCerrar.classList.add("boton-cerrar-formulario")
        botonCerrar.src = "imagenes/x.png"; 
        tituloElemento.innerText = this.titulo;

        this.modalFormulario.appendChild(tituloElemento);
        

        document.body.appendChild(this.modalFormulario);
        tituloElemento.appendChild(this.contenedor);
        tituloElemento.appendChild(botonCerrar);
        
        const hamburguesa = document.getElementsByClassName("hamburguesa")[0];
        if (hamburguesa) {
            hamburguesa.addEventListener("click", () => this.show()); 
        }

        botonCerrar.addEventListener("click",()=>this.hide())
        document.section.addEventListener("click",()=>this.hide());
        document.modalFormulario.addEventListener("click",(e)=>e.stopPropagation())
        
    }
    
    show() {
        this.modalFormulario.classList.remove("hidden-formulario"); 
    }

    hide() {
        this.modalFormulario.classList.add("hidden-formulario"); 
    }
}

export default FormularioModal;


