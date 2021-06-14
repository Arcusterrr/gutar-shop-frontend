import { FetchFunc } from '../../types';

type Request = {
  sort: 'Date' | 'Price',
  page: number,
  order: 'ASC' | 'DESC',
  typeId?: number,
}

type Response = {
    items:Guitar[],
    totalCount: number,
}

export type Guitar = {
  id:number,
  name:string,
  description:string,
  img:string,
  cost:number,
  count:number,
  rating:number,
  dataCreated:string,
  guitarTypeId:number,
};

export const GetGuitars: FetchFunc<Request, Response> = (client, request) =>
  client.get(`/guitars?sort=${request.sort}&page=${request.page}&order=${request.order}${request.typeId ? '&typeId=' + request.typeId : ''}`);
