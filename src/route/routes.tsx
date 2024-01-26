import LayOut from "@/components/Layout/LayOut"

import Home from "@/views/Home"
import Login from "@/views/Login"

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
                element: <Home />,
            },
            {
                path: 'manege_goods',
                element: <ManegeGoods />
            },
            {
                path: 'manege_users',
                element: <ManegeUsers />
            }
        ]
    }
]


export default routes