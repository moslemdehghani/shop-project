import React from 'react'

function Filter(props) {
     return (
          <div className="filter">
               <div className="result">
                    تعداد محصولات : {props.count} محصولات
               </div>
               <div className="sort">
                    <div className="sort-title">مرتب سازی بر اساس</div>
                    <div className="form-checkbox">
                         <div className="form-group">
                              <input type="radio" name="radioValues" value="asc" onChange={props.setProducts} />
                              <label htmlFor="">جدیدترین محصولات</label>
                         </div>
                         <div className="form-group">
                              <input type="radio" name="radioValues" value="desc" onChange={props.setProducts} />
                              <label htmlFor="">قدیمی ترین محصولات</label>
                         </div>
                    </div>
               </div>
               <div className="brand">
                    برندها
                    <select value={props.brand} onChange={props.filterProduct}>
                         <option value="">همه</option>
                         <option value="samsung">سامسونگ</option>
                         <option value="iphone">آیفون</option>
                         <option value="motorela">موتورولا</option>
                         <option value="blackberry">بلک بری</option>
                         <option value="lg">ال جی</option>
                         <option value="sony">سونی</option>
                    </select>
               </div>
          </div>
     )
}

export default Filter
