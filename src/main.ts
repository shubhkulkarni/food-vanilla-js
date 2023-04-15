import { card } from './components/Card/card'
import { navbar } from './components/navbar/navbar'
import {products} from './views/products.js'
import { Lib, useState } from './lib'
import './style.css'

const cond = true

export const $ = new useState({ name:"Shubham" },render);


export function render (){
    const e = Lib.clubComponents('my-app',[
        navbar({}),
        products()
    ],{class:'my-app'})
    
    Lib.renderApp(e)
}

render()

console.log(Lib.spreadAttributes({class:'hello',data:'someData',href:null}))