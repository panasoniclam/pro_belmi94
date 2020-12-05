import React from  'react'
import MetaMash from './MetaMash'
import Token from './Token';
import Manage from './Manage';
import Resource from './Resource';
import Build from './Build';
import Beta from './Beta';
import Notfound from  './Notfound';
const route  =  [
    {
        path:'/',
        exact:true,
        main:()=>{return(<Token/>)}
    },
    {
        path:'/download',
        exact: false,
        main:()=>{return(<MetaMash/>)}
    },
    {
        path:'/manage',
        exact: false,
        main:()=>{return(<Manage/>)}
    },
    {
        path:'/build',
        exact:false,
        main:()=>{return(<Build/>)}
    },
    {
        path:'/resource',
        exact:false,
        main:()=>{return(<Resource/>)}
    },
    {
        path:'/beta',
        exact:false,
        main:({match})=>{return(<Beta match={match}/>)}
    }
]
export default route;