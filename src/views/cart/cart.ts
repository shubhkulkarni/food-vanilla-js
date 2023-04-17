import { Lib, events } from "../../lib"
import { $ } from "../../main"
import './cart.css'
import { checkout } from "./checkout"


events.add('.checkout-btn','click', () => {
    const name = Lib.getFormItem('#checkout-name').value
    const address = Lib.getFormItem('#checkout-address').value
    $.setState('userData',{name,address,cartItems: $.state.cart})
})

export const cart = () => {
    const template = `
        <form>
            <input type='text' id='checkout-name' placeholder='your name'/>
            <input type='text' id='checkout-address' placeholder='Address'/>
            <button type='button' class='checkout-btn'>Checkout and Pay</button>
        </form>
    `
    const element = Lib.createComponent(template)
    return Lib.clubComponents('div',[element,checkout($.state.userData)],{class:'cart-checkout'})
}