import {FetchFunc} from '../../types';

type Request = {
    id:number
}
type Response = {

}

export const CreateCartItems: FetchFunc<Request, Response> = (client, request) =>
  client.post(`/cartitem/add/${request.id}`);