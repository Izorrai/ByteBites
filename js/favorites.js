function getFavorites(){
    const favorites = localStorage.getItem("favorites") || "[]";
    return JSON.parse(favorites);
}

function saveFavorites(favorites){
    const favoritesString = JSON.stringify(favorites);
    localStorage.setItem("favorites",favoritesString);
}

function addFavorite(element){
    const favorites = getFavorites();
    favorites.push(element);
    saveFavorites(favorites);
}

function removeFavorite(element){
    const favorites = getFavorites();
    const elementIndex = favorites.findIndex(e => e.id === element.id);
    if(elementIndex === -1){
        return ;
    }
    favorites.splice(elementIndex,1);
    saveFavorites(favorites);
}
function isFavorite(element){
    const favorites = getFavorites();
    const elementIndex = favorites.findIndex(e => e.id === element.id);
    if(elementIndex === -1){
        return false;
    }
    return true;
}
function toggleFavorite(element){
    if(isFavorite(element)){
        removeFavorite(element);
    }else{
        addFavorite(element);
    }
}

export{
    addFavorite,
    getFavorites,
    saveFavorites,
    removeFavorite,
    isFavorite,
    toggleFavorite
}