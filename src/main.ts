import { card } from './components/Card/card'
import { navbar } from './components/navbar/navbar'
import Lib from './lib/library'
import useState from './lib/state'
import './style.css'

const cond = true

export const $ = new useState({ name:"Shubham" },render);

export function render (){
    console.log('rendering')
    const e = Lib.clubComponents('my-app',[
        navbar({'title':$.state.name,show:cond}),
        card(),
    ])
    
    Lib.renderApp(e)
}

render()
