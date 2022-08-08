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
    LEAVE:{
        MAIN:'/admin/leave',
        ADD:'/admin/leave/add',
        EDIT:'/admin/leave/edit/',
    },
    NOTIFICATION:{
        MAIN:'/admin/notification',
        ADD:'/admin/notification/add',
        EDIT:'/admin/notification/edit/',
    },
    ATTENDENCE:{
        MAIN:'/admin/attendance',
        ADD:'/admin/attendance/add',
        EDIT:'/admin/attendance/edit/',
    }
    
}

export default RouteName
