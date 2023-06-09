import React from 'react'
import FormatCurrency from '../utils'

function Products(props) {


     return (
          <div>
               <ul className="products">
                    {
                         props.item.map((item) =>
                              <li key={item.id}>
                                   <div className="product">
                                        <img src={item.image} alt="" />
                                        <p>{item.title}</p>
                                        <div className="product-price">
                                             <button onClick={()=>props.AddProducts(item)}>افزودن به سبد خرید</button>
                                             <div className="price">{FormatCurrency(item.price)}</div>
                                        </div>
                                   </div>
                              </li>
                         )
                    }
               </ul>
          </div>
     )
}

export default Products
