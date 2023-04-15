class useState {
    private store
    private render

    constructor(initial: any,render: () => void) {
        this.store = initial || {}
        this.render = render
    }

    get state() {
        return this.store
    }

    setState(key: string, value: any) {

        let toRender = false;
        if (this.store[key] !== value) toRender =  true;

        this.store = { ...this.store, [key]: value }
        
        if(toRender) {
            this.render()
        }
        

        console.log({state:this.state})
    }

}

export default useState