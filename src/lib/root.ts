import IComponentProps from "./types"

class Root{
    private appRoot: null | ((...args: any[]) => Element | null) = null
    private parent: string = ''
    private attributes: IComponentProps | undefined
    constructor(){
        
    }

    add (parent: string,component : (...args: any[]) => Element,attributes?: IComponentProps){
        
        this.appRoot = component
        this.parent = parent
        this.attributes = attributes
    }
    get root(){
        return {
            appRoot: this.appRoot,
            parent:this.parent,
            attributes:this.attributes
        }
    }

}

const app = new Root()

export default app