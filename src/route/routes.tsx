import {
    HomeOutlined,
    UserOutlined,
  } from '@ant-design/icons';

import LayOut from "@/components/Layout/LayOut"

import Home from "@/views/Home"
import Login from "@/views/Login"
import NotFound from "@/views/NotFound"

import ManegeGoods from "@/views/manege/ManegeGoods"
import ManegeUsers from "@/views/manege/ManegeUsers"


const routes = [
    {
        path: "login",
        element: <Login />
    },
    {
        path: '/',
        element: <LayOut />,
        children: [
            {
                index:true,
                path:"/",
                label:"首页",
                icon:<HomeOutlined />,
                element: <Home />,
            },
            {
                path:"manege",
                label:"管理",
                icon:<UserOutlined />,
                type: "sub",
                children:[
                    {
                        path: 'manege_goods',
                        label:"商品管理",
                        element: <ManegeGoods />
                    },
                    {
                        path: 'manege_users',
                        label:"用户管理",
                        element: <ManegeUsers />
                    }
                ]
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    },
]


export default routes