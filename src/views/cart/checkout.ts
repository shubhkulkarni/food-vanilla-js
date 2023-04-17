import { Lib } from "../../lib"

export const checkout = (data: {name:string,address:string,cartItems: string[]}) => {
    const template = `
        <div class='table-heading'> Order Summary </div>
        <table>
            <tr>
                <th>Name</th>
                <th>Address</th>
            </tr>
            <tr>
                <td>${data.name}</td>
                <td>${data.address}</td>
            </tr>
        </table>
        
    `
    return Lib.createComponent(data.name ? template: '')
}   