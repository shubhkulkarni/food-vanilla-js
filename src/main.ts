import { navbar } from './components/navbar/navbar'
import {products} from './views/products.js'
import { Lib, UseState } from './lib'
import './style.css'
import { cart } from './views/cart/cart'

export const $ = new UseState({ name:"Shubham" ,cart:[],cartOpen:false,userData:{name:'',address:''}});

    const appRoot = () => Lib.clubComponents('my-app',[
        navbar({}),
        products(),
        $.state.cartOpen ? cart() : null
    ],{class:'my-app'})
    

    Lib.renderApp(appRoot)



