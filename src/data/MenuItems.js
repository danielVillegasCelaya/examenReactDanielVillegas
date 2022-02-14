import React from "react";
import Ejercicio1 from "../components/Ejercicio1";
import Ejercicio2 from "../components/Ejercicio2";
import Ejercicio3 from "../components/Ejercicio3";
import Titulo from "../components/Titulo";

export const MenuItems=[
    {
        id:1,
        path:'/',
        title: 'Titulo',
        component: <Titulo/>
    },
    {
        id:1,
        path:'/ejercicio1',
        title: 'Ej1',
        component: <Ejercicio1/>
    },
    {
        id:2,
        path:'/ejercicio2',
        title: 'Ej2',
        component: <Ejercicio2/>
    },
    {
        id:3,
        path:'/ejercicio3',
        title: 'Ej3',
        component: <Ejercicio3/>
    }
    


]