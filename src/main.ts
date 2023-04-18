import { navbar } from './components/navbar/navbar'
import { products } from './views/products.js'
import { Lib, useState, router } from './lib'
import './style.css'
import { cart } from './views/cart/cart'

export const $ = new useState({ name: "Shubham", cart: [], cartOpen: false, userData: { name: '', address: '' } },'global');


const comp1 = () => Lib.clubComponents('my-app', [
    navbar({}),
    products(),
    $.state.cartOpen ? cart() : null
], { class: 'my-app' })

const comp2 = () => Lib.clubComponents('my-app', [
    navbar({}),
], { class: 'my-app' })

router.render([
    { path: '/', root: comp1 },
    { path: '/home', root: comp2 },
])


// import { router, Lib,useState,events } from './lib'

// const _ = new useState({counter:0});

// events.add('.counter','click',()=>{
//   _.setState('counter',_.state.counter+1)
// })

// const app = () => {
//   const text = Lib.createComponent(`${_.state.counter}`)
//   const btn = Lib.createComponent(`<button class='counter'>add</button>`)

//   return Lib.clubComponents('div',[text,btn])
// };

// router.render(app);
