import { IComponentProps, Lib, events } from "../../lib"
import { $ } from "../../main"

export const button = (label: string,props?: IComponentProps) => {

    
    const component = Lib.createComponent(`
    <button class='lib-btn' ${Lib.spreadAttributes(props)} >
        ${label}
    </button>
    `) 
    
    return component
}