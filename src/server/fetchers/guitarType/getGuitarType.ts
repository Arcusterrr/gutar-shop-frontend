import {FetchFunc} from '../../types';

type Request = {
    sortName : 'ASC' | 'DESC'
}

type Response = {
    items: GuitarTypes[]
}

export type GuitarTypes = {
    id : number,
    name : string
}

export const GetGuitarTypes: FetchFunc<Request, Response> = (client, request) =>
  client.get(`/guitartypes/?SortName=${request.sortName}`);