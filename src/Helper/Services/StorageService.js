const StorageService ={
    setAccessToken:(value) =>{
        localStorage.setItem('AccessToken', JSON.stringify(value));
    },
    getAccessToken:() =>{
        let data = localStorage.getItem('AccessToken');
        if(data && data!=='' &&data !==null)
        return JSON.parse(JSON.stringify(localStorage.getItem('AccessToken')));
        return localStorage.getItem('AccessToken');
    },
    removeAccessToken:() =>{
        localStorage.removeItem('AccessToken');
    },
}

export default StorageService;