export interface Rating {
    rate : number,
    count : number
}
export interface Product {
    id: number,
    title : string,
    price : number,
    description : string,
    category : string, 
    image : string,
    rating : Rating[]
}
export interface ListResponse<T> {
    data: T[];
  }
export type Image ={
    public_id : string ,
    url : string
}
export type categoryType ={
   
      image : Image[]
      _id : string,
      name : string,
      parent : string,
      slug: string,
      createdAt: string,
      updatedAt: string,
      __v : number

}