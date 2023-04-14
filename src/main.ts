import { card } from './components/Card/card'
import { navbar } from './components/navbar/navbar'
import Lib from './lib/library'
import './style.css'

const cond = true

const e = Lib.clubComponents('my-app',[
    navbar({'title':'1',show:cond}),
    card(),


])

Lib.renderApp(e)

