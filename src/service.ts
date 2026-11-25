import {api} from './api';
import type {LoginRequest, RegisterRequest, itemPage, itemDetail, OperacionRequest} from './types';

export async function login (data: LoginRequest) {
    const res= await api.post<{token:string}>('/api/auth/login', data);
    return res.data;
}

export async function register (data: RegisterRequest) {
    await api.post ('/api/auth/register', data);
}

export async function getItems (page:number) {
    const res= await api.get<itemPage>(`/api/mentors`,{params:{page, size:5}});
    return res.data;
}

export async function getItemDetail (id:number) {
    const res= await api.get<itemDetail>(`/api/mentors/${id}`);
    return res.data;
}

export async function operar (id:number, data:OperacionRequest) {
    const res= await api.post(`/api/mentors/${id}/requests`, data);
    return res.data;
}
