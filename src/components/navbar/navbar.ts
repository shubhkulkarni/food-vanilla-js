import { Lib } from "../../lib";
import { card } from "../Card/card"
import { button } from "../button/button";
import './navbar.css'


interface INavbarProps {
   
}
export const navbar = (props: INavbarProps) => {
    const component = Lib.createComponent(`<div class='nav-heading'>FoodClub</div>`)
    
    return Lib.clubComponents('nav-bar',[
        component,
        button("Cart")
    ],{class:'nav-bar'});
}