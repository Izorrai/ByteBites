class Post {
   
    static lastId = 0;

    
    constructor(title, urltitle, content, content2, blog) {
        this.title = title;
        this.urltitle = urltitle;
        this.content = content;
        this.content2 = content2;
        this.id = ++Post.lastId;
        this.html = this.crearSeccicon(); 
        this.crearHtml(); 
        this.blog = blog; 
    }

    crearSeccicon() {
        const article = document.createElement("section"); 
        article.classList.add("post"); 
        article.id = "post " + this.id; 
        return article; 
    }

    
    crearHtml() {
        this.html.innerHTML = ""; 
        const title = document.createElement("h2");
        const urltitle = document.createComment("p") 
        const content = document.createElement("p");
        const content2 = document.createElement("p"); 
        const deleteButton = document.createElement("button"); 
        const editButton = document.createElement("button"); 

        title.innerText = this.title; 
        urltitle.innerText = this.urltitle;
        content.innerText = this.content;
        content2.innerText = this.content2;
        deleteButton.innerText = "Borrar"; 
        editButton.innerText = "Editar"; 
        
        
        
        this.html.appendChild(title);
        this.html.appendChild(urltitle)
        this.html.appendChild(content);
        this.html.appendChild(content2);
        this.html.appendChild(editButton);
        this.html.appendChild(deleteButton);
    }

     
}

export default Post;
