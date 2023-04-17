import { IComponentProps, Lib } from "../../lib"
import { $ } from "../../main"
import { button } from "../button/button"
import "./card.css"


export const card = (title: string,subtitle:string,props?: IComponentProps) => {
    const items = $.state.cart.filter((i: string)=>i === title).length

    const template = `<div class='card-ctr' ${Lib.spreadAttributes(props)} > 
    
    <div class='card-title'>
        ${title} (${items})
    </div>
    <div class='card-subtitle'>
        ${subtitle}
    </div>
    
            ${true ? button('Add to cart').innerHTML : ''}
    </div>`

    
    const component = Lib.createComponent(template) 
    return component
}