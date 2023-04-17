import { Lib, events, UseState, link } from "../../lib";
import { $ } from "../../main";
import { card } from "../Card/card"
import { button } from "../button/button";
import './navbar.css'


interface INavbarProps {
   
}


events.add('#cart-btn','click',() => {
    const cartState = !$.state.cartOpen
    $.setState('cartOpen',cartState)
})

export const navbar = (props: INavbarProps) => {
    const component = Lib.createComponent(`<div class='nav-heading'>FoodClub</div>`)
    
    return Lib.clubComponents('nav-bar',[
        component,
        button(`Cart (${$.state.cart.length})`,{id:'cart-btn'})
    ],{class:'nav-bar'});
}