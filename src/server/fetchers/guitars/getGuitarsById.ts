import { FetchFunc } from '../../types';

type Request = {
  sort: 'Date' | 'Price',
  page: number,
  order: 'ASC' | 'DESC',
  id: number,
}

type Response = {
  id:number,
  name:string,
  description:string,
  img:string,
  detailedImages: string[],
  cost:number,
  count:number,
  rating:number,
  dataCreated:string,
  guitarTypeId:number,
}

export const GetGuitarsById: FetchFunc<Request, Response> = (client, request) =>
  client.get(`/guitars/${request.id}`);
