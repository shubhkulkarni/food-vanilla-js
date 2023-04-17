import { card } from '../components/Card/card';
import { button } from '../components/button/button';
import {Lib, UseState, events, router} from '../lib'
import { $ } from '../main';
import './products.css'

const list = ["Biryani","Pizza","Tacko","Burger"]

list.forEach(i => {
    events.add( `#${i}`,'click',() => {
        $.setState('cart',[...$.state.cart,i])
    })
})

const fetchState = new UseState({loading:false},'fetch')


events.add('#fetch-btn','click',async () => {
    fetchState.setState('loading',true)
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    $.setState('users',data)
    fetchState.setState('loading',false)

})

events.add('#home','click',async () => {
    router.navigate("/home")
})


export const products = () => {
    const title = $.state.cartOpen ? Lib.createComponent('Cart') : Lib.createComponent('Products')
    const items = $.state.cartOpen ? [...new Set($.state.cart)] as string[] : list
    const newList = items.map((i:string) => {
        return card(i,'Order this item now!',{id:i})
    })

    const users = ($.state.users || []).map(i => {
        return Lib.createComponent(`<div>${i.name}</div>`)
    })

    const comp = Lib.createComponent(fetchState.state.loading ? `<div>Loading...</div>` : ``)

    return Lib.clubComponents('div',[title,Lib.createListNode(newList),
        button('FetchData',{id:'fetch-btn'}),comp,
        button('Home',{id:'home'}),
        Lib.createListNode(users)
    ],{class:'product-list'})
}