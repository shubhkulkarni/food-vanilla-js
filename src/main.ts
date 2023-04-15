import { card } from './components/Card/card'
import { navbar } from './components/navbar/navbar'
import { Lib, useState } from './lib'
import './style.css'

const cond = true

export const $ = new useState({ name:"Shubham" },render);


export function render (){
    const e = Lib.clubComponents('my-app',[
        navbar({'title':$.state.name,show:cond}),
        card(),
    ])
    
    Lib.renderApp(e)
}

render()
