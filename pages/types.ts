
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