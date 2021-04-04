let store;

storeFileName = (fileName) =>{
    if(store != null){
        return store;
    }
    if(store == null){
        store = filename;
    }
}

module.exports = storeFileName;