import { IComponentProps, Lib } from "../../lib"
import { $ } from "../../main"
import "./card.css"


export const card = (title: string,subtitle:string,props?: IComponentProps) => {
    const items = $.state.cart.filter(i=>i === title).length

    const template = `<div class='card-ctr' ${Lib.spreadAttributes(props)} > 
    
    <div class='card-title'>
        ${title}
    </div>
    <div class='card-subtitle'>
        ${subtitle}
    </div>
    <div class='cart-items-no'>${items}</div>
    </div>`
    const component = Lib.createComponent(template) 
    return component
}