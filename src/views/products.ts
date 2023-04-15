import { card } from '../components/Card/card';
import { button } from '../components/button/button';
import {Lib} from '../lib'
import './products.css'

export const products = () => {
    
    // const component = Lib.createComponent(template) 
    const list = ["Biryani","Pizza","Tacko","Burger"].map(i => card(i,'Order this item now!'))
    
    return Lib.clubComponents('products',[Lib.createListNode(list)],{class:'product-list'})
}