const RouteName = {
    HOME:'/',
    LOGIN:'/login',
    REGISTER:'/register',
    ADMIN:{
        MAIN:'/admin',
        CATEGORY:{
            MAIN:'/admin/category',
            ADD:'/admin/category/add',
            EDIT:'/admin/users/edit/',
        },
        PRODUCT:{
            MAIN:'/admin/product',
            ADD:'/admin/product/add',
            EDIT:'/admin/users/edit/',
        },
        USER:{
            MAIN:'/admin/users',
            ADD:'/admin/users/add',
            EDIT:'/admin/users/edit/',
        }
    },
    PROFILE_EDIT:'/admin/profile-edit',
    PROFILE:'/admin/profile',
    CHANGE_PASSWORD:'/admin/change-password',
}

export default RouteName
