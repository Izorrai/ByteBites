
import Post from "./postRecetas.js";


class Blog {
    
    constructor(title, urtitle, content, content2, sectionId) {
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

        
        this.posts = [];
        
        this.searchFilter = "";

    }

    
    
    createPost(title, content) {
       
        const newPost = new Post(title, content, this); 
        this.posts.push(newPost);
        this.postSection.appendChild(newPost.html);
    }

    
    removePost(id) {
        
        const indexToRemove = this.posts.findIndex(post => post.id === id);
        
        this.posts.splice(indexToRemove, 1); 
        console.log(this.posts); 
    }
}


export default Blog;
