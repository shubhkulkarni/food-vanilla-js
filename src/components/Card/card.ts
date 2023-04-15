import { Lib } from "../../lib"
import "./card.css"

export const card = (title: string,subtitle:string) => {
    const template = `<div class='card-ctr'> 
    
    <div class='card-title'>
        ${title}
    </div>
    <div class='card-subtitle'>
        ${subtitle}
    </div>

    </div>`
    const component = Lib.createComponent(template) 
    return component
}