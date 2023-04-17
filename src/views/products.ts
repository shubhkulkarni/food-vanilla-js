import { card } from '../components/Card/card';
import { button } from '../components/button/button';
import {Lib, UseState, events} from '../lib'
import { $ } from '../main';
import './products.css'

const list = ["Biryani","Pizza","Tacko","Burger"]

list.forEach(i => {
    events.add( `#${i}`,'click',() => {
        $.setState('cart',[...$.state.cart,i])
    })
})

const fetchState = new UseState({loading:false})


events.add('#fetch-btn','click',async () => {
    fetchState.setState('loading',true)
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    $.setState('users',data)
    fetchState.setState('loading',false)

})

export const products = () => {
    const title = $.state.cartOpen ? Lib.createComponent('Cart') : Lib.createComponent('Products')
    const items = $.state.cartOpen ? [...new Set($.state.cart)] as string[] : list
    const newList = items.map((i:string) => {
        return card(i,'Order this item now!',{id:i})
    })
    const comp = Lib.createComponent(fetchState.state.loading ? `<div>Loading...</div>` : ``)

    // const component = Lib.createComponent(template) 
    return Lib.clubComponents('div',[title,Lib.createListNode(newList),button('FetchData',{id:'fetch-btn'}),comp],{class:'product-list'})
}