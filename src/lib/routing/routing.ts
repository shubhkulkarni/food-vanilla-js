import Lib from "../core/library";
import events from "../events/events";
import { IComponentProps, IRoute, TComponentFunction, } from "../types/types";

class Router {
    private routing: IRoute[] = []
    private currentAppRoot: TComponentFunction | undefined | null
    constructor(){
        
    }

    get routes(){
        return this.routing
    }

    add(routes: IRoute[] | TComponentFunction){
        if(!(routes instanceof Array)) routes = [{path:"/", root: routes}]
        this.routing = routes
    }

    get currentRoot(){
        return this.currentAppRoot
    }

    navigate(path:string){
        history.pushState(undefined,"",path)
        Lib.refreshView()
        console.log('rendered from navigate')
    }

    resolveCurrentRoute(){
        console.log('cllaed')
        const currentPath = window.location.pathname
        const currentRoute = this.routing.find(i=>i.path === currentPath)
        this.currentAppRoot = currentRoute?.root || null
    }

    link(content: string,attributes: IComponentProps){ //todo
        return `<a ${Lib.spreadAttributes(attributes,['href'])}> ${content} </a>`
    }

}
const router = new Router()
export default router