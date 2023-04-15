import events from "./events"

class Lib {

    static clubComponents(parent: string,components: (Element | null)[],attributes?: {[key: string]: string}){
        const root = document.createElement(parent)
        if(attributes){
            Object.entries(attributes).forEach(i => {
                root.setAttribute(i[0],i[1])
            })
        }
        components.forEach(c => {
            if(c) root.appendChild(c)
        })
        return root
    }

    static renderApp(root: Element) {
        const element = document.querySelector<HTMLDivElement>('#app')
        element!.innerHTML = root.innerHTML
        this.registerEventListeners()
    }

    static registerEventListeners(){
        events.getRegistry().forEach(e => {
            (document.querySelectorAll(e.selector) || []).forEach(i => {
                i.addEventListener(e.event,e.callback)
            })
        })
    }

    static createComponent(template: string,name?:string){
        const element = document.createElement(name || 'div');
        element.innerHTML = template;
        return element;
    }

    static createListNode (list: (Element | null)[],parent: string = 'ul'){
        const element = document.createElement(parent || 'div')
        list.forEach(i => {
            if(i) element.appendChild(i)
        })
        return element
    }

    static spreadAttributes(attributes: {[key:string]: any}){
        let atrStr = ""
        
        Object.entries(attributes).forEach(i=>{
            const exp = typeof(i[1]) === 'string' ? ` ${i[0]}="${i[1]}" ` : ` ${i[0]}=${i[1]} `
            atrStr = atrStr + " " + exp 
        })
        return atrStr
    }
    
}


export default Lib