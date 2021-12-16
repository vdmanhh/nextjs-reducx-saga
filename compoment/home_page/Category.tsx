import React from "react";
import { categoryType } from "../../pages/types";

const Category = ({cates}:categoryType) => {
  return (
    <>
      <div className="category">
        <div className="name">
          Category
          <a href="#">Browse all</a>
        </div>
        <div className="rows">
        {
          cates && cates.map((cate,idx)=>{
            return(
              <div className="item">
              <img src={cate.image &&cate.image.length>0 ?cate.image[0].url :"" } alt="" />
              <button>{cate.name}</button>
              </div>
            )
          })
        }
        </div>
      </div>
    </>
  );
};

export default Category;
