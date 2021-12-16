
export type rating ={
    rate : number,
    count : number
}

export type dataType = {
    data:{
        title: string,
    id:number,
    description : string,
    image : string,
    price :number,
    category: string,
    rating :rating[]
    }[]
}
export type Image ={
    public_id : string ,
    url : string
}
export type categoryType ={
  cates :{
    image : Image[]
    _id : string,
    name : string,
    parent : string,
    slug: string,
    createdAt: string,
    updatedAt: string,
    __v : number
  }[]
}