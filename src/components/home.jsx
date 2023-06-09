import React, { useState } from 'react'
import Card from "./card";
import Filter from "./filter";
import Products from "./products";
import data from '../data.json';
import { useEffect } from 'react';

function Home() {

     const getcardFromLocalStorage = () => {
          let data = localStorage.getItem('cards')
          if(data){
               return JSON.parse(data)
          }else{
               return []
          }
     }

     const [item, setItem] = useState(data.products);
     const [sort , setSort] = useState("asc");
     const [brand , setBrand] = useState("");
     const [cardItem , setCardItem] = useState(getcardFromLocalStorage(),[])

     // اینگونه اطلاعات داخل کاردمونو در لوکال استوریج ذخیره میکنیم

     useEffect(()=>{
          localStorage.setItem('cards' , JSON.stringify(cardItem))
     },[cardItem , item])

     // این الگوریتم پایینی برای ترتیب قدیمیترین و جدیدترین محصولات است و به کار می اید
     const setProducts = (event) => {
          setSort(event.target.value)
          if(sort === 'asc'){
               setItem(data.products.sort((a,b)=>(a.id < b.id ? 1 : -1)));
          }
          if(sort === 'desc'){
               setItem(data.products.sort((a,b)=>(a.id > b.id ? 1 : -1)));
          }
     }


     // این الگوریتم برای فیلتر کردن محصولات بر اساس برند انها است
     const filterProduct = (event) => {
          if(event.target.value === ""){
               setBrand(event.target.value)
               setItem(data.products)
          }else{
               setBrand(event.target.value)
               setItem(data.products.filter((product)=> product.availableBrand.indexOf(event.target.value)>= 0))
          }
     }

     // این الگوریتم برای اضافه کردن محصولات به سبد خرید اضافه میشه
     const AddProducts = (product) => {

          const exict = cardItem.find((element)=> element.id === product.id)
          if(exict){
               setCardItem(
                    cardItem.map((element)=> element.id === product.id ? {...exict,qty : exict.qty + 1 } : element)
               )
          }else{
               setCardItem([...cardItem , {...product , qty : 1}])
          }

          
     }

     // با استفاده از الگوریتم زیر محصولات را از سبد خرید حذف میکنیم

     const removeProducts = (product) => {
          const exict = cardItem.find((element)=> element.id === product.id)
          if(exict.qty === 1){
               setCardItem(cardItem.filter((element)=> element.id !== product.id))
          }else{
               setCardItem(
                    cardItem.map((element)=> element.id === product.id ? {...exict,qty : exict.qty - 1 } : element)
               )
          }
     }

     return (
          <div className="container">
               <header>
                    <a href="">فروشگاه موبایل</a>
               </header>
               <main>
                    <div className="content">
                         <div className="main">
                              <Filter 
                              count={item.length}
                              setProducts={setProducts}
                              brand={brand}
                              filterProduct={filterProduct}
                              />
                              <Products item={item} AddProducts={AddProducts} />
                         </div>
                         <div className="sidebar">
                              <Card cartItems={cardItem} removeProducts={removeProducts} />
                         </div>
                    </div>
               </main>
               <footer>
                    طراحی و توسعه توسط من و تو.
               </footer>
          </div>
     )
}

export default Home
