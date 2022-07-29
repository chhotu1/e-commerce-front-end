const RouteName = {
    HOME:'/',
    LOGIN:'/login',
    REGISTER:'/register',
    ADMIN:{
        MAIN:'/admin',
        CATEGORY:{
            MAIN:'/admin/category',
            ADD:'/admin/category/add',
        },
        PRODUCT:{
            MAIN:'/admin/product',
            ADD:'/admin/product/add',
        },
        USER:{
            MAIN:'/admin/users',
            ADD:'/admin/users/add',
        }
    }
}

export default RouteName
