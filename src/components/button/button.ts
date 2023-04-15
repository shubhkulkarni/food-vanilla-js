import { Lib, events } from "../../lib"
import { $ } from "../../main"

events.add('.lib-btn','click',() => {
    const name = $.state.name === 'Shubham' ? 'Snehal' : 'Shubham'
    $.setState('name',name)
})

export const button = ({label}:{label:string}) => {

    
    const component = Lib.createComponent(`
    <div>${$.state.name}</div>
    <button class='lib-btn'>
        ${label}
    </button>
    `) 
    
    return component
}