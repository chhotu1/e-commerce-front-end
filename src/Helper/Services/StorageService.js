const StorageService ={
    setAccessToken:(value) =>{
        localStorage.setItem('AccessToken',value);
    },
    getAccessToken:() =>{
        // let data = localStorage.getItem('AccessToken');
        // if(data && data!=='' &&data !==null)
        // return JSON.parse(JSON.stringify(localStorage.getItem('AccessToken')));
        return localStorage.getItem('AccessToken');
    },
    removeAccessToken:() =>{
        localStorage.removeItem('AccessToken');
    },
    setUserRole:(value) =>{
        localStorage.setItem('UserRole',value);
    },
    getUserRole:() =>{
        return localStorage.getItem('UserRole');
    },
    removeUserRole:() =>{
        localStorage.removeItem('UserRole');
    },
    setClockTimer:(value) =>{
        localStorage.setItem('ClockTimer',value);
    },
    getClockTimer:() =>{
        return localStorage.getItem('ClockTimer');
    },
    removeClockTimer:() =>{
        localStorage.removeItem('ClockTimer');
    },
    setIsClockTimer:(value) =>{
        localStorage.setItem('IsClockTimer',value);
    },
    getIsClockTimer:() =>{
        return localStorage.getItem('IsClockTimer');
    },
    removeIsClockTimer:() =>{
        localStorage.removeItem('IsClockTimer');
    },
}

export default StorageService;