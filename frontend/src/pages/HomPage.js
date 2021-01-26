import data from '../data.js';
export default class HomPage{
	render(){
		const { products } = data;
		//console.log(products);
		const $ = document.querySelector.bind('document');
		const result = products.map((product,index)=>{
            return`<tr>
            <td>${index +1}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>
                <button type="button" class="btn btn-primary btn-detail" data-id="${product.id}">Chi tiết</button>
                <button type="button" class="btn btn-danger btn-remove" data-id="${product.id}">Chi tiết</button>
            </td>
            </tr>`
        }).join("");
       return result;

	}
}