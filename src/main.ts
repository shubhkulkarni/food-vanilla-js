import { navbar } from './components/navbar/navbar'
import { products } from './views/products.js'
import { Lib, UseState, router } from './lib'
import './style.css'
import { cart } from './views/cart/cart'

export const $ = new UseState({ name: "Shubham", cart: [], cartOpen: false, userData: { name: '', address: '' } },'global');


const comp1 = () => Lib.clubComponents('my-app', [
    navbar({}),
    products(),
    $.state.cartOpen ? cart() : null
], { class: 'my-app' })

const comp2 = () => Lib.clubComponents('my-app', [
    navbar({}),
], { class: 'my-app' })

router.add([
    { path: '/', root: comp1 },
    { path: '/home', root: comp2 },
])

Lib.renderApp()
