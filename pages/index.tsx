
import { useEffect, useState } from 'react'
import Blog from '../compoment/home_page/Blog'
import Category from '../compoment/home_page/Category'
import Collection from '../compoment/home_page/Collection'
import Highlight from '../compoment/home_page/Highlight'
import Product from '../compoment/home_page/Product'
import Slide from '../compoment/home_page/Slide'
import { categoryActions } from '../feature/categoryReducer'
import { productActions } from '../feature/productReducer'
import { useAppDispatch, useAppSelector } from '../store/hook'
export default function Home({}) {

  const dispatch = useAppDispatch();
  const {product} = useAppSelector((state)=>({...state}))
  const {category} = useAppSelector((state)=>({...state}))
  const data =product.list
  const cates =category.list
  useEffect(() => {  
    dispatch(productActions.fetchProductList())
    dispatch(categoryActions.fetchCategoryList())
  }, [dispatch])
 
  
  return (
    <>
        <Slide></Slide>
        <Highlight></Highlight>
        <Product data={data}></Product>
        <Collection></Collection>
        <Category cates={cates}></Category>
        <Blog></Blog>
    </>
  )
}
