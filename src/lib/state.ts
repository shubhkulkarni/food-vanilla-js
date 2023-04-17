import Lib from "./library";
import app from "./root";

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
            Lib.renderApp(app.root.appRoot as () => Element,app.root.parent,app.root.attributes)
            console.log('rendered',app.root)
        }
        console.log({state:this.state})
    }

}

export default UseState