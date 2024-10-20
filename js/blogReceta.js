
import Post from "./postRecetas.js";


class Blog {
    
    constructor(title, urltitle, content, content2, sectionId) {
        this.title = title;
        this.urltitle = urltitle;
        this.content = content;
        this.content2 = content2 
        this.sectionId = sectionId; 
        this.mainSection = document.getElementById(sectionId); 

        
        const titleHtml = document.createElement("h1");
        titleHtml.textContent = this.title; 
        this.mainSection.appendChild(titleHtml);

        
        
        this.postSection = document.createElement("section");
        this.postSection.classList.add("posts"); 
        this.mainSection.appendChild(this.postSection); 

        
        this.recetasLectores = [];
        
        
    }

    
    
    createPost(title,urltitle, content, content2) {
       
        const newPost = new Post(title, urltitle, content, content2, this); 
        this.recetasLectores.push(newPost);
        this.postSection.appendChild(newPost.html);
    }

    
    
}


export default Blog;
