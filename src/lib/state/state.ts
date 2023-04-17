import Lib from "../core/library";


class UseState {
    private store
    
    constructor(initial?: any) {
        this.store = initial || {}
    }

    get state() {
        return this.store
    }

    setState(key: string, value: any) {

        let toRender = false;
        if (this.store[key] !== value) toRender =  true;

        this.store = { ...this.store, [key]: value }
        
        if(toRender) {
            Lib.renderApp()
            console.log('rendered')
        }
        console.log({state:this.state})
    }

}

export default UseState