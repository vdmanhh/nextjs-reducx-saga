import React from "react";
import { dataType } from "../../pages/types";

const Product = ({data}:dataType) => {

  
  return (
    <>
      <div className="product">
        <div className="name">
          Product
          <a href="#">Browse all</a>
        </div>
        <div className="rows">
          {/* <div className="item">
            <img src="./img/item1.png" alt="" />
            <div className="content">
              <p className="item_name">Item name</p>
              <p className="edit">Edition 0 of 0</p>
              <p>0 N1</p>
            </div>
          </div> */}

            {
              data.map((value,idx)=>{
                return (
                  <div className="item">
                  <img src={value.image} alt="" />
                  <div className="content">
                    <p className="item_name">{`${value.title.substring(0, 40)}....`}</p>
                    <p className="edit">{`${value.description.substring(0, 100)}....`}</p>
                    <p>{value.price}$</p>
                  </div>
                </div>
                )
              })
            }
         
        </div>
      </div>
    </>
  );
};

export default Product;
