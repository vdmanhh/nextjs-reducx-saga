import React from "react";

const Category = () => {
  return (
    <>
      <div className="category">
        <div className="name">
          Category
          <a href="#">Browse all</a>
        </div>
        <div className="rows">
          <div className="item">
            <img src="./img/cate.PNG" alt="" />
            <button>Catetgory</button>
          </div>
          <div className="item">
            <img src="./img/cate.PNG" alt="" />
            <button>Catetgory</button>
          </div>
          <div className="item">
            <img src="./img/cate.PNG" alt="" />
            <button>Catetgory</button>
          </div>
          <div className="item">
            <img src="./img/cate.PNG" alt="" />
            <button>Catetgory</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
