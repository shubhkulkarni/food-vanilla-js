import { card } from '../components/Card/card';
import { button } from '../components/button/button';
import {Lib, events} from '../lib'
import { $ } from '../main';
import './products.css'

const list = ["Biryani","Pizza","Tacko","Burger"]

list.forEach(i => {
    events.add( `#${i}`,'click',() => {
        $.setState('cart',[...$.state.cart,i])
    })
})

export const products = () => {
    const title = $.state.cartOpen ? Lib.createComponent('Cart') : Lib.createComponent('Products')
    const items = $.state.cartOpen ? [...new Set($.state.cart)] : list
    const newList = items.map(i => {
        return card(i,'Order this item now!',{id:i})
    })
    // const component = Lib.createComponent(template) 
    return Lib.clubComponents('div',[title,Lib.createListNode(newList)],{class:'product-list'})
}