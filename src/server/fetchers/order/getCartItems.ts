import {FetchFunc} from '../../types';

type Request = {
}

type Response = {
    id:number,
    items: CartItems[]
}

type Guitar = {
    id:number,
    name:string,
    img:string,
    cost:number
}

export type CartItems = {
    id : number,
    guitar: Guitar
}

export const GetCartItems: FetchFunc<undefined, Response> = (client, request) =>
  client.get(`/cartitem`);