import Lib from "../../lib/library"

export const button = ({label}:{label:string}) => {
    const component = Lib.createComponent(`
    <button class='lib-btn'>
        ${label}
    </button>
    `) 
    return component
}