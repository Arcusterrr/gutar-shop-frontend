import {FetchFunc} from '../../types';

type Request = {
}

type Response = {
    items: Order[]
}

type Guitar = {
    id:number,
    name:string,
    img:string,
    cost:number
}

type Items = {
    id:number
    guitar: Guitar
}

export type Order = {
    id : number,
    items: Items [],
    address:string,
    orderDate:string,
}

export const GetOrders: FetchFunc<undefined, Order[]> = (client, request) =>
  client.get(`/order`);