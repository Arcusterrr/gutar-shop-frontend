import { StringifyOptions } from 'node:querystring';
import {FetchFunc} from '../../types';

type Request = {
    address:string
}

type Response = {
}

export const CreateOrder: FetchFunc<Request, undefined> = (client, request) => {
    console.log('123');
    
  return client.post(`/order/create`, request);
}