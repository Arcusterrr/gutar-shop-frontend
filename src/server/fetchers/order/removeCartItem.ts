import {FetchFunc} from '../../types';

type Request = {
    id:number
}

type Response = {
}

export const removeCartItem: FetchFunc<Request, undefined> = (client, request) =>
  client.delete(`/cartitem/remove/${request.id}`);