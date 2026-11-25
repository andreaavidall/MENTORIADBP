export interface LoginRequest {email: string; password: string;}
export interface RegisterRequest {name: string; email: string; password: string;}

export interface item {id: number; name: string; speciality: string; modality: string; availableSlots: number; description: string;}
export interface itemPage {items: item[]; page: number; totalPages: number;}

export interface Opcion {id: number; CAMPO:TIPO;}
export interface itemDetail extends item {Lista:Opcion[];}

export interface OperacionRequest {CAMPO:TIPO;}
