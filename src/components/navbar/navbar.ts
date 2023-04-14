import Lib from "../../lib/library"
import { card } from "../Card/card"
import { button } from "../button/button";
import './navbar.css'

interface INavbarProps {
    title: string;
    show?:boolean
}
export const navbar = (props: INavbarProps) => {
    const component = Lib.createComponent(`<div class='nav-ctr'>navbar ${props.title}</div>`)

    const btns = Lib.clubComponents('div',[button({label:"Click me"}),
    button({label:"log out"})],'actions')



    return props.show ? Lib.clubComponents('nav-bar',[
        card(),
        component,
        btns
    ]) : null;
}