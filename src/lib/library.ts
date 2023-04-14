class Lib {

    //todo: change classes to attributes obj
    static clubComponents(parent: string,components: (Element | null)[],classes?:string){
        const root = document.createElement(parent)
        root.setAttribute('class',classes || "")
        components.forEach(c => {
            if(c) root.appendChild(c)
        })
        return root
    }

    static renderApp(root: Element) {
        document.querySelector<HTMLDivElement>('#app')!.appendChild(root);
    }

    static createComponent(template: string,name?:string){
        const element = document.createElement(name || 'div');
        element.innerHTML = template;
        return element;
    }
    
}


export default Lib