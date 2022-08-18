//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
//引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
//配置路由信息
export default [
    {
        path: "/center",
        component: Center,
        meta: { show: true },
        children:[
            {
                path:"myOrder",
                component:MyOrder,
            },
            {
                path:"groupOrder",
                component:GroupOrder,
            },
            {
                path:"/center",
                redirect:"/center/myorder",
            }
        ],
    },
    {
        path: "/paysuccess",
        component: PaySuccess,
        meta: { show: true }
    },
    {
        path: "/pay",
        component: Pay,
        meta: { show: true },
        beforeEnter: (to, from, next) => {
            if(from.path=="/trade"){
                next();
            }else{
                next(false);
            }
        }
    },
    {
        path: "/trade",
        component: Trade,
        meta: { show: true },
        //路由独享守卫
        beforeEnter: (to, from, next) => {
            if(from.path=="/shopcart"){
                next();
            }else{
                next(false);
            }
        }
    },
    {
        path: "/shopcart",
        component: ShopCart,
        meta: { show: true }
    },
    {
        path: "/addcartsuccess",
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: { show: true }
    },
    {
        path: "/home",
        component: Home,
        meta: { show: true }
    },
    {
        path: "/search",
        component: Search,
        meta: { show: true },
        name: 'search',
        props: (route) => ({
            keyword: route.params.keyword,
            big: route.query.big,
        }),
    },
    {
        path: "/login",
        component: Login,
        meta: { show: false }
    },
    {
        path: "/register",
        component: Register,
        meta: { show: false }
    },
    {
        path: "*",
        redirect: "/home"
    },
]